let root = document.getElementById("root");
const PRODUCTS = [];
debugger;
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> PRODUCTS.push(json))
            .then(template = PRODUCTS.map(item => {
                return `
                <div class="card">
                    <img src="${item.image}" alt="" class="card__image">
                    <div class="card__desc">
                        <h2 class="card__desc__title">${item.title}</h2>
                        <h2 class="card__desc__price">${item.price}</h2>
                        
                    </div>
                </div>
                `
            }).join("")
            
            )
            
            .catch(console.log("fetching failed"));