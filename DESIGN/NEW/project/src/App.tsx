import React, { useState } from 'react';
import { Flame, Menu, Search, Phone, Mail, ChevronDown, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const grillsMenu = [
    { name: 'Gas Grills', href: '/grills/gas' },
    { name: 'Outdoor Kitchens', href: '/grills/outdoor-kitchens' },
    { name: 'Accessories', href: '/grills/accessories' },
    { name: 'Parts', href: '/grills/parts' },
  ];

  const logsMenu = [
    { name: 'Gas Logs', href: '/logs/gas' },
    { name: 'Vented Sets', href: '/logs/vented' },
    { name: 'Vent-Free Sets', href: '/logs/vent-free' },
    { name: 'Remote Controls', href: '/logs/remote-controls' },
  ];

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="https://twitter.com" className="hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              X
            </a>
            <a href="https://facebook.com" className="hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              f
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              ig
            </a>
          </div>
          <div className="flex gap-6">
            <a href="tel:2814824478" className="flex items-center gap-2 hover:text-gray-300">
              <Phone size={16} />
              281 482 4478
            </a>
            <a href="mailto:TJ@gputexas.com" className="flex items-center gap-2 hover:text-gray-300">
              <Mail size={16} />
              TJ@gputexas.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <Flame className="h-10 w-10 text-orange-500 group-hover:text-orange-600 transition-colors" />
              <div className="ml-2">
                <div className="text-xl font-bold group-hover:text-orange-500 transition-colors">GAS PRODUCTS</div>
                <div className="text-sm">UNLIMITED</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="font-medium hover:text-orange-500 transition-colors">HOME</a>
              <a href="/lights" className="font-medium hover:text-orange-500 transition-colors">LIGHTS</a>
              
              {/* Grills Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 font-medium hover:text-orange-500 transition-colors"
                  onClick={() => toggleDropdown('grills')}
                >
                  GRILLS
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'grills' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 transition-all transform ${
                  activeDropdown === 'grills' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {grillsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Logs Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 font-medium hover:text-orange-500 transition-colors"
                  onClick={() => toggleDropdown('logs')}
                >
                  LOGS
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'logs' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 transition-all transform ${
                  activeDropdown === 'logs' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {logsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/blog" className="font-medium hover:text-orange-500 transition-colors">BLOG</a>
              <a href="/about" className="font-medium hover:text-orange-500 transition-colors">ABOUT</a>
              <a href="/contact" className="font-medium hover:text-orange-500 transition-colors">CONTACT US</a>
            </div>

            {/* Search and Menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-2">
              <a href="/" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">HOME</a>
              <a href="/lights" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">LIGHTS</a>
              
              {/* Mobile Grills Menu */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  onClick={() => toggleDropdown('mobile-grills')}
                >
                  GRILLS
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'mobile-grills' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ${activeDropdown === 'mobile-grills' ? 'max-h-48' : 'max-h-0'} overflow-hidden bg-gray-50`}>
                  {grillsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Logs Menu */}
              <div>
                <button 
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  onClick={() => toggleDropdown('mobile-logs')}
                >
                  LOGS
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'mobile-logs' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ${activeDropdown === 'mobile-logs' ? 'max-h-48' : 'max-h-0'} overflow-hidden bg-gray-50`}>
                  {logsMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="/blog" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">BLOG</a>
              <a href="/about" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">ABOUT</a>
              <a href="/contact" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">CONTACT US</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1599865985321-3cf8cab49257?auto=format&fit=crop&q=80"
          alt="Beautiful gas fireplace with glowing logs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Transform Your Space</h1>
            <p className="text-xl mb-8">Premium Gas Products for Your Home</p>
            <a 
              href="/products"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-105 duration-200"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;