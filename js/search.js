document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm))
    displayProducts(filteredProducts)
})
