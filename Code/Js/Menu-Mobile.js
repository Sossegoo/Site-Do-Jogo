let show = true

const menu = Section = document.querySelector(".Menu")
const menuMobile = menu.querySelector(".menu-mobile")

menuMobile.addEventListener("click", () =>{
    menu.classList.toggle("On",show)
    show = !show
})
