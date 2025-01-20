document.getElementById("checkoutButton").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Añade algunos productos antes de proceder al pago.")
        return
    }

    const checkoutForm = `
        <form class="payment-form" id="paymentForm">
            <input type="email" id="email" placeholder="Email" required>
            <input type="text" id="cardNumber" placeholder="Número de Tarjeta" required>
            <input type="text" id="cardName" placeholder="Nombre en la Tarjeta" required>
            <input type="text" id="cardExpiry" placeholder="MM/AA" required>
            <input type="text" id="cardCVC" placeholder="CVC" required>
            <button type="submit">Pagar</button>
        </form>
    `

    document.getElementById("cartItems").innerHTML = checkoutForm
    document.getElementById("cartTotal").style.display = "none"

    document.getElementById("paymentForm").addEventListener("submit", (e) => {
        e.preventDefault()

        const email = document.getElementById("email").value
        const cardNumber = document.getElementById("cardNumber").value
        const cardName = document.getElementById("cardName").value
        const cardExpiry = document.getElementById("cardExpiry").value
        const cardCVC = document.getElementById("cardCVC").value

        if (!validateEmail(email)) {
            alert("Por favor, introduce un email válido.")
            return
        }

        if (!validateCardNumber(cardNumber)) {
            alert("Por favor, introduce un número de tarjeta válido.")
            return
        }

        if (!validateCardExpiry(cardExpiry)) {
            alert("Por favor, introduce una fecha de expiración válida (MM/AA).")
            return
        }

        if (!validateCardCVC(cardCVC)) {
            alert("Por favor, introduce un CVC válido.")
            return
        }

        // Simulación de procesamiento de pago
        alert("¡Pago procesado con éxito!")
        cart = []
        updateCart()
        document.getElementById("cartModal").classList.remove("show")
    })
})

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function validateCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber.replace(/\s/g, ""))
}

function validateCardExpiry(expiry) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)
}

function validateCardCVC(cvc) {
    return /^\d{3,4}$/.test(cvc)
}