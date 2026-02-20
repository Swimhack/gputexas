<?php
// Get current page for active navigation highlighting
$current_page = basename($_SERVER['REQUEST_URI'], '.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : 'Gas Products Unlimited - Premium Outdoor Gas Solutions'; ?></title>
    <meta name="description" content="<?php echo isset($page_description) ? $page_description : 'Texas premier gas products dealer featuring Fire Magic grills, Real Fyre gas logs, Coppersmith lighting, and American Fyre Designs fire features.'; ?>">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons CDN for icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="social-links">
                    <a href="https://twitter.com" class="social-link" aria-label="Twitter">
                        <span class="social-icon">𝕏</span>
                    </a>
                    <a href="https://facebook.com" class="social-link" aria-label="Facebook">
                        <span class="social-icon">f</span>
                    </a>
                    <a href="https://instagram.com" class="social-link" aria-label="Instagram">
                        <span class="social-icon">ig</span>
                    </a>
                </div>
                <div class="contact-links">
                    <a href="tel:2814824478" class="contact-link">
                        <i data-lucide="phone" class="contact-icon"></i>
                        281 482 4478
                    </a>
                    <a href="mailto:TJ@gputexas.com" class="contact-link">
                        <i data-lucide="mail" class="contact-icon"></i>
                        TJ@gputexas.com
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Navigation -->
    <nav class="main-nav">
        <div class="container">
            <div class="nav-content">
                <!-- Logo -->
                <a href="index.php" class="logo">
                    <img src="assets/images/gpu-texas-logo.png" alt="Gas Products Unlimited" class="logo-image">
                </a>

                <!-- Desktop Navigation -->
                <div class="desktop-nav">
                    <a href="index.php" class="nav-link <?php echo ($current_page == 'index' || $current_page == '') ? 'active' : ''; ?>">HOME</a>
                    <a href="lights.php" class="nav-link <?php echo $current_page == 'lights' ? 'active' : ''; ?>">LIGHTS</a>
                    
                    <a href="grills.php" class="nav-link <?php echo $current_page == 'grills' ? 'active' : ''; ?>">GRILLS</a>
                    <a href="logs.php" class="nav-link <?php echo $current_page == 'logs' ? 'active' : ''; ?>">LOGS</a>
                    <a href="about.php" class="nav-link <?php echo $current_page == 'about' ? 'active' : ''; ?>">ABOUT</a>
                    <a href="contact.php" class="nav-link <?php echo $current_page == 'contact' ? 'active' : ''; ?>">CONTACT US</a>
                </div>

                <!-- Search and Mobile Menu -->
                <div class="nav-actions">
                    <button class="search-btn">
                        <i data-lucide="search"></i>
                    </button>
                    <button class="mobile-menu-toggle">
                        <i data-lucide="menu" class="menu-icon"></i>
                        <i data-lucide="x" class="close-icon hidden"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu">
            <div class="mobile-menu-content">
                <a href="index.php" class="mobile-nav-link">HOME</a>
                <a href="lights.php" class="mobile-nav-link">LIGHTS</a>
                <a href="grills.php" class="mobile-nav-link">GRILLS</a>
                <a href="logs.php" class="mobile-nav-link">LOGS</a>
                <a href="about.php" class="mobile-nav-link">ABOUT</a>
                <a href="contact.php" class="mobile-nav-link">CONTACT US</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>