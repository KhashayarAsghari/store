let root = document.getElementById("root");
let PRODUCTS = [];
let CART = [];

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> PRODUCTS = json)
    .then(()=> {
        renderProducts(PRODUCTS)
    })
    .catch(console.log("products fetching failed"));

fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(json=>CART = json)
    .then(() => {
        
    })