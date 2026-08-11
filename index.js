import {menuArray} from './data.js'

const itemsMenu = document.getElementById('items-menu')
const cart = document.getElementById('cart')
let cartArray = []


const renderedMenu = menuArray.map(({name, ingredients, price, icon, id}) => {
    return `<div class="menu-item">
                <img src="${icon}">
                <div class="item-info">
                    <h2>${name}</h2>
                    <p class="ingredients">${ingredients.join(', ')}</p>
                    <p class="price">$${price}</p>
                </div>
                <img class="add-button" src="./assets/buttons/add-button.png" data-id="${id}">
            </div>`
}).join('')

const renderCart = () => {
    const renderedCart = cartArray.map(({name, price, id, quantity}) => {
    return `<div class="cartItem">
                <div class="item-info">
                    <h2>${name}</h2>
                    <p class="price">$${price}</p>
                </div>
                <div class="quantity-container">
                    <img class="trash-button" src="./assets/buttons/trash-button.png" data-id="${id}">
                    <img class="minus-button" src="./assets/buttons/minus-button.png" data-id="${id}">
                    <p class="item-quantity">Quantity: ${quantity}</p>
                </div>
            </div>`
    }).join('')

    cart.innerHTML = `<h1>Cart</h1>${renderedCart}`
}


const removeFromCart = (id, array) => {
    return array.filter((item) => item.id !== id)
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


cart.addEventListener('click', (event) => {
    const clickedId = Number(event.target.dataset.id)
    if (event.target.classList.contains('minus-button')) {
        const potionClicked = cartArray.find((item) => item.id === clickedId)
        if (potionClicked.quantity === 1) {
            cartArray = removeFromCart(clickedId, cartArray)
        } else {
            potionClicked.quantity -= 1
        }

        renderCart()
    }

    if (event.target.classList.contains('trash-button')) {
        cartArray = removeFromCart(clickedId, cartArray)

        renderCart()
    }
})


cart.addEventListener('click', (event) => {
    if (event.target.classList.contains('trash-button')) {
        const clickedId = Number(event.target.dataset.id)

    }
})


itemsMenu.innerHTML = renderedMenu