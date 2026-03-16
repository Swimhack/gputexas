import React from 'react';

const GRILLS = [
  {
    name: 'Fire Magic Aurora Series',
    description: 'Built-in gas grills engineered for the serious outdoor chef. Available in 24", 30", and 36" configurations with natural gas or propane.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
  {
    name: 'Fire Magic Echelon Diamond',
    description: 'Top-of-the-line built-in grills featuring Magic View window, analog thermometer, and stainless steel cooking grids.',
    img: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
  {
    name: 'Fire Magic Choice Series',
    description: 'Professional-grade multi-user grills perfect for large gatherings. Built to last a lifetime with heavy-duty stainless construction.',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
  {
    name: 'Portable Gas Grills',
    description: 'Take the Fire Magic experience anywhere. Compact, portable grills with the same quality and performance as our built-in models.',
    img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
  {
    name: 'Outdoor Kitchen Components',
    description: 'Side burners, refrigerators, access doors, and drawers to complete your dream outdoor kitchen setup.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
  {
    name: 'Grill Accessories & Parts',
    description: 'Genuine Fire Magic replacement parts, grill covers, rotisserie kits, and accessories to keep your grill performing at its best.',
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
    href: 'https://gputexas.com/grills',
  },
];

function GasGrillsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gas Grills</h1>
          <p className="text-xl text-gray-300">
            Premium Fire Magic outdoor cooking solutions — 15+ models in stock
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Fire Magic Grill Collections</h2>
            <p className="text-gray-600">Contact us for current pricing and availability</p>
          </div>
          <a
            href="https://gputexas.com/grills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold whitespace-nowrap"
          >
            View Full Catalog →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRILLS.map((grill) => (
            <div
              key={grill.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={grill.img}
                  alt={grill.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{grill.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{grill.description}</p>
                <a
                  href={grill.href}
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
          <h3 className="text-2xl font-bold mb-3">Not Sure Which Grill Is Right for You?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Our team has over 25 years of experience helping Houston area customers find the perfect
            outdoor cooking solution. Call or fill out the form below.
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

export default GasGrillsPage;
