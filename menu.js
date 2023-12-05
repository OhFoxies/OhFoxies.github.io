let menu_button = document.getElementById("more-btn")
menu_button.addEventListener("click", function () {
    dropdownMenu()
})
// menu_button.addEventListener("mouseover", function () {dropdownMenu()})
document.addEventListener("scroll", function () {
    pageScroll()

})

function pageScroll() {
    let menu = document.getElementById("menu-content");
    if (getComputedStyle(menu).display !== 'none') {
        menu.style.display = 'none'
    }

}

function dropdownMenu() {
    let menu = document.getElementById("menu-content");
    if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'flex';
        console.log("test")
    } else {
        menu.style.display = 'none';
        console.log("test2")

    }

}

function menu() {
    let menu = document.getElementById('menu')
    menu.classList.toggle("open-menu")
}