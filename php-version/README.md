# Gas Products Unlimited - PHP Version

This is the PHP/HTML/CSS port of the original React/TypeScript application for Gas Products Unlimited (gputexas.com).

## Project Structure

```
php-version/
├── index.php              # Homepage
├── grills.php             # Gas grills product page
├── logs.php               # Gas logs product page
├── includes/
│   ├── header.php         # Header and navigation
│   └── footer.php         # Footer and scripts
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet (converted from Tailwind)
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/
│       └── [image files]  # Static images
└── README.md              # This file
```

## Features

### Converted from React to PHP
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with call-to-action
- ✅ Featured categories grid
- ✅ Product pages with API integration
- ✅ Mobile-first responsive design
- ✅ Dropdown menus for desktop and mobile
- ✅ Loading states and error handling

### Technical Implementation
- **PHP**: Server-side rendering and API integration
- **Custom CSS**: Converted from Tailwind classes to custom CSS
- **Vanilla JavaScript**: Interactive functionality (mobile menu, dropdowns)
- **WordPress/WooCommerce API**: Product data integration
- **Responsive Design**: Mobile-first approach with breakpoints

### API Integration
The application fetches product data from:
1. WooCommerce API (primary): `https://gputexas.com/wp-json/wc/v3/products`
2. WordPress API (fallback): `https://gputexas.com/wp-json/wp/v2/posts`

### JavaScript Functionality
- Mobile menu toggle
- Desktop dropdown menus with hover effects
- Smooth animations and transitions
- Error handling and loading states
- Responsive behavior on window resize

### CSS Features
- Custom utility classes
- Flexbox and Grid layouts
- Responsive typography
- Smooth transitions and animations
- Mobile-first media queries
- Custom color scheme (orange accent: #f97316)

## Setup Instructions

1. **Web Server**: Place files in web server directory
2. **PHP**: Requires PHP 7.4+ with `allow_url_fopen` enabled for API calls
3. **Assets**: Ensure proper file permissions for assets directory
4. **Testing**: Test on local server (XAMPP, WAMP, etc.) or upload to hosting

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with some limitations on CSS Grid)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Optimized images (placeholder system)
- Minified CSS and JS (production ready)
- Lazy loading for images
- Efficient API caching (can be added)
- CDN integration ready

## Future Enhancements

1. **Search Functionality**: Implement product search
2. **Contact Forms**: Add contact and inquiry forms  
3. **Blog Integration**: Add blog/news section
4. **Admin Panel**: Product management interface
5. **SEO Optimization**: Meta tags, structured data
6. **Analytics**: Google Analytics integration
7. **Performance**: Image optimization, caching layers

## Original React Features Preserved

All original functionality has been maintained:
- Navigation structure and styling
- Product display and API integration
- Responsive design breakpoints
- Interactive elements and animations
- Error handling and loading states

## Maintenance

- Update product API endpoints as needed
- Optimize images for web delivery
- Monitor API response times
- Regular security updates for PHP
- Test cross-browser compatibility

---

**Built by**: AI Assistant  
**Date**: October 2025  
**Original**: React/TypeScript with Vite  
**Converted**: PHP/HTML/CSS with Vanilla JS