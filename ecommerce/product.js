
async function renderProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const result  = await res.json();
  const products = result
console.log("API Response:", products);

    if (!Array.isArray(products)) {
      console.error("Expected an array of products, got:", products);
      return;
    }
    const container = document.getElementById("product-list");
     container.innerHTML  =""


    products.forEach(product => {
      const div = document.createElement("div")
       div.className = "bg-white w-50 h-50 rounded shadow p-4 flex flex-col items-center";
      div.innerHTML = `
        <div class="bg-white rounded shadow p-4 flex flex-col items-center">
          <img src="${product.image}" alt="${product.title}" class="mb-4 w-40 h-40 object-fill rounded" />
          <h3 class="text-xl font-semibold">${product.title}</h3>
          <p class="text-gray-700 mb-4">$${product.price.toFixed(2)}</p>
              

          <button
            class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
            Add to Cart
          </button>
        </div>
      `;
      div.querySelector("button").addEventListener("click",function(){
        addToCart(product)
      })
      container.appendChild(div)

    });
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
function addToCart(product) {
  if (!product || typeof product.id === "undefined") {
    console.error("Invalid product:", product);
    return;
  }

  let cartData = localStorage.getItem("cart");
  let cart = [];
  if (cartData && cartData !== "undefined") {
    try {
      cart = JSON.parse(cartData);
    } catch (e) {
      console.error("Corrupted cart data, resetting...", e);
      cart = [];
    }
  }

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});



