<?php
$page_title = "Contact Us - Gas Products Unlimited";
$page_description = "Get in touch with Gas Products Unlimited for all your outdoor gas product needs. Expert consultation and installation services available.";
include 'includes/header.php';
?>

<div class="page-container">
    <!-- Page Header -->
    <div class="page-header">
        <div class="container">
            <div class="page-header-content">
                <h1 class="page-title">Contact Us</h1>
                <p class="page-subtitle">Get expert advice on your outdoor gas product needs</p>
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <!-- Contact Information -->
                <div class="contact-info">
                    <h2 class="contact-title">Get In Touch</h2>
                    <p class="contact-description">
                        Whether you're looking for a new gas grill, fireplace logs, or outdoor lighting, 
                        our team is here to help you find the perfect solution for your outdoor space.
                    </p>

                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i data-lucide="phone"></i>
                            </div>
                            <div class="contact-content">
                                <h3>Phone</h3>
                                <p><a href="tel:2814824478">(281) 482-4478</a></p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i data-lucide="mail"></i>
                            </div>
                            <div class="contact-content">
                                <h3>Email</h3>
                                <p><a href="mailto:TJ@gputexas.com">TJ@gputexas.com</a></p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i data-lucide="map-pin"></i>
                            </div>
                            <div class="contact-content">
                                <h3>Service Area</h3>
                                <p>Houston, Texas and surrounding areas</p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="contact-icon">
                                <i data-lucide="clock"></i>
                            </div>
                            <div class="contact-content">
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                                   Saturday: 9:00 AM - 4:00 PM<br>
                                   Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-container">
                    <form class="contact-form" id="contactForm" method="POST" action="">
                        <h2 class="form-title">Send Us a Message</h2>
                        
                        <div class="form-group">
                            <label for="name" class="form-label">Full Name *</label>
                            <input type="text" id="name" name="name" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">Email Address *</label>
                            <input type="email" id="email" name="email" class="form-input" required>
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="interest" class="form-label">Product Interest</label>
                            <select id="interest" name="interest" class="form-select">
                                <option value="">Select a category</option>
                                <option value="gas-grills">Gas Grills</option>
                                <option value="gas-logs">Gas Logs</option>
                                <option value="gas-lighting">Gas Lighting</option>
                                <option value="fire-features">Fire Features</option>
                                <option value="accessories">Accessories</option>
                                <option value="installation">Installation Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">Message *</label>
                            <textarea id="message" name="message" rows="5" class="form-textarea" required placeholder="Tell us about your project or questions..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary form-submit">
                            Send Message
                            <i data-lucide="send" class="btn-icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="services-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Professional installation and expert consultation</p>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="wrench"></i>
                    </div>
                    <h3 class="service-title">Professional Installation</h3>
                    <p class="service-description">Expert installation of gas grills, fireplaces, and outdoor gas appliances with proper safety protocols.</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="users"></i>
                    </div>
                    <h3 class="service-title">Expert Consultation</h3>
                    <p class="service-description">Personalized recommendations based on your space, budget, and cooking preferences.</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i data-lucide="shield-check"></i>
                    </div>
                    <h3 class="service-title">Warranty Support</h3>
                    <p class="service-description">Comprehensive warranty support and maintenance services for all our products.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message (in a real application, this would submit to a server)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    this.reset();
});
</script>

<?php include 'includes/footer.php'; ?>