const COMPANY_WHATSAPP = '923002013334';

const categoryCopy = {
    bond: {
        label: 'Power Pak Bond',
        title: 'Tile Adhesive Bags',
        text: 'Professional 20kg polymer-modified cementitious tile adhesive bags for ceramic, porcelain, vitrified tiles, granite, heavy stone slabs, and pool installations.'
    },
    filling: {
        label: 'Power Pak Filling',
        title: 'Tile Filling Colors',
        text: 'Select filling color, add quantity, and place retail or bulk order directly through WhatsApp checkout.'
    }
};

const products = [
    {
        id: '10x-tile-bond',
        category: 'bond',
        name: '10X Tile Bond',
        tagline: 'Extra Performance Adhesive · 20kg',
        price: 800,
        unit: 'bag',
        image: 'images/10X-main.png',
        badge: '10X Grip',
        stock: 'In Stock',
        available: true,
        details: 'product-10x.html'
    },
    {
        id: 'max-tile-bond',
        category: 'bond',
        name: 'MAX Tile Bond',
        tagline: 'Industrial Strength · 20kg',
        price: 680,
        unit: 'bag',
        image: 'images/max-main.png',
        badge: '5X Plus Grip',
        stock: 'In Stock',
        available: true,
        details: 'product-max.html'
    },
    {
        id: 'rk-tile-bond',
        category: 'bond',
        name: 'RK Tile Bond',
        tagline: 'High Adhesion Formula · 20kg',
        price: 650,
        unit: 'bag',
        image: 'images/rk-main.jpeg',
        badge: '3X Grip',
        stock: 'In Stock',
        available: true,
        details: 'product-rk.html'
    },
    {
        id: 'powerplus-bond',
        category: 'bond',
        name: 'PowerPlus Bond',
        tagline: 'General Purpose Tile Adhesive · 20kg',
        price: 650,
        unit: 'bag',
        image: 'images/powerplus-main.png',
        badge: 'Most Selling',
        stock: 'In Stock',
        available: true,
        details: 'product-powerplus.html'
    },
    {
        id: 'rk-c2-tile-bond',
        category: 'bond',
        name: 'RK Tile Bond (C2)',
        tagline: 'Heavy Duty C2 Quality Bond · 20kg',
        price: 2500,
        unit: 'bag',
        image: 'images/rk-main-c2.png',
        badge: 'C2 Grade',
        stock: 'In Stock',
        available: true,
        details: 'product-rk-c2.html'
    },
    {
        id: '10x-c2te-tile-bond',
        category: 'bond',
        name: '10X Tile Bond (C2TE)',
        tagline: 'Extra Performance C2TE Quality Adhesive · 20kg',
        price: 3500,
        unit: 'bag',
        image: 'images/10X-main-c2te.png',
        badge: 'Coming Soon',
        stock: '',
        available: false,
        details: 'product-10x-c2te.html'
    },
    {
        id: 'power-pak-bond',
        category: 'bond',
        name: 'PowerPak Bond',
        tagline: 'General Purpose Tile Adhesive · 20kg',
        price: 650,
        unit: 'bag',
        image: 'images/power pak.jpeg',
        badge: 'Coming Soon',
        stock: '',
        available: false,
        details: 'product-powerpak.html'
    },
    {
        id: 'white-bond',
        category: 'bond',
        name: 'PowerPak White Bond',
        tagline: 'General Purpose White Bond · 20kg',
        price: 650,
        unit: 'bag',
        image: 'images/whitebond.png',
        badge: 'Coming Soon',
        stock: '',
        available: false,
        details: 'product-whitebond.html'
    },
    {
        id: 'filling-pure-white',
        category: 'filling',
        name: 'Pure White Filling',
        tagline: 'Classic smooth finish · FW-01',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#ffffff,#d9d9d9)',
        badge: 'Popular',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-black',
        category: 'filling',
        name: 'Black Filling',
        tagline: 'Deep granite finish · FI-03',
        price: 400,
        unit: 'pack',
        color: 'linear-gradient(135deg,#151515,#000000)',
        badge: 'Luxury',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-ivory',
        category: 'filling',
        name: 'Ivory Filling',
        tagline: 'Warm marble tone · FI-02',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#fffff0,#e8dcc0)',
        badge: 'Premium Look',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-light-gray',
        category: 'filling',
        name: 'Light Gray Filling',
        tagline: 'Clean porcelain finish · FI-04',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#d3d3d3,#9e9e9e)',
        badge: 'Modern',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-dark-gray',
        category: 'filling',
        name: 'Dark Gray Filling',
        tagline: 'Industrial stone finish · FI-05',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#555555,#242424)',
        badge: 'Strong Tone',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-beige',
        category: 'filling',
        name: 'Beige Filling',
        tagline: 'Natural stone look · FB-03',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#f5e6c8,#c99f67)',
        badge: 'Natural',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-dark-brown',
        category: 'filling',
        name: 'Dark Brown Filling',
        tagline: 'Rich espresso timber · FI-04',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#3e2723,#1b0000)',
        badge: 'Luxury',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-light-brown',
        category: 'filling',
        name: 'Light Brown Filling',
        tagline: 'Oak and timber tone · FI-08',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#a67b5b,#765039)',
        badge: 'Wood Look',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-pink',
        category: 'filling',
        name: 'Pink Filling',
        tagline: 'Rose quartz shimmer · FI-05',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#f48fb1,#ad1457)',
        badge: 'Luxury',
        stock: 'In Stock',
        available: true
    },
    {
        id: 'filling-sky-blue',
        category: 'filling',
        name: 'Sky Blue Filling',
        tagline: 'Fresh pool and mosaic tone · FI-11',
        price: 300,
        unit: 'pack',
        color: 'linear-gradient(135deg,#87ceeb,#00a8e8)',
        badge: 'Decorative',
        stock: 'In Stock',
        available: true
    }
];

let activeCategory = 'bond';
let cart = JSON.parse(localStorage.getItem('PowerPakCartV2')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryIntro();
    renderProducts();
    renderCart();
});

function formatPrice(value) {
    return `${Number(value).toLocaleString('en-PK')} PKR`;
}

function switchShopCategory(category, btn) {
    activeCategory = category;
    document.querySelectorAll('.shop-tab-btn').forEach(tab => tab.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderCategoryIntro();
    renderProducts();
}

function renderCategoryIntro() {
    const intro = document.getElementById('categoryIntro');
    if (!intro) return;
    const copy = categoryCopy[activeCategory];
    intro.innerHTML = `
        <span class="eyebrow">${copy.label}</span>
        <h3>${copy.title}</h3>
        <p>${copy.text}</p>
    `;
}

function productVisual(product) {
    if (product.image) {
        return `<img src="${product.image}" alt="${product.name}">`;
    }
    return `<div class="filling-swatch" style="background:${product.color}"><span>${product.name.replace(' Filling', '')}</span></div>`;
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const visibleProducts = products.filter(product => product.category === activeCategory);

    grid.innerHTML = visibleProducts.map(product => `
        <article class="product-card ${product.category === 'filling' ? 'filling-product-card' : ''}">
            <span class="product-badge">${product.badge}</span>
            <div class="product-image">
                ${productVisual(product)}
            </div>
            <div class="product-body">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.tagline}</p>
                <div class="price-row">
                    <span class="price">${formatPrice(product.price)}</span>
                    <span class="stock-pill ${product.available ? '' : 'out'}">${product.stock}</span>
                </div>
                <div class="qty-row">
                    <input type="number" id="qty-${product.id}" min="1" value="1" ${product.available ? '' : 'disabled'}>
                    <button class="card-btn" onclick="addToCart('${product.id}')" ${product.available ? '' : 'disabled'}>
                        Add to Cart
                    </button>
                </div>
                <button class="buy-btn" onclick="buyNow('${product.id}')" ${product.available ? '' : 'disabled'}>
                    Buy Now
                </button>
                ${product.details ? `<a class="details-link" href="${product.details}">View Details <i class="fa-solid fa-arrow-right-long" style="margin-left:8px"></i></a>` : `<span class="details-link muted-link">Color order item</span>`}
            </div>
        </article>
    `).join('');
}

function saveCart() {
    localStorage.setItem('PowerPakCartV2', JSON.stringify(cart));
    renderCart();
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product || !product.available) return;

    const qtyInput = document.getElementById(`qty-${productId}`);
    const qty = Math.max(1, parseInt(qtyInput?.value || '1', 10));
    const existing = cart.find(item => item.id === productId);

    if (existing) existing.qty += qty;
    else cart.push({ id: product.id, qty });

    saveCart();
    showToast(`${product.name} added to cart`);
}

function buyNow(productId) {
    addToCart(productId);
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function changeQty(productId, delta) {
    const item = cart.find(row => row.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty < 1) removeFromCart(productId);
    else saveCart();
}

function getCartRows() {
    return cart.map(item => {
        const product = products.find(row => row.id === item.id);
        return product ? { ...product, qty: item.qty, lineTotal: product.price * item.qty } : null;
    }).filter(Boolean);
}

function renderCart() {
    const rows = getCartRows();
    const count = rows.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = rows.reduce((sum, item) => sum + item.lineTotal, 0);

    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');

    if (countEl) countEl.textContent = count;
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

    if (!itemsEl) return;

    if (!rows.length) {
        itemsEl.innerHTML = '<div class="empty-cart">Your cart is empty. Add a product to start checkout.</div>';
        return;
    }

    itemsEl.innerHTML = rows.map(item => `
        <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : `<div class="cart-swatch" style="background:${item.color}"></div>`}
            <div>
                <h4>${item.name}</h4>
                <small>${formatPrice(item.price)} / ${item.unit} · ${formatPrice(item.lineTotal)}</small>
                <div class="cart-controls">
                    <button type="button" onclick="changeQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button type="button" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" type="button" onclick="removeFromCart('${item.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function openCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
}

function getOrderPayload() {
    const rows = getCartRows();
    const subtotal = rows.reduce((sum, item) => sum + item.lineTotal, 0);

    return {
        name: document.getElementById('customerName')?.value.trim(),
        phone: document.getElementById('customerPhone')?.value.trim(),
        email: document.getElementById('customerEmail')?.value.trim(),
        city: document.getElementById('customerCity')?.value.trim(),
        address: document.getElementById('customerAddress')?.value.trim(),
        notes: document.getElementById('customerNotes')?.value.trim(),
        rows,
        subtotal
    };
}

function validateOrder(payload) {
    if (!payload.rows.length) {
        showToast('Please add at least one product first');
        return false;
    }
    if (!payload.name || !payload.phone || !payload.city || !payload.address) {
        showToast('Please fill all required customer details');
        return false;
    }
    return true;
}

function buildOrderMessage(payload) {
    const orderId = "PP-" + Math.floor(1000 + Math.random() * 9000);

    const lines = payload.rows.map((item, index) =>
        `${index + 1}. ${item.name}
Quantity: ${item.qty} ${item.unit}(s)
Price per ${item.unit}: ${formatPrice(item.price)}
Line Total: ${item.qty} x ${formatPrice(item.price)} = ${formatPrice(item.lineTotal)}`
    ).join('\n\n');

    return `Power Pak Industries - New Order
Order ID: ${orderId}

Customer Details
Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email || 'Not provided'}
City: ${payload.city}
Address: ${payload.address}
${payload.notes ? `Notes: ${payload.notes}\n` : ''}

Order Summary
${lines}

Subtotal: ${formatPrice(payload.subtotal)}
Delivery Charges: To be confirmed

Please confirm final amount, and estimated delivery time.`;
}

function submitOrder(event) {
    event.preventDefault();
    const payload = getOrderPayload();
    if (!validateOrder(payload)) return;

    const message = buildOrderMessage(payload);
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');

    showToast('Order sent to WhatsApp');
}

function sendOrderEmailOnly() {
    const payload = getOrderPayload();
    if (!validateOrder(payload)) return;

    const orderMessage = buildOrderMessage(payload);

    fetch('send-order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            email: payload.email || '',
            city: payload.city,
            address: payload.address,
            notes: payload.notes || '',
            subtotal: payload.subtotal,
            orderMessage: orderMessage
        })
    })
    .then(async response => {
        const text = await response.text();
        try {
            return JSON.parse(text);
        } catch (error) {
            throw new Error('Invalid server response');
        }
    })
    .then(data => {
        if (data.success) {
            showToast(data.message || 'Order sent to company email');
        } else {
            showToast(data.message || 'Email sending failed');
        }
    })
    .catch(error => {
        showToast('WhatsApp checkout recommended');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2400);
}
