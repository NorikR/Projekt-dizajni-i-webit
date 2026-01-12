# Apple Store - Professional E-commerce Website

A modern, responsive e-commerce website for Apple products built with HTML, CSS, and JavaScript.

## Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse through iPhone, iPad, Mac, Apple Watch, and AirPods
- **Category Filtering**: Filter products by category with smooth animations
- **Shopping Cart**: Add, remove, and update product quantities
- **Product Details**: View detailed specifications and product information
- **Checkout Process**: Complete purchase flow with order summary
- **Local Storage**: Cart persistence across browser sessions

### 🎨 Design & User Experience
- **Apple-inspired Design**: Clean, minimalist aesthetic matching Apple's design language
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and hover effects
- **Interactive Elements**: Dynamic product cards and modals
- **Professional Typography**: SF Pro Display font for authentic Apple feel

### 🚀 Technical Features
- **Vanilla JavaScript**: No external frameworks, pure JavaScript implementation
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **Intersection Observer**: Scroll-triggered animations for better performance
- **Accessibility**: Keyboard navigation and screen reader support
- **Search Functionality**: Find products by name, description, or category
- **Notification System**: User feedback for cart actions

## File Structure

```
cursor-try/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Getting Started

1. **Clone or Download**: Get the project files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Setup Required**: The website runs entirely in the browser with no dependencies

## Usage

### Navigation
- Use the top navigation to jump to different sections
- Click the Apple logo to return to the top
- Mobile users can access the hamburger menu for navigation

### Shopping
1. **Browse Products**: Scroll to the Products section or click "Shop Now"
2. **Filter by Category**: Use category buttons to filter products
3. **View Details**: Click on product images for detailed specifications
4. **Add to Cart**: Click "Add to Cart" buttons to add items
5. **Manage Cart**: Click the cart icon to view and modify your cart
6. **Checkout**: Complete your purchase with the checkout button

### Product Categories
- **iPhone**: Latest iPhone models including iPhone 15 Pro and iPhone 15
- **iPad**: iPad Pro and iPad Air with various configurations
- **Mac**: MacBook Pro, MacBook Air, and iMac options
- **Apple Watch**: Series 9 and SE models
- **AirPods**: Pro and standard AirPods with different features

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Features Breakdown

### HTML Structure
- Semantic HTML5 elements for better accessibility
- Structured navigation with proper heading hierarchy
- Modal dialogs for cart and product details
- Contact form with validation

### CSS Styling
- CSS Custom Properties for consistent theming
- Flexbox and Grid for responsive layouts
- Smooth transitions and hover effects
- Mobile-first responsive design
- Custom scrollbar styling

### JavaScript Functionality
- Product data management with detailed specifications
- Shopping cart with localStorage persistence
- Dynamic product filtering and search
- Modal management for cart and product details
- Smooth scrolling navigation
- Intersection Observer for scroll animations
- Keyboard accessibility support

## Customization

### Adding Products
Edit the `products` array in `script.js` to add new products:

```javascript
{
    id: 13,
    name: "New Product",
    category: "category",
    price: 999,
    image: "image-url",
    description: "Product description",
    specs: {
        "Feature 1": "Value 1",
        "Feature 2": "Value 2"
    }
}
```

### Styling Changes
Modify `styles.css` to customize:
- Colors and themes
- Typography and fonts
- Layout and spacing
- Animation effects

### Functionality Updates
Update `script.js` to modify:
- Cart behavior
- Product filtering logic
- Animation effects
- User interactions

## Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Efficient DOM Manipulation**: Minimal reflows and repaints
- **Event Delegation**: Optimized event handling
- **CSS Animations**: Hardware-accelerated transitions
- **Intersection Observer**: Performance-friendly scroll animations

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant color schemes
- **Responsive Text**: Scalable typography

## Future Enhancements

Potential improvements for the website:
- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Advanced search filters
- Payment gateway integration
- Inventory management
- Order tracking
- Email notifications

## License

This project is created for educational purposes. Apple product names and images are trademarks of Apple Inc.

## Credits

- **Images**: Unsplash.com for high-quality product images
- **Icons**: Font Awesome for interface icons
- **Fonts**: Google Fonts for SF Pro Display
- **Design Inspiration**: Apple.com official website

---

**Note**: This is a demonstration project showcasing modern web development techniques. It is not affiliated with Apple Inc. and is intended for educational purposes only.
