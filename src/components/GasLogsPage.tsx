import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name?: string;
  title?: { rendered: string };
  short_description?: string;
  excerpt?: { rendered: string };
  images?: Array<{ src: string }>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
  permalink?: string;
  link?: string;
}

function GasLogsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try WooCommerce first
      let response = await fetch('https://gputexas.com/wp-json/wc/v3/products?category=logs&per_page=12');
      
      if (!response.ok) {
        // Fallback to WordPress posts with logs category
        response = await fetch('https://gputexas.com/wp-json/wp/v2/posts?categories=logs&per_page=12&_embed');
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Unable to load products. Please check your internet connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getProductTitle = (product: Product): string => {
    return product.name || product.title?.rendered || 'Gas Log Set';
  };

  const getProductDescription = (product: Product): string => {
    const desc = product.short_description || product.excerpt?.rendered || 'Premium gas log set for authentic fireplace experience.';
    return desc.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  };

  const getProductImage = (product: Product): string => {
    return product.images?.[0]?.src || 
           product._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
           '/hero-background-firemagic.jpg.png';
  };

  const getProductLink = (product: Product): string => {
    return product.permalink || product.link || `https://gputexas.com/?p=${product.id}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gas logs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Products</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={fetchProducts}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gas Logs</h1>
          <p className="text-xl text-gray-300">Authentic fireplace experiences with Real Fyre gas log sets</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No Products Available</h3>
            <p className="text-gray-600 mb-6">We're working on adding gas log products to this section.</p>
            <a 
              href="/contact" 
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Us for Product Information
            </a>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Available Gas Log Sets ({products.length})</h2>
              <p className="text-gray-600">Explore our collection of premium gas log sets</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={getProductImage(product)}
                      alt={getProductTitle(product)}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/hero-background-firemagic.jpg.png';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{getProductTitle(product)}</h3>
                    <p className="text-gray-600 mb-4">{getProductDescription(product)}</p>
                    <a 
                      href={getProductLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GasLogsPage;