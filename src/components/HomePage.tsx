import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img 
          src="/hero-background-firemagic.jpg.png"
          alt="Premium Fire Magic grills and gas products"
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

      {/* Featured Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Gas Products</h2>
            <p className="text-xl text-gray-600">Transform your outdoor living space with our premium collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Fire Magic Grills</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gas Grills</h3>
                <p className="text-gray-600 mb-4">Premium outdoor cooking solutions</p>
                <Link to="/grills/gas" className="text-orange-500 hover:text-orange-600 font-medium">
                  View Collection →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Gas Lighting</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gas Lights</h3>
                <p className="text-gray-600 mb-4">Beautiful outdoor lighting solutions</p>
                <a href="/lights" className="text-orange-500 hover:text-orange-600 font-medium">
                  View Collection →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Real Fyre Logs</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gas Logs</h3>
                <p className="text-gray-600 mb-4">Authentic fireplace experiences</p>
                <Link to="/logs/gas" className="text-orange-500 hover:text-orange-600 font-medium">
                  View Collection →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Fire Features</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fire Features</h3>
                <p className="text-gray-600 mb-4">Stunning outdoor focal points</p>
                <a href="/outdoor" className="text-orange-500 hover:text-orange-600 font-medium">
                  View Collection →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;