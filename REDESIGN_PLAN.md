# GPU Texas Website Redesign Plan
## WordPress Staging Environment Strategy

**Project Date:** October 10, 2025  
**Client:** TJ Richards & Michael - GPU Texas  
**Domain:** gputexas.com  
**Budget:** $2,500 ($1,500 paid upfront)  
**Status:** Planning Phase - DO NOT GO LIVE YET

---

## 📋 Executive Summary

Based on the client conversation history, TJ and Michael want:
- **Clean, minimal design** (like realfyre.com, stjameslighting.com)
- **Better product organization** for 110 products (60 gas lights, 35 gas logs, 15 grills)
- **E-commerce ready** but starting with email/phone quote requests
- **Easy navigation** so customers can see all options
- **Fast, mobile-friendly** experience

**Key Insight from Conversation:**
> "Not sure if we are ready for full e-commerce but something that gives our customers options then we can give pricing via email or phone. But we would want it e-commerce ready so we can make that transition easily."

---

## 🎯 Phase 1: Staging Environment Setup (Week 1)

### 1.1 Create Staging Site
```bash
# Option A: Subdomain (Recommended)
staging.gputexas.com

# Option B: Subdirectory
gputexas.com/staging

# Option C: Bluehost Staging (if available)
Use built-in Bluehost staging feature
```

**Action Items:**
- [ ] Log into Bluehost cPanel or WordPress dashboard
- [ ] Check if "Staging" feature exists (WP Engine, Kinsta, or Bluehost Pro)
- [ ] If not available, create staging.gputexas.com subdomain
- [ ] Clone live site to staging environment
- [ ] Add robots.txt to prevent indexing: `User-agent: * Disallow: /`
- [ ] Password protect staging site (HTTP Auth or Coming Soon plugin)

### 1.2 Backup Current Site
```bash
# Backup checklist
✓ Full WordPress database export
✓ /wp-content/ folder (themes, plugins, uploads)
✓ wp-config.php file
✓ .htaccess file
```

**Tools to Use:**
- **UpdraftPlus** (free backup plugin)
- **All-in-One WP Migration** (easy full site backup)
- Manual FTP download of critical files

### 1.3 Document Current Site
- [ ] Take full screenshots of every page
- [ ] List all installed plugins and versions
- [ ] Document current theme and child theme (if any)
- [ ] Export current menu structures
- [ ] Document widgets and sidebar content
- [ ] List all custom post types and taxonomies

---

## 🎨 Phase 2: Design Planning (Week 1-2)

### 2.1 Design Inspiration Analysis

**Reference Sites (from client conversation):**

1. **realfyre.com** - Clean product organization
   - Simple product grids
   - Category filtering
   - Minimal color palette

2. **stjameslighting.com/lanterns** - Easy navigation
   - Clear product categories
   - Large product images
   - Simple layout

3. **bbqguys.com** - Ecommerce structure
   - Product filters
   - Detailed product pages
   - Shopping cart functionality

4. **realfyrestore.com** - Basic, professional
   - Simple navigation
   - Clear CTAs
   - Product showcase

**Design Direction:**
> "Less color, more basic, subtle" - Client feedback from March 24

### 2.2 Color Palette & Branding
```css
/* Proposed Color Scheme - Minimal & Professional */
Primary:   #1a1a1a (Dark Gray/Black)
Secondary: #4a4a4a (Medium Gray)
Accent:    #d4a373 (Warm Gold/Bronze - Gas fire theme)
White:     #ffffff
Light BG:  #f5f5f5
```

### 2.3 Typography
```css
/* Modern, Readable Fonts */
Headings: 'Montserrat', sans-serif (Clean, Bold)
Body:     'Open Sans', sans-serif (Readable)
```

### 2.4 Layout Structure
```
Homepage:
├── Hero Section (Full-width banner)
├── Product Categories (3 columns: Lights, Logs, Grills)
├── Featured Products
├── About/Trust Section
├── Contact CTA
└── Footer

Product Archive:
├── Breadcrumbs
├── Filter Sidebar
├── Product Grid (3-4 columns)
└── Pagination

Product Single:
├── Large Image Gallery
├── Product Details
├── Quote Request Form
├── Related Products
└── Specifications Tabs
```

---

## 🛠️ Phase 3: Technical Implementation (Week 2-3)

### 3.1 Theme Selection

**Recommended Options:**

**Option 1: Astra Theme (Free/Pro) - RECOMMENDED**
- Lightweight and fast
- WooCommerce ready
- Highly customizable
- Great for product catalogs
- Cost: Free (or $59/year Pro)

**Option 2: GeneratePress Premium**
- Ultra-lightweight
- Excellent performance
- Flexible layouts
- Cost: $59/year

**Option 3: Kadence Theme (Free/Pro)**
- Modern blocks
- WooCommerce optimized
- Beautiful defaults
- Cost: Free (or $129/year Pro)

**Decision:** Use **Astra + Elementor** or **Kadence + Kadence Blocks**

### 3.2 Essential Plugins

#### Core Functionality
```
✓ WooCommerce (for ecommerce-ready structure)
  - Set to "Catalog Mode" (no prices/cart initially)
  - Enable quotes/inquiries instead of purchase

✓ WooCommerce Catalog Mode (or Custom Plugin)
  - Hide prices
  - Replace "Add to Cart" with "Request Quote"
  - Inquiry form integration

✓ Contact Form 7 or WPForms
  - Product inquiry forms
  - General contact form

✓ Yoast SEO (keep existing - already configured)
  - Product schema markup
  - XML sitemaps
```

#### Product Management
```
✓ Custom Product Taxonomies (built-in WooCommerce)
  - Product Categories: Gas Lights, Gas Logs, Grills
  - Attributes: Brand, Size, BTU, Fuel Type, etc.

✓ Advanced Custom Fields (ACF) - Optional
  - Custom product specifications
  - Installation guides
  - Manufacturer data
```

#### Performance & Speed
```
✓ WP Rocket or LiteSpeed Cache
✓ Smush or ShortPixel (image optimization)
✓ Asset CleanUp (remove unused CSS/JS)
✓ Autoptimize (minify CSS/JS)
```

#### User Experience
```
✓ FacetWP or WOOF (product filtering)
✓ AJAX Search Lite (live search)
✓ Related Products plugin
✓ Breadcrumb NavXT
```

### 3.3 Product Structure Planning

**Category Hierarchy:**
```
GPU Texas Products
│
├── Gas Lights (60 products)
│   ├── By Brand
│   │   ├── St. James Lighting
│   │   ├── Coppersmith
│   │   └── Legendary Lighting
│   ├── By Style
│   │   ├── Lanterns
│   │   ├── Chandeliers
│   │   └── Wall Sconces
│   └── By Application
│       ├── Outdoor
│       └── Indoor
│
├── Gas Logs (35 products)
│   ├── By Brand
│   │   └── Real Fyre
│   ├── By Type
│   │   ├── Vented
│   │   └── Vent-Free
│   └── By Style
│       ├── Charred
│       ├── Classic
│       └── Contemporary
│
└── Grills (15 products)
    ├── By Brand
    │   └── Fire Magic
    ├── By Type
    │   ├── Built-In
    │   └── Portable
    └── By Fuel
        ├── Natural Gas
        └── Propane
```

**Product Attributes for Filtering:**
- Brand
- Price Range (when enabled)
- Size/Dimensions
- BTU Rating
- Fuel Type (Natural Gas/Propane)
- Installation Type
- Color/Finish
- Material

### 3.4 Custom Post Type Setup (Alternative to WooCommerce)

**IF client prefers simpler catalog without WooCommerce:**
```php
// Register Custom Post Type: 'products'
// Taxonomies: 'product-category', 'brand', 'product-type'
// Custom fields: specifications, dimensions, pricing notes
```

---

## 📊 Phase 4: Content Migration Strategy (Week 3-4)

### 4.1 Image Asset Management

**Current Status:** TJ has uploaded images to Google Drive
- 60 gas light images
- 35 gas log images
- 15 grill images
- Lifestyle photos from manufacturers

**Image Preparation Workflow:**
```bash
# For each product image:
1. Download from Google Drive
2. Rename: brand-productname-variant.jpg
   Example: firemagic-aurora-a430i.jpg
3. Optimize (compress to < 200KB)
4. Resize to standard dimensions:
   - Main: 1200x1200px
   - Thumbnail: 400x400px
   - Gallery: 800x800px
5. Upload to WordPress Media Library
6. Organize with folders plugin (FileBird or Media Library Folders)
```

**Tools:**
- **Bulk Resize:** XnConvert or IrfanView
- **Optimization:** TinyPNG or ShortPixel
- **Organization:** FileBird Pro plugin

### 4.2 Product Data Entry Template

**Excel/CSV Template for Product Import:**
```csv
SKU, Name, Category, Brand, Description, Short Description, Image, Price_Note, Specifications, Fuel_Type, Size
```

**Example:**
```csv
FM-A430I, Fire Magic Aurora A430i Built-In Grill, Grills, Fire Magic, "Premium built-in grill...", "24-inch built-in grill", firemagic-aurora-a430i.jpg, "Contact for pricing", "BTU: 50000, Size: 24in", "Natural Gas/Propane", "24 inch"
```

**Import Plugin:** WP All Import Pro or WooCommerce CSV Importer

### 4.3 Content Writing Guidelines

**Product Page Template:**
```markdown
# [Product Name]

## Overview
[2-3 sentences describing the product]

## Key Features
- Feature 1
- Feature 2
- Feature 3
- Feature 4

## Specifications
| Spec | Value |
|------|-------|
| Dimensions | XX x XX x XX |
| BTU Rating | XXXXX |
| Fuel Type | Natural Gas / Propane |
| Material | Stainless Steel |
| Warranty | XX Years |

## Available Options
- Option 1
- Option 2

## Installation
[Brief installation notes or link to guide]

## Request a Quote
[Quote form or contact info]

## Related Products
[Auto-generated related products]
```

---

## 🔧 Phase 5: Development Workflow (Week 3-5)

### 5.1 Homepage Development

**Hero Section:**
- Full-width banner image (gas light/fire theme)
- Headline: "Houston's Premier Gas Lighting & Outdoor Living Specialists"
- Subheadline: "Custom gas lights, logs, and grills for your home"
- CTA Buttons: "Shop Gas Lights" | "View Grills" | "Gas Logs"

**Product Categories Section:**
```html
<div class="product-categories-grid">
  <div class="category-card">
    <img src="gas-lights-category.jpg" />
    <h3>Gas Lights</h3>
    <p>60+ Premium Gas Lighting Options</p>
    <a href="/gas-lights">Browse Collection →</a>
  </div>
  <!-- Repeat for Logs and Grills -->
</div>
```

**Featured Products:**
- 6-8 bestsellers or new arrivals
- Product card: Image, Name, "Request Quote" button

**Trust Section:**
- Years in business
- Customer testimonials (if available)
- Brands carried
- Service area (Greater Houston)

### 5.2 Product Archive Page

**Layout:**
```
┌─────────────────────────────────────────────┐
│ BREADCRUMBS: Home > Gas Lights              │
├─────────────────────────────────────────────┤
│ HEADER: Gas Lights (60 products)            │
├──────────┬──────────────────────────────────┤
│  FILTERS │  PRODUCT GRID                    │
│          │  ┌────┬────┬────┐               │
│ □ Brand  │  │ 1  │ 2  │ 3  │               │
│ □ Style  │  └────┴────┴────┘               │
│ □ Size   │  ┌────┬────┬────┐               │
│ □ Fuel   │  │ 4  │ 5  │ 6  │               │
│          │  └────┴────┴────┘               │
└──────────┴──────────────────────────────────┘
```

**Product Card Design:**
- Square product image (hover: secondary image)
- Product name
- Brand name
- "View Details" button
- Optional: Badge (New, Featured, etc.)

### 5.3 Single Product Page

**Above the Fold:**
- Large product image gallery (zoom enabled)
- Product name and brand
- Short description
- Key specifications (list)
- "Request a Quote" form (modal or inline)

**Below the Fold:**
- Tabbed content:
  - Description
  - Specifications
  - Installation
  - Warranty
- Related products carousel
- Recently viewed products

**Quote Request Form Fields:**
```
- Name *
- Email *
- Phone *
- Product Interest: [Auto-populated]
- Fuel Type: [ ] Natural Gas [ ] Propane
- Installation Needed: [ ] Yes [ ] No
- Message/Questions
- [Submit Button]
```

### 5.4 Additional Pages

**About Page:**
- Company story
- Team photo (TJ, Michael, staff)
- Service area map (Greater Houston, remove old Alvin location)
- Why choose GPU Texas

**Contact Page:**
- Contact form
- Phone, email, hours
- Map (current location only)
- Directions

**Resources/FAQ:**
- Installation guides
- Maintenance tips
- Fuel type comparison
- Frequently asked questions

---

## 🚀 Phase 6: Testing & Quality Assurance (Week 5-6)

### 6.1 Pre-Launch Testing Checklist

**Functionality Testing:**
- [ ] All navigation menus work
- [ ] Search functionality works
- [ ] Filter/sorting works on product archives
- [ ] Forms submit successfully
- [ ] Form emails deliver properly
- [ ] Product images load correctly
- [ ] Lightbox/gallery works
- [ ] Mobile menu functions
- [ ] Footer links work

**Browser Testing:**
- [ ] Chrome (Windows/Mac)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Edge
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

**Device Testing:**
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet Portrait (768px)
- [ ] Tablet Landscape (1024px)
- [ ] Mobile (375px - iPhone)
- [ ] Mobile (360px - Android)

**Performance Testing:**
- [ ] GTmetrix score > B
- [ ] Google PageSpeed > 80
- [ ] Load time < 3 seconds
- [ ] All images optimized
- [ ] No console errors

**SEO Checklist:**
- [ ] Meta titles (55-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] H1 tags on every page
- [ ] Alt text on all images
- [ ] XML sitemap generated
- [ ] robots.txt configured
- [ ] Schema markup (Organization, LocalBusiness, Products)
- [ ] Google Analytics tracking
- [ ] Google Search Console connected

**Content Review:**
- [ ] No Lorem Ipsum text
- [ ] All product info accurate
- [ ] Contact info correct (no old Alvin address)
- [ ] Phone numbers clickable (tel: links)
- [ ] Email addresses clickable (mailto: links)
- [ ] Spelling/grammar checked
- [ ] Brand names capitalized correctly

### 6.2 Client Review Process

**Staging Site Presentation:**
1. Send staging URL to TJ and Michael
2. Provide temporary login credentials
3. Include guided walkthrough video (Loom)
4. Request specific feedback on:
   - Overall design and aesthetic
   - Product organization
   - Navigation ease
   - Mobile experience
   - Forms functionality
   - Missing products or info

**Feedback Collection:**
- Use Google Doc or Trello board for feedback
- Categorize: Critical, Important, Nice-to-have
- Set revision timeline (1-2 weeks for revisions)

**Revision Rounds:**
- Round 1: Major changes (layout, structure)
- Round 2: Minor tweaks (colors, spacing, copy)
- Round 3: Final polish (bug fixes, edge cases)

---

## 📱 Phase 7: Mobile Optimization (Ongoing)

### 7.1 Mobile-First Considerations

**Priority:** 60%+ of traffic is mobile

**Key Mobile Features:**
- Tap-to-call buttons prominent
- Tap-to-email functionality
- Simplified forms (fewer fields)
- Larger touch targets (buttons 44x44px min)
- Sticky header with phone number
- Easy-to-use mobile navigation
- Fast image loading (lazy load)
- Minimal popups/modals

**Mobile Menu Structure:**
```
☰ MENU
├─ Home
├─ Gas Lights ▼
│  ├─ All Gas Lights
│  ├─ Lanterns
│  ├─ Chandeliers
│  └─ Wall Sconces
├─ Gas Logs ▼
│  ├─ All Gas Logs
│  ├─ Vented
│  └─ Vent-Free
├─ Grills ▼
│  ├─ All Grills
│  ├─ Built-In
│  └─ Portable
├─ About
└─ Contact
```

---

## 🔐 Phase 8: Security & Maintenance Setup (Week 6)

### 8.1 Security Hardening

**Security Plugins:**
- **Wordfence Security** (free) or **Sucuri Security**
- Two-factor authentication (2FA)
- Login limit attempts
- Firewall rules
- Malware scanning

**WordPress Hardening:**
```php
// wp-config.php additions
define('DISALLOW_FILE_EDIT', true); // Disable theme/plugin editor
define('WP_AUTO_UPDATE_CORE', true); // Enable auto-updates
```

**Backup Strategy:**
- Automated daily backups (UpdraftPlus)
- Store backups off-site (Google Drive, Dropbox)
- Test restore process monthly
- Keep 30 days of backups

### 8.2 Maintenance Plan

**Weekly Tasks:**
- Check for plugin/theme updates
- Review contact form submissions
- Check website uptime
- Review Google Analytics

**Monthly Tasks:**
- Full security scan
- Performance audit
- Broken link check
- Backup verification
- Update WordPress core

**Quarterly Tasks:**
- Content audit (outdated products)
- SEO audit
- Competitor analysis
- User experience review

---

## 🎬 Phase 9: Go-Live Preparation (Week 7)

### 9.1 Pre-Launch Checklist

**Final Checks:**
- [ ] Client final approval received
- [ ] Payment completed ($1,000 balance)
- [ ] Backup of live site created
- [ ] DNS records documented
- [ ] Staging site tested one final time
- [ ] Launch plan documented
- [ ] Rollback plan prepared

### 9.2 Launch Strategy

**Option A: DNS Swap (Recommended)**
```
1. Prepare new site on staging
2. Test thoroughly
3. Schedule launch time (off-peak hours)
4. Update DNS to point to new site
5. Wait for propagation (24-48 hours)
6. Monitor closely
```

**Option B: File Replacement**
```
1. Put live site in maintenance mode
2. Backup live site
3. Delete old files (keep wp-config.php)
4. Upload staging files
5. Update database
6. Test
7. Remove maintenance mode
```

**Post-Launch Monitoring:**
- Hour 1: Check all pages load
- Day 1: Monitor forms, check analytics
- Day 3: Review search console errors
- Week 1: Check broken links, 404s
- Week 2: Full functionality test

### 9.3 Post-Launch Support

**First 30 Days:**
- Daily monitoring
- Fix any critical bugs immediately
- Answer client questions
- Provide training on WordPress admin
- Create user guide/documentation

**Training Topics:**
- Adding new products
- Editing existing products
- Managing images
- Responding to quote requests
- Basic WordPress updates
- Creating blog posts (if applicable)

---

## 📈 Phase 10: Future Enhancements

### 10.1 E-commerce Transition (Phase 2)

**When client is ready for full e-commerce:**
- [ ] Enable WooCommerce prices
- [ ] Set up payment gateway (Stripe/PayPal)
- [ ] Configure shipping zones and rates
- [ ] Set up tax calculations
- [ ] Create checkout flow
- [ ] Test purchase process
- [ ] Set up order management
- [ ] Customer accounts setup

**Estimated Timeline:** 2-3 weeks  
**Additional Cost:** $800-$1,200

### 10.2 Marketing Integrations

**Email Marketing:**
- Mailchimp or Constant Contact integration
- Lead capture forms
- Newsletter signup
- Abandoned cart emails (when ecommerce active)

**Social Media:**
- Instagram feed integration
- Facebook page plugin
- Social sharing buttons
- Pinterest rich pins

**Review Management:**
- Google Reviews widget
- Testimonial section
- Review request automation

### 10.3 Advanced Features

**Potential Additions:**
- Live chat widget (Tawk.to, Drift)
- Product comparison tool
- Virtual showroom/3D viewer
- Installation calculator
- Financing options page
- Dealer/installer locator
- Blog for SEO content

---

## 💰 Budget Breakdown

**Total Project Budget:** $2,500

**Allocation:**
- Theme & Plugins: $200 (Astra Pro + Essential Plugins)
- Design & Development: $1,500 (40-50 hours)
- Content Migration: $400 (Product setup, images)
- Testing & QA: $200
- Launch Support: $200

**Additional Costs (Client):**
- Staging hosting (if separate): $0-15/month
- Premium plugins (yearly): $100-300/year
- Maintenance (optional): $100-200/month

---

## ⏱️ Timeline Summary

| Phase | Duration | Key Deliverable |
|-------|----------|----------------|
| **Phase 1:** Staging Setup | Week 1 | Staging site live |
| **Phase 2:** Design Planning | Week 1-2 | Design mockups approved |
| **Phase 3:** Technical Setup | Week 2-3 | Theme & plugins configured |
| **Phase 4:** Content Migration | Week 3-4 | All products added |
| **Phase 5:** Development | Week 3-5 | All pages built |
| **Phase 6:** Testing | Week 5-6 | Site fully tested |
| **Phase 7:** Mobile Optimization | Ongoing | Mobile responsive |
| **Phase 8:** Security Setup | Week 6 | Security hardened |
| **Phase 9:** Client Review | Week 6-7 | Revisions completed |
| **Phase 10:** Launch | Week 7 | **LIVE!** |

**Total Timeline:** 7-8 weeks from start to launch

---

## 📞 Communication Plan

**Weekly Check-ins:**
- Send progress updates every Friday
- Include screenshots/videos of progress
- Request feedback on specific items
- Share staging URL for ongoing review

**Communication Channels:**
- Primary: Text (established relationship)
- Secondary: Email for detailed info
- Emergency: Phone call

**Key Stakeholders:**
- TJ Richards (Primary contact)
- Michael (Final approval)
- James (Developer - you!)

---

## 🚨 Risk Management

### Potential Risks & Mitigation

**Risk 1: Scope Creep**
- *Mitigation:* Clear SOW, change request process, track hours

**Risk 2: Product Data Incomplete**
- *Mitigation:* Early inventory review, template for missing info

**Risk 3: Client Availability**
- *Mitigation:* Set clear deadlines, async communication

**Risk 4: Technical Issues**
- *Mitigation:* Thorough testing, staging environment, backups

**Risk 5: Timeline Delays**
- *Mitigation:* Buffer time built in, prioritize must-haves

---

## ✅ Success Metrics

**Launch Day Goals:**
- Website loads in < 3 seconds
- Mobile-friendly (Google test)
- All 110 products listed
- 3+ quote requests in first week
- Zero critical bugs

**30-Day Goals:**
- 20+ quote requests received
- 500+ organic visitors
- 5+ pages ranking in Google
- Client satisfaction 9/10+

**90-Day Goals:**
- 50+ quote requests
- 2000+ organic visitors
- 15+ keywords ranking
- 10+ conversions (sales/quotes)

---

## 📚 Documentation to Create

**For Client:**
- [ ] WordPress Admin Guide (PDF)
- [ ] Adding Products Tutorial (Video)
- [ ] Managing Orders/Quotes Guide
- [ ] Basic Troubleshooting FAQ
- [ ] Contact List (hosting, support, etc.)

**For Developer (You):**
- [ ] Site Architecture Document
- [ ] Plugin List & Configurations
- [ ] Custom Code Documentation
- [ ] Backup & Recovery Procedures
- [ ] Maintenance Checklist

---

## 🎯 Next Immediate Steps

1. **[TODAY]** Review this plan with notes/questions
2. **[Day 1]** Log into gputexas.com WordPress admin
3. **[Day 1]** Set up staging environment
4. **[Day 2]** Complete current site audit & backup
5. **[Day 3]** Send TJ update: "Starting redesign, staging ready in 3 days"
6. **[Day 4-5]** Install & configure theme + plugins on staging
7. **[Day 6-7]** Build homepage mockup for client feedback

**First Week Goal:** Have staging site with homepage prototype ready for TJ/Michael review

---

## 📧 Client Communication Template

**Subject: GPU Texas Website Redesign - Kicking Off!**

```
Hey TJ,

Excited to get started on the GPU Texas redesign! Here's what I'm working on this week:

✅ Setting up a staging site where you can preview everything
✅ Installing the new theme and plugins
✅ Creating the homepage layout based on our discussions

I'll have a preview ready for you by [DATE]. The staging site will be at:
staging.gputexas.com (I'll send login details once ready)

Quick reminder of what we're building:
- 110 products (60 gas lights, 35 logs, 15 grills)
- Clean, minimal design (like realfyre.com)
- Easy navigation and filtering
- Mobile-friendly
- Quote request forms (ecommerce-ready for later)

I'll be pulling the product images from the Google Drive you shared.

Let me know if you have any questions or if anything has changed!

Talk soon,
James
```

---

**END OF REDESIGN PLAN**

*Last Updated: October 10, 2025*  
*Status: Planning Phase - DO NOT LAUNCH YET*
