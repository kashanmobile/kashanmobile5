// Add products to cart (using localStorage)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').innerText = cartCount;
}

// Show cart items in cart page
function loadCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.innerText = total.toFixed(2);
}

// Checkout function (for demo purposes)
function checkout() {
    alert('Proceeding to checkout...');
    // Here, you would integrate checkout logic with payment processing
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Load cart page
if (document.getElementById('cart-items')) {
    loadCart();
}
