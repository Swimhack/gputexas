// Main JavaScript functionality for GPU Texas website
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdowns();
    initScrollEffects();
    
    console.log('GPU Texas PHP website loaded successfully');
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
    const closeIcon = mobileMenuToggle.querySelector('.close-icon');
    
    if (!mobileMenuToggle || !mobileMenu) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('show');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    function openMobileMenu() {
        mobileMenu.classList.add('show');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('show');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        
        // Close all mobile dropdowns when closing menu
        document.querySelectorAll('.mobile-dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
            const toggle = document.querySelector(`[data-mobile-dropdown="${menu.dataset.mobileDropdownMenu}"]`);
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
}

// Desktop Dropdown Functionality
function initDropdowns() {
    // Desktop dropdowns
    const desktopDropdowns = document.querySelectorAll('.dropdown');
    
    desktopDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = menu.classList.contains('show');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu.show').forEach(otherMenu => {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove('show');
                    const otherToggle = otherMenu.parentNode.querySelector('.dropdown-toggle');
                    if (otherToggle) {
                        otherToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle current dropdown
            if (isOpen) {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                menu.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close on hover out (with delay)
        let hoverTimeout;
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
        });
        
        dropdown.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }, 150);
        });
    });
    
    // Mobile dropdowns
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        const dropdownName = toggle.dataset.mobileDropdown;
        const menu = document.querySelector(`[data-mobile-dropdown-menu="${dropdownName}"]`);
        
        if (!menu) return;
        
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = menu.classList.contains('show');
            
            if (isOpen) {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                menu.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                const toggle = menu.parentNode.querySelector('.dropdown-toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    // Add scroll effect to navigation
    const mainNav = document.querySelector('.main-nav');
    if (!mainNav) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavOnScroll() {
        if (window.scrollY > 100) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
        
        lastScrollY = window.scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    });
}

// Utility Functions
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="loading-indicator">
                <div class="spinner"></div>
                <p>Loading...</p>
            </div>
        `;
    }
}

function showError(containerId, message, retryCallback) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <div class="error-content">
                    <h3>Error Loading Content</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="btn btn-primary">
                        Try Again
                    </button>
                </div>
            </div>
        `;
    }
}

// Search functionality (basic implementation)
function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (!searchBtn) return;
    
    searchBtn.addEventListener('click', function() {
        // For now, just show an alert - can be expanded to show search modal
        alert('Search functionality coming soon!');
    });
}

// API Helper Functions (for future enhancements)
function fetchAPI(url, options = {}) {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    };
    
    return fetch(url, defaultOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}

function fetchProducts(category) {
    const urls = [
        `https://gputexas.com/wp-json/wc/v3/products?category=${category}&per_page=12`,
        `https://gputexas.com/wp-json/wp/v2/posts?categories=${category}&per_page=12&_embed`
    ];
    
    return Promise.race(urls.map(url => 
        fetchAPI(url).catch(() => [])
    ));
}

// Animation helpers
function animateElement(element, className, duration = 1000) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
}

function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, duration / 10);
}

function fadeOut(element, duration = 300) {
    let opacity = 1;
    const timer = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
    }, duration / 10);
}

// Initialize search when DOM loads
document.addEventListener('DOMContentLoaded', initSearch);

// Export functions for use in other scripts
window.GPUTexas = {
    showLoading,
    showError,
    fetchAPI,
    fetchProducts,
    animateElement,
    fadeIn,
    fadeOut
};