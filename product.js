let cart = [];
let totalPrice = 0;
let discount = 0;

function addToCart(productName, productPrice) {
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItems.innerHTML = '';
  totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
            ${item.name} - Rp ${item.price} x ${item.quantity}
            <button onclick="increaseQuantity(${index})">+</button>
            <button onclick="decreaseQuantity(${index})">-</button>
            <button onclick="removeFromCart(${index})">Batal</button>
        `;
    cartItems.appendChild(li);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: Rp ${totalPrice}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeFromCart(index);
  }
  updateCart();
}

function checkout() {
  document.getElementById('checkout-modal').style.display = 'block';
  initMap();
}

function closeModal() {
  document.getElementById('checkout-modal').style.display = 'none';
}

function completeCheckout() {
  const paymentMethod = document.getElementById('payment-method').value;
  alert(`Checkout berhasil! Metode Pembayaran: ${paymentMethod}\nTotal: Rp ${totalPrice}`);
  cart = [];
  updateCart();
  closeModal();
  showDeliveryModal();
}

function showDeliveryModal() {
  document.getElementById('delivery-modal').style.display = 'block';
  initDeliveryMap();
}

function closeDeliveryModal() {
  document.getElementById('delivery-modal').style.display = 'none';
  cart = [];
  discount = 0;
  updateCart = 0;
}

function initDeliveryMap() {
  const map = new google.maps.Map(document.getElementById('delivery-map'), {
    center: { lat: -6.2, lng: 106.816666 },
    zoom: 12,
  });

  const marker = new google.maps.Marker({
    position: { lat: -6.2, lng: 106.816666 },
    map: map,
  });

  // Simulate delivery location updates
  let deliveryPosition = { lat: -6.2, lng: 106.816666 };
  setInterval(() => {
    deliveryPosition.lat += 0.001;
    deliveryPosition.lng += 0.001;
    marker.setPosition(deliveryPosition);
    map.panTo(deliveryPosition);
  }, 2000);
}

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// ===== MENU SHOW ==== //
// validate if constant; exists //
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// ======= MENU HIDDEN ====== //
// Validate if constant exists //
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
