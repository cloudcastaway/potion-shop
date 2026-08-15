import {menuArray} from './data.js'

const itemsMenu = document.getElementById('items-menu')
const cart = document.getElementById('cart')
const modalOverlay = document.querySelector('.modal-overlay')
const coinIcon = '<img src="./assets/icons/coin-icon.png" class="coin-icon">'
const closeModalBtn = document.querySelector('.close-modal-btn')
let cartArray = []


const renderedMenu = menuArray.map(({name, ingredients, price, icon, id}) => {
    return `<div class="menu-item">
                <img class="potion-icon" src="${icon}">
                <div class="item-info">
                    <h2>${name}</h2>
                    <p class="ingredients">${ingredients.join(', ')}</p>
                    <p class="price">${coinIcon}${price}</p>
                </div>
                <img class="add-button" src="./assets/buttons/add-button.png" data-id="${id}">
            </div>`
}).join('')


const calculateTotal = (array) => {
    return array.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity * currentItem.price)
    }, 0)
}


const renderCart = () => {
    const renderedCart = cartArray.map(({name, price, id, quantity}) => {
    return `<div class="cartItem">
                <div class="item-info">
                    <h2>${name}</h2>
                    <p class="price">${coinIcon}${price}</p>
                </div>
                <div class="quantity-container">
                    <img class="trash-button" src="./assets/buttons/trash-button.png" data-id="${id}">
                    <img class="minus-button" src="./assets/buttons/minus-button.png" data-id="${id}">
                    <p class="item-quantity">Quantity: ${quantity}</p>
                </div>
            </div>`
    }).join('')

    const totalPrice = calculateTotal(cartArray)
    cart.innerHTML = `<h1>Cart</h1>${renderedCart}`

    if (cartArray.length > 0) {
        cart.innerHTML += `<div class="price-container">
                                <h2>Total</h2>
                                <p>${coinIcon}${totalPrice}</p>
                            </div>
                            <button class="complete-order-btn">Complete order</button>`
    }
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

    if (event.target.classList.contains('complete-order-btn')) {
        modalOverlay.classList.add('visible')
        cart.querySelector('.complete-order-btn').disabled = true
    }
})


modalOverlay.addEventListener('click', (event) => {
    if (event.target == modalOverlay) {
        modalOverlay.classList.remove('visible')
        cart.querySelector('.complete-order-btn').disabled = false
    }
})


closeModalBtn.addEventListener('click', (event) => {
    modalOverlay.classList.remove('visible')
    cart.querySelector('.complete-order-btn').disabled = false
})


itemsMenu.innerHTML = renderedMenu