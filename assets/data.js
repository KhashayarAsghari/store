let root = document.getElementById("root");
let cartCounter = document.getElementById("cart-counter");
let cartListRoot = document.getElementById("cart-list-container");
let cartBtn = document.getElementById("cart-button")
let PRODUCTS = [];
let CART = [];

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> PRODUCTS = json)
    .then(()=> {
        renderProducts(PRODUCTS)
    })
    .then(
        fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then(json=>json[0].products.map(item => {
            return PRODUCTS.find(pItem => pItem.id == item.productId)
        }))
        .then(list => {
            cartCounter.textContent = list.length;
            renderCartList(list);

    }))
    .catch(console.log("products fetching failed"));



