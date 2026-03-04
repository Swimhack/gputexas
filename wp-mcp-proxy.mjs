#!/usr/bin/env node
/**
 * WordPress MCP Proxy for Claude Code
 * Bridges stdio <-> Streamable HTTP with JWT auth.
 */

import { createInterface } from 'readline';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '.env');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8').split('\n')
    .filter(l => l.trim() && !l.startsWith('#'))
    .map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; })
);

const WP_URL = env.WP_MCP_URL || 'https://gputexas.com';
const MCP_ENDPOINT = `${WP_URL}/wp-json/wp/v2/wpmcp/streamable`;
const JWT_ENDPOINT = `${WP_URL}/wp-json/jwt-auth/v1/token`;
const USERNAME = env.WP_MCP_USERNAME;
const APP_PASSWORD = env.WP_MCP_PASSWORD;

let jwtToken = null;
let tokenExpiry = 0;
let sessionId = null;

async function getJwtToken() {
  const now = Date.now() / 1000;
  if (jwtToken && now < tokenExpiry - 60) return jwtToken;

  const resp = await fetch(JWT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: APP_PASSWORD }),
  });

  const data = await resp.json();
  if (!data.token) throw new Error(`JWT auth failed: ${JSON.stringify(data)}`);

  jwtToken = data.token;
  tokenExpiry = data.expires_at || (now + 3600);
  process.stderr.write(`[wp-mcp-proxy] JWT acquired (expires in ${data.expires_in}s)\n`);
  return jwtToken;
}

async function sendToMcp(message, retried = false) {
  const token = await getJwtToken();

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
    'Authorization': `Bearer ${token}`,
  };
  if (sessionId) headers['Mcp-Session-Id'] = sessionId;

  const resp = await fetch(MCP_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify(message),
  });

  // Capture session ID
  const mcpSession = resp.headers.get('mcp-session-id');
  if (mcpSession) sessionId = mcpSession;

  // Handle expired token
  if (resp.status === 401 && !retried) {
    jwtToken = null;
    return sendToMcp(message, true);
  }

  const contentType = resp.headers.get('content-type') || '';

  if (contentType.includes('text/event-stream')) {
    // Parse SSE
    const text = await resp.text();
    const results = [];
    for (const block of text.split('\n\n')) {
      let eventData = '';
      for (const line of block.split('\n')) {
        if (line.startsWith('data: ')) eventData += line.slice(6);
      }
      if (eventData) {
        try { results.push(JSON.parse(eventData)); } catch {}
      }
    }
    return results;
  } else {
    // Direct JSON
    const text = await resp.text();
    try { return [JSON.parse(text)]; } catch { return [{ raw: text }]; }
  }
}

async function main() {
  const rl = createInterface({ input: process.stdin });

  for await (const line of rl) {
    if (!line.trim()) continue;

    let message;
    try {
      message = JSON.parse(line);
    } catch {
      process.stderr.write(`[wp-mcp-proxy] Bad JSON: ${line}\n`);
      continue;
    }

    try {
      const results = await sendToMcp(message);
      for (const msg of results) {
        process.stdout.write(JSON.stringify(msg) + '\n');
      }
    } catch (e) {
      process.stderr.write(`[wp-mcp-proxy] Error: ${e.message}\n`);
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: message.id || null,
        error: { code: -32603, message: e.message },
      }) + '\n');
    }
  }
}

main().catch((e) => {
  process.stderr.write(`[wp-mcp-proxy] Fatal: ${e.message}\n`);
  process.exit(1);
});
