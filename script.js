let cartItemsCount = 0;
let totalCartPrice = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = `${productName} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);

    // Update totals
    cartItemsCount++;
    totalCartPrice += price;

    // Update totals display
    document.getElementById('total-items').textContent = cartItemsCount;
    document.getElementById('total-price').textContent = totalCartPrice.toFixed(2);
}