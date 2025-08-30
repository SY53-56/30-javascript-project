const cartContainer = document.querySelector(".cart");

// Cart data localStorage se lao
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

// Function: cart ko DOM mein render karo
function renderCart() {
    cartContainer.innerHTML = ""; // Purana HTML clear karo

    if (cartData.length === 0) {
        cartContainer.innerHTML = "<h2>Cart is empty</h2>";
        return;
    }

    cartData.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" style="width:100px;height:100px;object-fit:cover;" />
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
            
            <div class="quantity-controls">
                <button class="sub" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="plus" data-index="${index}">+</button>
            </div>

            <h4>Total: $${(item.price * item.quantity).toFixed(2)}</h4>
            <button class="delete" data-index="${index}">Delete</button>
        `;
        cartContainer.appendChild(div);
    });

    attachEventListeners(); // Naye buttons ke liye events dobara lagao
}

// Function: quantity update aur delete buttons ko kaam karna sikhao
function attachEventListeners() {
    // PLUS button
    document.querySelectorAll(".plus").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.dataset.index;
            cartData[index].quantity++;
            saveAndRender();
        });
    });

    // SUB button
    document.querySelectorAll(".sub").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.dataset.index;
            if (cartData[index].quantity > 1) {
                cartData[index].quantity--;
                saveAndRender();
            }
        });
    });

    // DELETE button
    document.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.dataset.index;
            cartData.splice(index, 1);
            saveAndRender();
        });
    });
}

// Function: localStorage update karo aur cart ko dobara render karo
function saveAndRender() {
    localStorage.setItem("cart", JSON.stringify(cartData));
    renderCart();
}

// First time render call
renderCart();
