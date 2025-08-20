let cart = [];
let total = 0;

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  // Update cart display
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.textContent = `${name} - $${price}`;
  cartItems.appendChild(li);
}
