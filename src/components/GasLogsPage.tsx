import React from 'react';

const LOGS = [
  {
    name: 'Real Fyre Charred Series — Vented',
    description: 'Hand-painted, ultra-realistic charred log sets. Available in Alpine Birch, Aged Split Oak, and Frontier Oak. Sizes 18"–30".',
    img: 'https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?auto=format&fit=crop&w=600&q=80',
    badge: 'BESTSELLER',
    href: 'https://gputexas.com/logs',
  },
  {
    name: 'Real Fyre Evening Fyre — Vent-Free',
    description: 'G18 & G19 burner system with Evening Fyre log sets. No chimney needed. Available in natural gas and propane. Sizes 18"–30".',
    img: 'https://images.unsplash.com/photo-1513453575765-7fa1c26a93cf?auto=format&fit=crop&w=600&q=80',
    badge: 'FEATURED',
    href: 'https://gputexas.com/logs',
  },
  {
    name: 'Real Fyre American Oak — Vented',
    description: 'Classic American Oak log set with natural-looking bark and wood detail. Perfect for traditional or transitional fireplaces.',
    img: 'https://images.unsplash.com/photo-1554071807-71234680f47a?auto=format&fit=crop&w=600&q=80',
    badge: null,
    href: 'https://gputexas.com/logs',
  },
  {
    name: 'Real Fyre G10 Burner — Vent-Free',
    description: 'G10 series vent-free burner system. Heats up to 1,500 sq ft with 99.9% efficiency. Includes ODS pilot safety system.',
    img: 'https://images.unsplash.com/photo-1476080819537-ed918f9c4570?auto=format&fit=crop&w=600&q=80',
    badge: null,
    href: 'https://gputexas.com/logs',
  },
  {
    name: 'Real Fyre Split Oak — Vented',
    description: 'Realistically detailed split oak log set for vented fireplaces. Hand-painted to match natural wood tones and character.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    badge: null,
    href: 'https://gputexas.com/logs',
  },
  {
    name: 'Remote Control Systems',
    description: 'On/Off and variable flame remote controls compatible with all Real Fyre systems. Wall switches and hand-held options available.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
    badge: null,
    href: 'https://gputexas.com/logs/remote-controls',
  },
];

function GasLogsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gas Logs</h1>
          <p className="text-xl text-gray-300">
            Authentic Real Fyre fireplace experiences — 35+ sets in stock
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Real Fyre Log Collections</h2>
            <p className="text-gray-600">Vented and vent-free options — contact us for pricing</p>
          </div>
          <a
            href="https://gputexas.com/logs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold whitespace-nowrap"
          >
            View Full Catalog →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOGS.map((log) => (
            <div
              key={log.name}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {log.badge && (
                <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {log.badge}
                </div>
              )}
              <div className="h-56 overflow-hidden">
                <img
                  src={log.img}
                  alt={log.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{log.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{log.description}</p>
                <a
                  href={log.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Request a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-3">Vented or Vent-Free — Which Is Right for You?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Our team can help you choose the right log set for your fireplace. We service the
            greater Houston area and carry 35+ Real Fyre sets ready to ship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814824478"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold"
            >
              Call (281) 482-4478
            </a>
            <a
              href="/#contact"
              className="inline-block bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors font-semibold"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GasLogsPage;
