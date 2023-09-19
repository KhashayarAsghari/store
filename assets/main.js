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
    window.pushState('all products', "?allProducts")
}