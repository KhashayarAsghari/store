function renderProducts(list) {
    let template = list.map(item => {
        return `
        <div class="card">
            <img src="${item.image}" alt="" class="card__image">
            <div class="card__desc">
                <h2 class="card__desc__title">${item.title}</h2>
                <h2 class="card__desc__price">${item.price} $</h2>
            </div>
        </div>
        `
    }).join("")

    root.innerHTML = template
}


function renderCartList(list) {
    let template = list.map(item => {
        return `
        <div class="cart__item">
            <img src="${item.image}" alt="" class="cart__item__image">
            <div class="cart__item__desc">
                <h2 class="cart__item__desc__title">${item.title}</h2>
                <span class="cart__item__desc__price">${item.price} $</span>
            </div>
        </div>
        `
    }).join("")

    cartListRoot.innerHTML = template
}

cartBtn.addEventListener("click", ()=> cartListRoot.classList.toggle("hidden"))