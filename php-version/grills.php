<?php
$page_title = "Gas Grills - Premium Fire Magic Outdoor Cooking Solutions";
$page_description = "Explore our collection of premium Fire Magic gas grills and outdoor cooking solutions. Professional-grade quality for your backyard.";
include 'includes/header.php';

// Function to fetch products from WordPress/WooCommerce API
function fetchGrillProducts() {
    $products = [];
    
    try {
        // First try to get all WooCommerce products and filter for grills
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
                // Filter products that contain "grill" in name or categories
                $grill_products = array_filter($wc_data, function($product) {
                    $name_match = stripos($product['name'] ?? '', 'grill') !== false;
                    $cat_match = false;
                    
                    // Check categories for grill-related terms
                    if (isset($product['categories'])) {
                        foreach ($product['categories'] as $category) {
                            if (stripos($category['name'] ?? '', 'grill') !== false || 
                                stripos($category['slug'] ?? '', 'grill') !== false) {
                                $cat_match = true;
                                break;
                            }
                        }
                    }
                    
                    return $name_match || $cat_match;
                });
                
                if (!empty($grill_products)) {
                    return array_slice($grill_products, 0, 12);
                }
                
                // If no grills found, return first 12 products
                return array_slice($wc_data, 0, 12);
            }
        }
        
        // Try specific category approach
        $category_urls = [
            'https://gputexas.com/wp-json/wc/v3/products?category=15&per_page=12', // Grills category ID
            'https://gputexas.com/wp-json/wc/v3/products?search=grill&per_page=12',
            'https://gputexas.com/wp-json/wc/v3/products?search=fire+magic&per_page=12'
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
            'https://gputexas.com/wp-json/wp/v2/posts?search=grill&per_page=12&_embed',
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
        error_log("Error fetching grill products: " . $e->getMessage());
    }
    
    return [];
}

// Helper functions
function getProductTitle($product) {
    return $product['name'] ?? $product['title']['rendered'] ?? 'Gas Grill';
}

function getProductDescription($product) {
    $desc = $product['short_description'] ?? $product['excerpt']['rendered'] ?? 'Premium gas grill for outdoor cooking.';
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

$products = fetchGrillProducts();
?>

<div class="page-container">
    <!-- Page Header -->
    <div class="page-header">
        <div class="container">
            <div class="page-header-content">
                <h1 class="page-title">Gas Grills</h1>
                <p class="page-subtitle">Premium outdoor cooking solutions from Fire Magic and more</p>
            </div>
        </div>
    </div>

    <!-- Products Section -->
    <div class="products-section">
        <div class="container">
            <?php if (empty($products)): ?>
                <div class="no-products">
                    <h3 class="no-products-title">No Products Available</h3>
                    <p class="no-products-text">We're working on adding gas grill products to this section.</p>
                    <a href="contact.php" class="btn btn-primary">
                        Contact Us for Product Information
                    </a>
                </div>
            <?php else: ?>
                <div class="products-header">
                    <h2 class="products-title">Available Gas Grills (<?php echo count($products); ?>)</h2>
                    <p class="products-subtitle">Explore our collection of premium gas grills</p>
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
        <p>Loading gas grills...</p>
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
    console.log('Gas Grills page loaded with <?php echo count($products); ?> products');
    <?php if (!empty($products)): ?>
    console.log('First product data:', <?php echo json_encode($products[0] ?? []); ?>);
    <?php endif; ?>
});
</script>

<!-- Debug Info (remove in production) -->
<?php if (!empty($products) && isset($_GET['debug'])): ?>
<div style="background: #f0f0f0; padding: 20px; margin: 20px; border: 2px solid #333; overflow: auto;">
    <h3>Debug: Product Data Structure</h3>
    <pre><?php echo htmlspecialchars(print_r($products[0] ?? [], true)); ?></pre>
</div>
<?php endif; ?>

<?php include 'includes/footer.php'; ?>
