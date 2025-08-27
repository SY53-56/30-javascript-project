function showData() {
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

showData();
