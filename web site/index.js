const container = document.querySelector("#content");

async function apiData() {
    let res = await fetch("https://fakestoreapi.in/api/products");
    let data = await res.json();
    let products = data.products;

    renderProducts(products); // Initial render
    setupSearch(products);    // Attach search event

    console.log("data", products);
}

function renderProducts(products) {
    container.innerHTML = ""; // Clear old content

    products.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("show");

        const img = document.createElement("img");
        img.src = element.image;
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        img.alt = "photo";

        img.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

        const title = document.createElement("p");
        title.textContent = element.title;

        div.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);
    });
}

function setupSearch(products) {
    const input = document.querySelector("#input");

    input.addEventListener("input", () => {
        const inputValue = input.value.trim().toLowerCase();
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(inputValue)
        );
        renderProducts(filtered);
    });
}

apiData();
