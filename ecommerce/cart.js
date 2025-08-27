function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='text-gray-700'>Your cart is empty.</p>";
    updateTotal(0);
    return;
  }

  cart.forEach(item => {
    const itemHTML = `
      <div class="bg-white  p-4 rounded shadow flex flex-col justify-between items-center">
        <div class="flex gap-5">
        <div><img src=${item.image} alt="image" class="w-[400px]"/></div>
         <div class="">
          <h1 class="font-semibold text-4xl">${item.title}</h1>
          <p class="text-gray-600">$${item.price.toFixed(2)} x ${item.quantity}</p>
           <p class="text-gray-700 mb-4">${item.description}</p> </div>
        </div>
        <div class="space-x-2">
          <button class="px-3 py-1 bg-green-500 text-white rounded" onclick="changeQuantity(${item.id}, 1)">+</button>
          <button class="px-3 py-1 bg-yellow-400 text-white rounded" onclick="changeQuantity(${item.id}, -1)">-</button>
          <button class="px-3 py-1 bg-red-600 text-white rounded" onclick="removeItem(${item.id})">Remove</button>
        </div>
      </div>
    `;
    container.innerHTML += itemHTML;
  });

  updateTotal(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
}

function changeQuantity(productId, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(i => i.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function updateTotal(total) {
  document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", renderCart);
