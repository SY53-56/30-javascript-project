let count = 0; // cart icon me quantity store karne ke liye
let cartCount = document.querySelector("#cart-count"); // HTML me cart count span/div pakadna
const container = document.querySelector(".box"); // product detail show karne ke liye container

const params = new URLSearchParams(window.location.search); // URL ke query params read karna
const productId = Number(params.get("id")); // URL se product id le aana (string → number)

// Page load par cart count restore karna
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
count = cartData.reduce((acc, item) => acc + item.quantity, 0); // total quantity nikalna
cartCount.textContent = count; // cart icon par show karna

async function showProduct() {
    let res = await fetch("https://fakestoreapi.in/api/products"); // API se products fetch karna
    let data = await res.json(); // response ko JSON mein convert karna
    let products = data.products; // products array store karna

    let product = products.find(p => p.id === productId); // jo id URL mein hai us product ko dhundna
    if (product) {
        const div = document.createElement("div"); // ek div banana jisme product info aayegi
        div.classList.add("dataShow"); // styling ke liye class lagana
        div.innerHTML = `
            <img src="${product.image}" style="width:400px; height:400px; object-fit:cover;" alt="product"/>
            <div>
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <h3>Price: $${product.price}</h3>
                <div class="btn">
                    <button id="sub">-</button>
                    <span id="qty">1</span>
                    <button id="plus">+</button>
                    <button id="add-btn">Add to cart</button>
                </div>
            </div>
        `;
        container.appendChild(div); // product details ko DOM mein add karna

        let quantity = 1; // default quantity 1
        const qtyDisplay = document.querySelector("#qty");
        const addBtn = document.querySelector("#add-btn");
        const plus = document.querySelector("#plus");
        const sub = document.querySelector("#sub");

        plus.addEventListener("click", () => {
            quantity++;
            qtyDisplay.textContent = quantity;
        });

        sub.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                qtyDisplay.textContent = quantity;
            } else {
                console.log("Quantity cannot go below 1");
            }
        });

        addBtn.addEventListener("click", function() {
            count += quantity;
            cartCount.textContent = count;
            addToCart(product, quantity);
        });
    } else {
        alert("Product not found");
    }
}
showProduct();

function addToCart(product, quantity) {
    let oldData = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = oldData.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        oldData.push({ ...product, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(oldData));
    console.log(`Added ${quantity} x ${product.title} to cart`);
}
