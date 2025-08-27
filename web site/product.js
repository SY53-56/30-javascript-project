

const container = document.querySelector(".box")

const params = new URLSearchParams(window.location.search)
const productId = Number(params.get("id"));

async function showProdouct(){
    let res = await fetch("https://fakestoreapi.in/api/products")
    let data= await res.json()
    let products = data.products

    let product = products.find(p=>p.id === productId)
    if(product){
        const div  =  document.createElement("div")
        div.classList.add("dataShow")
        div.innerHTML  = `
        <img src=${product.image}  style="width:400px; height:400px; object-fit:cover;" alt="sahul"/>
        <div style ="">
           <h1>${product.title}</h1>
            <p>${product.description}</p>
            <h3>Price: $${product.price}</h3>
         <div class="btn">         <button id="plus">+</button>      <button id="sub">-</button>   <button id="add-btn">Add cart</button></div>
        </div>
        `
         container.appendChild(div)
         let quantity = 0
         const addBtn = document.querySelector("#add-btn")
         const plus = document.querySelector("#plus")
         const sub = document.querySelector("#sub")
          
          plus.addEventListener("click",()=>{
            quantity++
          })
         sub.addEventListener("click", function() {
    if (quantity > 1) {
        quantity--; // only subtract if above 1
        console.log("sub: " + quantity);
    } else {
        console.log("Quantity cannot go below 1");
    }
});

              
         addBtn.addEventListener("click",function(){
            addToCart(product,quantity)
         })
    }else{
        alert("there are no data")
    }
   
}
showProdouct()



function addToCart(product, quantity) {
    // 1. Get existing cart data or start with empty array
    let oldData = JSON.parse(localStorage.getItem("cart")) || [];

    // 2. Check if product already exists in cart by ID
    let existingItem = oldData.find(item => item.id === product.id);

    if (existingItem) {
        // 3. If found, just increase its quantity
        existingItem.quantity += quantity;
    } else {
        // 4. If not found, add as new product
        oldData.push({ ...product, quantity: quantity });
    }

    // 5. Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(oldData));

    // 6. Log for debugging
    console.log(`Added ${quantity} x ${product.title} to cart`);
}
