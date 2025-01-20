let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(productId) {
    const product = products.find((p) => p.id === productId)
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
        existingItem.quantity++
    } else {
        cart.push({ ...product, quantity: 1 })
    }
    updateCart()
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId)
    updateCart()
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    const cartItems = document.getElementById("cartItems")
    const totalPrice = document.getElementById("totalPrice")
    const cartCount = document.getElementById("cartCount")

    cartItems.innerHTML = ""
    let total = 0

    cart.forEach((item) => {
        const itemElement = document.createElement("div")
        itemElement.classList.add("cart-item")
        itemElement.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
            <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Eliminar</button>
        `
        cartItems.appendChild(itemElement)
        total += item.price * item.quantity
    })

    totalPrice.textContent = total.toFixed(2)
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0)
}

document.getElementById("cartToggle").addEventListener("click", () => {
    document.getElementById("cartModal").classList.toggle("show")
})

document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartModal").classList.remove("show")
})

updateCart()
