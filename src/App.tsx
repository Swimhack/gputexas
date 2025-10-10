import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import GasGrillsPage from './components/GasGrillsPage';
import GasLogsPage from './components/GasLogsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grills/gas" element={<GasGrillsPage />} />
          <Route path="/logs/gas" element={<GasLogsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;