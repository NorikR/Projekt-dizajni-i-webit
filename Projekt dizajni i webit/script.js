const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "iphone",
        price: 699,
        image: "iPhone 15 pro.webp",
        description: "The ultimate iPhone with titanium design and advanced camera system.",
        specs: {
            "Display": "6.1-inch Super Retina XDR",
            "Chip": "A17 Pro",
            "Camera": "48MP Main, 12MP Ultra Wide",
            "Storage": "128GB, 256GB, 512GB, 1TB",
            "Battery": "Up to 23 hours video playback"
        }
    },
    {
        id: 2,
        name: "iPhone 15",
        category: "iphone",
        price: 499,
        image: "iphone 15.webp",
        description: "The iPhone with new Dynamic Island and advanced dual-camera system.",
        specs: {
            "Display": "6.1-inch Super Retina XDR",
            "Chip": "A16 Bionic",
            "Camera": "48MP Main, 12MP Ultra Wide",
            "Storage": "128GB, 256GB, 512GB",
            "Battery": "Up to 20 hours video playback"
        }
    },
    {
        id: 3,
        name: "iPad Pro 12.9\"",
        category: "ipad",
        price: 899,
        image: "ipad pro.png",
        description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display.",
        specs: {
            "Display": "12.9-inch Liquid Retina XDR",
            "Chip": "Apple M2",
            "Storage": "128GB, 256GB, 512GB, 1TB, 2TB",
            "Camera": "12MP Wide, 10MP Ultra Wide",
            "Battery": "Up to 10 hours"
        }
    },
    {
        id: 4,
        name: "iPad Air",
        category: "ipad",
        price: 799,
        image: "ipad air.png",
        description: "Serious performance in a thin and light design with M1 chip.",
        specs: {
            "Display": "10.9-inch Liquid Retina",
            "Chip": "Apple M2",
            "Storage": "64GB, 256GB",
            "Camera": "12MP Wide",
            "Battery": "Up to 10 hours"
        }
    },
    {
        id: 5,
        name: "MacBook Air 14\"",
        category: "mac",
        price: 1499,
        image: "macbook 14.png",
        description: "Supercharged by M4 Pro or M4 Max chip for demanding workflows.",
        specs: {
            "Display": "14.2-inch Liquid Retina XDR",
            "Chip": "Apple M4 Pro or M4 Max",
            "Memory": "18GB or 36GB unified memory",
            "Storage": "512GB, 1TB, 2TB, 4TB, 8TB",
            "Battery": "Up to 18 hours"
        }
    },
    {
        id: 6,
        name: "MacBook Air 13\"",
        category: "mac",
        price: 1099,
        image: "macbook 13.png",
        description: "Incredibly thin and light with M4 chip and all-day battery life.",
        specs: {
            "Display": "13.6-inch Liquid Retina",
            "Chip": "Apple M4",
            "Memory": "8GB or 24GB unified memory",
            "Storage": "256GB, 512GB, 1TB, 2TB",
            "Battery": "Up to 18 hours"
        }
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        category: "watch",
        price: 399,
        image: "Apple watch series 9.jpg.avif",
        description: "The most advanced Apple Watch with S9 chip and Double Tap gesture.",
        specs: {
            "Display": "45mm or 41mm Always-On Retina",
            "Chip": "S9 SiP",
            "Health": "Blood Oxygen, ECG, Temperature",
            "Connectivity": "GPS + Cellular available",
            "Battery": "Up to 18 hours"
        }
    },
    {
        id: 8,
        name: "Apple Watch SE",
        category: "watch",
        price: 249,
        image: "apple_watch_se.jpg",
        description: "Essential Apple Watch features in a more affordable design.",
        specs: {
            "Display": "44mm or 40mm Retina",
            "Chip": "S8 SiP",
            "Health": "Heart rate, Sleep tracking",
            "Connectivity": "GPS + Cellular available",
            "Battery": "Up to 18 hours"
        }
    },
    {
        id: 9,
        name: "AirPods Pro (2nd gen)",
        category: "airpods",
        price: 249,
        image: "airpods pro 2nd gen.jpg",
        description: "Active Noise Cancellation and Personalized Spatial Audio.",
        specs: {
            "Audio": "Adaptive Audio, Active Noise Cancellation",
            "Chip": "H2 chip",
            "Battery": "Up to 6 hours listening time",
            "Case": "MagSafe Charging Case",
            "Features": "Personalized Spatial Audio"
        }
    },
    {
        id: 10,
        name: "AirPods (3rd gen)",
        category: "airpods",
        price: 179,
        image: "airpods pro 3rd gen.jpg",
        description: "Personalized Spatial Audio with dynamic head tracking.",
        specs: {
            "Audio": "Spatial Audio, Adaptive EQ",
            "Chip": "H1 chip",
            "Battery": "Up to 6 hours listening time",
            "Case": "Lightning Charging Case",
            "Features": "Sweat and water resistant"
        }
    },
    {
        id: 11,
        name: "iPhone 14 Pro",
        category: "iphone",
        price: 499,
        image: "iphone 14 pro.png",
        description: "Pro camera system with 48MP Main camera and Dynamic Island.",
        specs: {
            "Display": "6.1-inch Super Retina XDR",
            "Chip": "A16 Bionic",
            "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
            "Storage": "128GB, 256GB, 512GB, 1TB",
            "Battery": "Up to 23 hours video playback"
        }
    },
    {
        id: 12,
        name: "iMac 24\"",
        category: "mac",
        price: 1299,
        image: "imac.webp",
        description: "Strikingly thin design powered by M3 chip in vibrant colors.",
        specs: {
            "Display": "24-inch 4.5K Retina",
            "Chip": "Apple M3",
            "Memory": "8GB or 24GB unified memory",
            "Storage": "256GB, 512GB, 1TB, 2TB",
            "Camera": "1080p FaceTime HD camera"
        }
    }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];


const productsGrid = document.getElementById('products-grid');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const searchInput = document.getElementById('product-search');
const clearSearchBtn = document.querySelector('.clear-search');


let currentSearchTerm = '';
let currentCategory = 'all';


document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartUI();
    setupEventListeners();
});


function setupEventListeners() {
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchTerm = this.value;
            updateClearButton();
            performSearch();
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            currentCategory = category;
            filterProducts(category);
        });
    });

    
    const Apple = document.querySelector('.Apple');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }

    
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            toggleCart();
        }
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


function displayProducts(productsToShow, searchTerm = '') {
    productsGrid.innerHTML = '';
    
    
    if (searchTerm) {
        const resultsInfo = document.createElement('div');
        resultsInfo.className = 'search-results-info active';
        resultsInfo.textContent = `Found ${productsToShow.length} result${productsToShow.length !== 1 ? 's' : ''} for "${searchTerm}"`;
        productsGrid.appendChild(resultsInfo);
    } else if (currentCategory !== 'all') {
        const resultsInfo = document.createElement('div');
        resultsInfo.className = 'search-results-info';
        const categoryName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
        resultsInfo.textContent = `Showing ${productsToShow.length} ${categoryName} product${productsToShow.length !== 1 ? 's' : ''}`;
        productsGrid.appendChild(resultsInfo);
    }
    
    if (productsToShow.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'search-results-info';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="margin-bottom: 10px;">No products found</h3>
                <p>Try adjusting your search or browse our categories</p>
            </div>
        `;
        productsGrid.appendChild(noResults);
        return;
    }
    
    productsToShow.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        
        let highlightedName = product.name;
        let highlightedDescription = product.description;
        
        if (searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            highlightedName = product.name.replace(regex, '<mark style="background: #007aff; color: white; padding: 2px 4px; border-radius: 3px;">$1</mark>');
            highlightedDescription = product.description.replace(regex, '<mark style="background: #007aff; color: white; padding: 2px 4px; border-radius: 3px;">$1</mark>');
        }
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="showProductDetail(${product.id})">
            <h3 class="product-name">${highlightedName}</h3>
            <p class="product-description">${highlightedDescription}</p>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function filterProducts(category) {
    currentCategory = category;
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    if (currentSearchTerm.trim()) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    
    displayProducts(filteredProducts, currentSearchTerm);
    toggleSearchSuggestions();
}

function performSearch() {
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    currentSearchTerm = searchTerm;
    
    let filteredProducts = products;

    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    
    
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            Object.values(product.specs).some(spec => 
                spec.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }
    
    displayProducts(filteredProducts, searchTerm);
    updateClearButton();
    toggleSearchSuggestions();
}

function clearSearch() {
    if (searchInput) {
        searchInput.value = '';
        currentSearchTerm = '';
        updateClearButton();
        filterProducts(currentCategory);
        toggleSearchSuggestions();
    }
}

function updateClearButton() {
    if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchTerm.trim() ? 'flex' : 'none';
    }
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCart();
    
    
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}


function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
            saveCart();
        }
    }
}

function updateCartUI() {
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
    
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}


function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}


function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    const productDetailContent = document.getElementById('product-detail-content');
    
    productDetailContent.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-price">$${product.price}</div>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-specs">
                    <h3>Specifications</h3>
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${key}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();">
                    Add to Cart - $${product.price}
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

function closeProductModal() {
    productModal.style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Thank you for your purchase!\n\nItems: ${itemCount}\nTotal: $${total.toFixed(2)}\n\nYour order will be processed shortly.`);
    
    cart = [];
    updateCartUI();
    saveCart();
    toggleCart();
}


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}


function showNotification(message) {
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #007aff;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 122, 255, 0.3);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}


function setupHeaderSearch() {
    const headerSearchBtn = document.querySelector('.search-btn');
    if (headerSearchBtn) {
        headerSearchBtn.addEventListener('click', function() {
           
            if (searchInput) {
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
}


setupHeaderSearch();


function searchSuggestion(term) {
    if (searchInput) {
        searchInput.value = term;
        currentSearchTerm = term;
        performSearch();
        updateClearButton();
    }
}


function toggleSearchSuggestions() {
    const suggestions = document.getElementById('search-suggestions');
    const hasProducts = productsGrid.children.length > 0;
    
    if (suggestions) {
        
        if (!currentSearchTerm.trim() && currentCategory === 'all') {
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    }
}


window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.getElementById('hero-phone');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * -0.1}px)`;
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature, .contact-item, .footer-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});


document.addEventListener('keydown', function(e) {
    
    if (e.key === 'Escape') {
        if (cartModal.style.display === 'block') {
            toggleCart();
        }
        if (productModal.style.display === 'block') {
            closeProductModal();
        }
    }
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

console.log('Apple Store initialized successfully!');