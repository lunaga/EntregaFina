document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons()

    const menuToggle = document.getElementById("menuToggle")
    const mainNav = document.getElementById("mainNav")

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show")
    })
})

