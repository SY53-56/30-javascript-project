const container = document.querySelector("#content");

async function apiData() {
    let res = await fetch("https://fakestoreapi.in/api/products");
    let data = await res.json();

    // Correct the data assignment
    let products = data.products;

    products.forEach(element => {
        // 1. Create a div for each product
        const div = document.createElement("div");
        div.classList.add("show");

        // 2. Create an image element manually
        const img = document.createElement("img");
        img.src = element.image;
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        img.style.overflow = "hidden";
        img.alt = "photo";

        // 3. Add click event to go to another page with product ID
        img.addEventListener("click", () => {
            window.location.href = `product.html?id=${element.id}`;
        });

        // 4. Create a title <p>
        const title = document.createElement("p");
        title.textContent = element.title;

        // 5. Append image and title inside the div
        div.appendChild(img);
        div.appendChild(title);

        // 6. Add div to container
        container.appendChild(div);
    });

    console.log("data", products);
}

apiData();
