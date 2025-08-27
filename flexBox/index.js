let images = document.querySelectorAll(".box img");
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");
let closeBtn = document.getElementById("closeBtn");

// Click on image → open popup
images.forEach((img) => {
    img.addEventListener("click", function() {
        popup.style.display = "flex"; // show popup
        popupImg.src = img.src; // set clicked image
    });
});

// Close popup when clicking X
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// Close when clicking outside image
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

const product = document.querySelector(".product");
const search = document.querySelector("#search");

let allProducts = []; // store products globally

function shoeData() {
    fetch('https://fakestoreapi.in/api/products')
        .then(resp => resp.json())
        .then(data => {
            allProducts = data.products; // save products
            displayProducts(allProducts);
        })
        .catch(err => console.error(err));
}

function displayProducts(products) {
    product.innerHTML = ""; // clear old products
    products.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("items");

        div.innerHTML = `
            <img class="img-product" src="${item.image}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>price: ${item.price}</p>
            <button>click</button>
        `;
        product.appendChild(div);
    });
}

// Listen for typing in search box
search.addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase();
    const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(query)
    );
    displayProducts(filtered);
});

// Correct way to call on DOM load
window.addEventListener("DOMContentLoaded", shoeData);