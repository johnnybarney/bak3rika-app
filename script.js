// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Helper: Find item in cart by name
function findCartItem(name) {
  return cart.find(item => item.name === name);
}

// Update "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    
    // Get quantity from the input next to this button
    const quantityInput = button.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantityInput.value) || 1;

    // Find existing item in cart
    const existingItem = findCartItem(name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ name, price, quantity });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reset quantity to 1
    quantityInput.value = 1;

    alert(`${quantity} x ${name} added to cart!`);
  });
});