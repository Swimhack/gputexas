<?php
$page_title = "Gas Logs - Authentic Real Fyre Fireplace Experience";
$page_description = "Discover our collection of premium Real Fyre gas log sets for authentic fireplace experiences. Vented and vent-free options available.";
include 'includes/header.php';

// Function to fetch products from WordPress/WooCommerce API
function fetchLogProducts() {
    $products = [];
    
    try {
        // First try to get all WooCommerce products and filter for logs
        $wc_url = 'https://gputexas.com/wp-json/wc/v3/products?per_page=100&status=publish';
        $wc_context = stream_context_create([
            'http' => [
                'timeout' => 15,
                'ignore_errors' => true,
                'method' => 'GET',
                'header' => "User-Agent: PHP WooCommerce Client\r\n"
            ]
        ]);
        $wc_response = @file_get_contents($wc_url, false, $wc_context);
        
        if ($wc_response !== false) {
            $wc_data = json_decode($wc_response, true);
            if (is_array($wc_data) && !empty($wc_data)) {
                // Filter products that contain "log" in name or categories
                $log_products = array_filter($wc_data, function($product) {
                    $name_match = stripos($product['name'] ?? '', 'log') !== false;
                    $cat_match = false;
                    
                    // Check categories for log-related terms
                    if (isset($product['categories'])) {
                        foreach ($product['categories'] as $category) {
                            if (stripos($category['name'] ?? '', 'log') !== false || 
                                stripos($category['slug'] ?? '', 'log') !== false ||
                                stripos($category['name'] ?? '', 'fyre') !== false) {
                                $cat_match = true;
                                break;
                            }
                        }
                    }
                    
                    return $name_match || $cat_match;
                });
                
                if (!empty($log_products)) {
                    return array_slice($log_products, 0, 12);
                }
                
                // If no logs found, return first 12 products
                return array_slice($wc_data, 0, 12);
            }
        }
        
        // Try specific category approach
        $category_urls = [
            'https://gputexas.com/wp-json/wc/v3/products?category=16&per_page=12', // Logs category ID
            'https://gputexas.com/wp-json/wc/v3/products?search=log&per_page=12',
            'https://gputexas.com/wp-json/wc/v3/products?search=real+fyre&per_page=12'
        ];
        
        foreach ($category_urls as $url) {
            $response = @file_get_contents($url, false, $wc_context);
            if ($response !== false) {
                $data = json_decode($response, true);
                if (is_array($data) && !empty($data)) {
                    return $data;
                }
            }
        }
        
        // Fallback to WordPress posts
        $wp_urls = [
            'https://gputexas.com/wp-json/wp/v2/posts?search=log&per_page=12&_embed',
            'https://gputexas.com/wp-json/wp/v2/posts?per_page=12&_embed'
        ];
        
        foreach ($wp_urls as $wp_url) {
            $wp_response = @file_get_contents($wp_url, false, $wc_context);
            if ($wp_response !== false) {
                $wp_data = json_decode($wp_response, true);
                if (is_array($wp_data) && !empty($wp_data)) {
                    return $wp_data;
                }
            }
        }
        
    } catch (Exception $e) {
        error_log("Error fetching log products: " . $e->getMessage());
    }
    
    return [];
}

// Helper functions
function getProductTitle($product) {
    return $product['name'] ?? $product['title']['rendered'] ?? 'Gas Log Set';
}

function getProductDescription($product) {
    $desc = $product['short_description'] ?? $product['excerpt']['rendered'] ?? 'Premium gas log set for authentic fireplace experience.';
    return substr(strip_tags($desc), 0, 150) . '...';
}

function getProductImage($product) {
    if (isset($product['images'][0]['src'])) {
        return $product['images'][0]['src'];
    }
    if (isset($product['_embedded']['wp:featuredmedia'][0]['source_url'])) {
        return $product['_embedded']['wp:featuredmedia'][0]['source_url'];
    }
    return 'assets/images/hero-background-firemagic.jpg';
}

function getProductLink($product) {
    return $product['permalink'] ?? $product['link'] ?? 'https://gputexas.com/?p=' . $product['id'];
}

$products = fetchLogProducts();
?>

<div class="page-container">
    <!-- Page Header -->
    <div class="page-header">
        <div class="container">
            <div class="page-header-content">
                <h1 class="page-title">Gas Logs</h1>
                <p class="page-subtitle">Authentic fireplace experiences with Real Fyre gas log sets</p>
            </div>
        </div>
    </div>

    <!-- Products Section -->
    <div class="products-section">
        <div class="container">
            <?php if (empty($products)): ?>
                <div class="no-products">
                    <h3 class="no-products-title">No Products Available</h3>
                    <p class="no-products-text">We're working on adding gas log products to this section.</p>
                    <a href="contact.php" class="btn btn-primary">
                        Contact Us for Product Information
                    </a>
                </div>
            <?php else: ?>
                <div class="products-header">
                    <h2 class="products-title">Available Gas Log Sets (<?php echo count($products); ?>)</h2>
                    <p class="products-subtitle">Explore our collection of premium gas log sets</p>
                </div>
                
                <div class="products-grid" id="products-grid">
                    <?php foreach ($products as $product): ?>
                        <div class="product-card">
                            <div class="product-image">
                                <img src="<?php echo htmlspecialchars(getProductImage($product)); ?>" 
                                     alt="<?php echo htmlspecialchars(getProductTitle($product)); ?>" 
                                     class="product-img"
                                     onerror="this.src='assets/images/hero-background-firemagic.jpg'">
                            </div>
                            <div class="product-content">
                                <h3 class="product-title"><?php echo htmlspecialchars(getProductTitle($product)); ?></h3>
                                <p class="product-description"><?php echo htmlspecialchars(getProductDescription($product)); ?></p>
                                <a href="<?php echo htmlspecialchars(getProductLink($product)); ?>" 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   class="btn btn-primary">
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- Loading Indicator (for JavaScript updates) -->
    <div id="loading-indicator" class="loading-indicator hidden">
        <div class="spinner"></div>
        <p>Loading gas logs...</p>
    </div>

    <!-- Error Message (for JavaScript updates) -->
    <div id="error-message" class="error-message hidden">
        <div class="error-content">
            <h3>Error Loading Products</h3>
            <p>Unable to load products. Please check your internet connection or try again later.</p>
            <button onclick="location.reload()" class="btn btn-primary">
                Try Again
            </button>
        </div>
    </div>
</div>

<script>
// Add some client-side functionality for future enhancements
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gas Logs page loaded with <?php echo count($products); ?> products');
});
</script>

<?php include 'includes/footer.php'; ?>