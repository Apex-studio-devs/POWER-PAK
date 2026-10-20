     // Simple Gallery Switcher
        function gallery(thumbnail) {
            // Change main image
            document.getElementById('featured').src = thumbnail.src;
            
            // Update active state
            document.querySelectorAll('.thumbnails img').forEach(img => {
                img.classList.remove('active');
            });
            thumbnail.classList.add('active');
        }

        function toggleCalc() {
    const calcBox = document.getElementById('coverageCalc');
    const btn = document.getElementById('calcBtn');
    
    if (calcBox.style.display === "none") {
        calcBox.style.display = "block";
        btn.innerHTML = "Close Calculator";
    } else {
        calcBox.style.display = "none";
        btn.innerHTML = '<i class="fa-solid fa-calculator" style="margin-right: 10px;"></i> Calculate Coverage';
    }
}

function calculateBags() {
    const area = document.getElementById('sqftInput').value;
    const bagsResult = document.getElementById('bagsResult');
    const weightResult = document.getElementById('weightResult');

    // 1 bag of 20kg covers approx 55 sqft (standard 4-6mm thickness)
    const coveragePerBag = 21.52;

    if (area > 0) {
        let totalBags = Math.ceil(area / coveragePerBag);
        bagsResult.innerText = totalBags + " Bags";
        weightResult.innerText = (totalBags * 20) + " kg";
    } else {
        bagsResult.innerText = "0";
        weightResult.innerText = "0 kg";
    }
}
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuBtn.classList.toggle('open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuBtn.classList.remove('open');
        });
    });


function orderNow() {
  const sqft = document.getElementById('sqftInput').value || 0;
  const bags = document.getElementById('bagsResult').innerText;

  const message =
`🧾 Max Bond Inquiry

Area: ${sqft} SQFT
Estimated Bags: ${bags}

Please share price & delivery details.`;

  window.open(
    `https://wa.me/923002013334?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
let currentProduct = "";
let pricePerBag = 0;

function openOrder(product, price) {
  currentProduct = product;
  pricePerBag = price;

  document.getElementById("orderTitle").innerText = product + " Order";
  document.getElementById("orderBox").style.display = "block";
}

document.addEventListener("input", function (e) {
  if (e.target.id === "qty") {
    const qty = e.target.value || 0;
    document.getElementById("totalPrice").innerText = qty * pricePerBag;
  }
});

function sendOrder() {
  const qty = document.getElementById("qty").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!qty || !name || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  const total = qty * pricePerBag;

  const message =
`🧾 *Power Pak Order*

📦 Product: ${currentProduct}
📊 Bags: ${qty}
💰 Total: ${total} PKR

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}

Please confirm order.`;

  window.open(
    `https://wa.me/923002013334?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

function togglePanel(type) {
    const calc = document.getElementById("coverageCalc");
    const order = document.getElementById("orderBox");

    if (type === "calc") {
        order.style.display = "none";
        calc.style.display = calc.style.display === "block" ? "none" : "block";
    }

    if (type === "order") {
        calc.style.display = "none";
        order.style.display = order.style.display === "block" ? "none" : "block";
    }
}
function toggleCalc() {
    document.querySelector(".quote-calculator").classList.toggle("active");
}

function toggleOrder() {
    document.querySelector(".order-box").classList.toggle("active");
}
// ================= PRODUCT PAGE ADD TO CART =================
const PowerPakProductMap = {
  'powerplus-bond': { id: 'powerplus-bond', name: 'PowerPlus Bond', price: 650, image: 'images/powerplus-main.png' },
  'rk-tile-bond': { id: 'rk-tile-bond', name: 'RK Tile Bond', price: 680, image: 'images/rk-main.jpeg' },
  'rk-c2-tile-bond': { id: 'rk-c2-tile-bond', name: 'RK Tile Bond (C2)', price: 1500, image: 'images/rk-main-c2.png' },
  'max-tile-bond': { id: 'max-tile-bond', name: 'MAX Tile Bond', price: 680, image: 'images/max-main.png' },
  '10x-tile-bond': { id: '10x-tile-bond', name: '10X Tile Bond', price: 750, image: 'images/10X-main.png' },
  '10x-tile-bond': { id: '10x-c2te-tile-bond', name: '10X Tile Bond', price: 3000, image: 'images/10X-main-c2te.png' },
  'power-pak-bond': { id: 'power-pak-bond', name: 'Power Pak Premium Bond', price: 650, image: 'images/power pak.jpeg' },
  'white-bond': { id: 'white-bond', name: 'Power Pak White Bond', price: 650, image: 'images/white-bond-main.png' }
};

function addProductPageToCart(productId) {
  const product = PowerPakProductMap[productId];
  if (!product) return;

  const qtyField = document.getElementById('qty');
  const estimatedBagsText = document.getElementById('bagsResult')?.innerText || '';
  const estimatedBags = parseInt(estimatedBagsText, 10);
  const qty = Math.max(1, parseInt(qtyField?.value || estimatedBags || '1', 10));

  let cart = JSON.parse(localStorage.getItem('PowerPakCartV2')) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, qty });

  localStorage.setItem('PowerPakCartV2', JSON.stringify(cart));
  showProductToast(`${product.name} added to cart`);
}

function showProductToast(message) {
  let toast = document.querySelector('.toast-mini');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-mini';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}
let selectedProductForCart = null;

function openQtyModal(productId) {
    selectedProductForCart = productId;

    let modal = document.getElementById("qtyModal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "qtyModal";
        modal.className = "qty-modal-overlay";

        modal.innerHTML = `
            <div class="qty-modal-box">
                <button class="qty-close" onclick="closeQtyModal()">×</button>
                <h3>Add Bags to Cart</h3>
                <p>How many bags do you want to add?</p>

                <input type="number" id="modalQtyInput" min="1" value="1">

                <div class="qty-modal-actions">
                    <button onclick="closeQtyModal()" class="qty-cancel">Cancel</button>
                    <button onclick="confirmQtyAdd()" class="qty-confirm">Add to Cart</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    document.getElementById("modalQtyInput").value = 1;
    modal.classList.add("show");
}

function closeQtyModal() {
    const modal = document.getElementById("qtyModal");
    if (modal) modal.classList.remove("show");
}

function confirmQtyAdd() {
    const qty = parseInt(document.getElementById("modalQtyInput").value, 10);

    if (!qty || qty < 1) {
        alert("Please enter valid bags quantity");
        return;
    }

    addProductPageToCart(selectedProductForCart, qty);
    closeQtyModal();
}

function addProductPageToCart(productId, qty = 1) {
    const product = PowerPakProductMap[productId];
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("PowerPakCartV2")) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: product.id, qty });
    }

    localStorage.setItem("PowerPakCartV2", JSON.stringify(cart));
    showProductToast(`${qty} ${product.name} bag(s) added to cart`);
}