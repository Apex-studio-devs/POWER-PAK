// ================= TAB SWITCHING =================
function switchTab(tabId, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const panel = document.getElementById('panel-' + tabId);
  if (panel) panel.classList.add('active');

  if (btn) btn.classList.add('active');
}

// ================= FILING TOGGLE =================
function toggleFiling(card) {
  const expand = card.querySelector('.filing-expand');
  const isOpen = card.classList.contains('open');

  document.querySelectorAll('.filing-card').forEach(c => {
    c.classList.remove('open');
    const ex = c.querySelector('.filing-expand');
    if (ex) ex.classList.remove('show');
    c.style.borderColor = 'transparent';
  });

  if (!isOpen && expand) {
    card.classList.add('open');
    expand.classList.add('show');
    card.style.borderColor = 'var(--red)';
  }
}

// ================= NAVBAR SCROLL =================
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) {
    nb.style.background = window.scrollY > 60
      ? 'rgba(5,2,0,0.97)'
      : 'rgba(10,5,0,0.92)';
  }
});

// ================= FOOTER SMOOTH SCROLL =================
document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === "#") return;

    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ================= SCROLL REVEAL =================
document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});

// ================= MOBILE MENU =================
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenu.classList.remove('open');
    });
  });
}

// ================= WHATSAPP ORDER =================
function orderNow(product = "General Inquiry") {
  const phone = "923002013334";
  const text = `Salam Power Pak Industries! I'm interested in ordering: *${product}*. \n\nPlease share details.`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

// ================= CART SYSTEM =================
let cart = JSON.parse(localStorage.getItem('PowerPakCart')) || [];
updateCartUI();

function addToOrder(productName) {
  const existing = cart.find(item => item.name === productName);

if (existing) {
  existing.qty += 1;
} else {
  cart.push({ name: productName, qty: 1 });
}
  localStorage.setItem('PowerPakCart', JSON.stringify(cart));
  updateCartUI();
  alert(`${productName} added to cart successfully!`);
}

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  const listEl = document.getElementById('cart-items-list');
  if (listEl) {
    listEl.innerHTML = cart.map(item =>
  `<li style="color:var(--text-muted)">
    ${item.name} (x${item.qty})
  </li>`
).join('');
  }
}

function toggleCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
  }
}

function handleOrderSubmission(event) {
  event.preventDefault();

  if (cart.length === 0) {
    alert("Please add at least one product first.");
    return;
  }

  const name = document.getElementById('custName').value;
  const phoneInput = document.getElementById('custPhone').value;
  const city = document.getElementById('custCity').value;
  const address = document.getElementById('custAddress').value;

  const businessPhone = "923002013334"; // ✅ YOUR NUMBER

  let message = `🧾 *Power Pak Industries Order*\n\n`;
  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phoneInput}\n`;
  message += `📍 City: ${city}\n`;
  message += `🏠 Address: ${address}\n\n`;
  message += `📦 *Items:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (x${item.qty})\n`;
  });

  message += `\nPlease confirm order & delivery details.`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, "_blank");

  // Clear cart after sending
  localStorage.removeItem('PowerPakCart');
  cart = [];
  updateCartUI();
  toggleCheckoutModal();
}
