import {menuArray} from './data.js'

const itemsMenu = document.getElementById('items-menu')
const cart = document.getElementById('cart')
const cartArray = []


const renderedMenu = menuArray.map(({name, ingredients, price, icon, id}) => {
    return `<div class="menu-item">
                <img src="${icon}">
                <div class="item-info">
                    <h1>${name}</h1>
                    <p class="ingredients">${ingredients.join(', ')}</p>
                    <p class="price">$${price}</p>
                </div>
                <img class="add-button" src="./assets/add-button.png" data-id="${id}">
            </div>`
}).join('')

const renderCart = () => {
    const renderedCart = cartArray.map(({name, price, id, quantity}) => {
    return `<div class="cartItem">
                <div class="item-info">
                    <h1>${name}</h1>
                    <p class="price">$${price}</p>
                </div>
                <p class="quantity">Quantity: ${quantity}</p>
            </div>`
    }).join('')

    cart.innerHTML = renderedCart
}


itemsMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-button')) {
        const clickedId = Number(event.target.dataset.id)
        const potionClicked = menuArray.find((item) => item.id === clickedId)
        const alreadyInCart = cartArray.some((item) => item.id === clickedId)
        
        if (alreadyInCart) {
            const existingItem = cartArray.find((item) => item.id === clickedId)
            existingItem.quantity += 1
        } else {
            const newItem = {...potionClicked, quantity: 1}
            cartArray.push(newItem)
        }
        
        renderCart()
    }
})


itemsMenu.innerHTML = renderedMenu