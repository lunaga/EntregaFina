const products = [
    { id: 1, name: "Sekiro: Shadows Die Twice PS4 Platinum Trophy", price: 73.01, image: "./img/Sekiro Shadows Die Twice PS4 Platinum Trophy.webp" },
    { id: 2, name: "God of War: Ragnarok (+DLC) PS5 Platinum Trophy Service", price: 103.44, image: "./img/God of War Ragnarok.webp" },
    { id: 3, name: "Spider-Man: Miles Morales", price: 29.99, image: "./img/spiderman.jpg" },
    { id: 4, name: "Sifu (+DLC) PS4 Platinum Trophy Service", price: 146.03, image: "./img/Sifu (+DLC) PS4 Platinum Trophy Service.webp" },
    { id: 5, name: "Tomb Raider", price: 39.99, image: "./img/tomb.jpg" },
    { id: 6, name: "BloodBorne PS4 (+DLC) Platinum Trophy Service", price: 66.93, image: "./img/BloodBorne PS4 (+DLC) Platinum Trophy Service.webp" },
    { id: 7, name: "Dark Souls 3", price: 49.99, image: "./img/ds3.jpg" },
    { id: 8, name: "Assassins Creed", price: 39.99, image: "./img/assassins.jpg" },
    { id: 9, name: "Elden Ring PS4 Platinum Trophy Service", price: 73.01, image: "./img/Elden Ring PS4 Platinum Trophy Service.webp" },
    { id: 10, name: "God of war: Ascension PS3 Platinum Trophy Service", price: 36.51, image: "./img/god 3.webp" },
    { id: 11, name: "Atelier Ryza 3 PS4 Platinum Trophy Service", price: 91.27, image: "./img/Atelier Ryza 3 PS4 Platinum Trophy Service.webp" },
    { id: 12, name: "Hollow knight (EU/NA) PS4 Platinum Trophy Service", price: 73.01, image: "./img/Hollow knight.webp" },
    { id: 13, name: "Megadimension Neptunia VIIR PS4 Platinum Trophy Service", price: 85.18, image: "./img/Megadimension Neptunia VIIR PS4 Platinum Trophy Service.webp" },
    { id: 14, name: "Resident Evil Village PS5 (+DLC) Platinum Trophy Service", price: 97.35, image: "./img/Resident Evil Village PS5 (+DLC) Platinum Trophy Service.webp" },
    { id: 15, name: "Dark Souls II PS3 Platinum Trophy Service", price: 73.01, image: "./img/Dark Souls II PS3 Platinum Trophy Service.webp" },
    { id: 16, name: "Resident Evil Village PS4 (+DLC) Platinum Trophy Service", price: 97.35, image: "./img/Resident Evil Village PS4 (+DLC) Platinum Trophy Service.webp" },
    { id: 17, name: "Kakarot PS4 Platinum Trophy Service", price: 46.55, image: "./img/Kakarot PS4 Platinum Trophy Service.webp" },
    { id: 18, name: "Dark souls Remastered PS4 Platinum Trophy Service", price: 51.72, image: "./img/Dark souls Remastered PS4 Platinum Trophy Service.webp" },
    { id: 19, name: "Devil May Cry 3 HD PS4 Platinum Trophy Service", price: 91.27, image: "./img/Devil May Cry 3 HD PS4 Platinum Trophy Service.webp" },
    { id: 20, name: "Crash Bandicoot N’Sane Trilogy PS4 Platinum Trophy Service", price: 182.54, image: "./img/Crash Bandicoot N’Sane Trilogy PS4 Platinum Trophy Service.webp" },
    { id: 21, name: "InFamous: First Light PS4 Platinum Trophy Service", price: 36.51, image: "./img/InFamous First Light PS4 Platinum Trophy Service.webp" },
    { id: 22, name: "Devil May Cry 5 PS5 Platinum Trophy Service", price: 225.13, image: "./img/Devil May Cry 5 PS5 Platinum Trophy Service.webp" },
    { id: 23, name: "Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service", price: 146.03, image: "./img/Batman Arkham Knight (+DLC) PS4 Platinum Trophy Service.webp" },
    { id: 24, name: "Tomb Raider: Legend PS5 Platinum Trophy Service", price: 36.51, image: "./img/Tomb Raider Legend PS5 Platinum Trophy Service.webp"},
    { id: 25, name: "Detroit: Become Human PS4 Platinum Trophy Service", price: 54.76, image: "./img/Detroit Become Human PS4 Platinum Trophy Service.webp" },
    { id: 26, name: "Devil May Cry 1 HD PS3 Platinum Trophy Service", price: 85.18, image: "./img/Devil May Cry 1 HD PS3 Platinum Trophy Service.webp" },
    { id: 27, name: "LEGO Star Wars III: The Clone Wars PS3 Platinum Trophy Service", price: 60.85, image: "./img/LEGO Star Wars III The Clone Wars PS3 Platinum Trophy Service.webp" },
    { id: 28, name: "Alice: Madness Returns PS3 (+DLC) Platinum Trophy Service", price: 54.76, image: "./img/Alice Madness Returns PS3 (+DLC) Platinum Trophy Service.webp" },
    { id: 29, name: "Dark souls II: Scholar Of The First Sin PS4 Platinum Trophy", price: 73.01, image: "./img/Dark souls II Scholar Of The First Sin PS4 Platinum Trophy.webp" },
    { id: 30, name: "Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service", price: 164.28, image: "./img/Final Fantasy VII Remake (+DLC) PS5 Platinum Trophy Service.webp" },
];

function displayProducts(productsToShow = products) {
    const gameGrid = document.getElementById("gameGrid")
    gameGrid.innerHTML = ""
    productsToShow.forEach((product) => {
        const productElement = document.createElement("div")
        productElement.classList.add("game-card")
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `
        gameGrid.appendChild(productElement)
    })
}

displayProducts()