const arrowDown = document.querySelector(".mainArrowDownIconDown")
const arrowUp = document.querySelector(".mainArrowDownIconUp")
const altArrowDown = document.querySelector(".altArrowDownIconDown")
const altArrowUp = document.querySelector(".altArrowDownIconUp")
const linksList = document.querySelector(".linksList")
const altLinksList = document.querySelector(".altLinks")
const navBarIcon = document.querySelector(".navBar")
const navLinks = document.querySelector(".navLinks")
const lastButton = document.querySelector("header .studentInfo .linksList > div:last-child")
arrowDown.addEventListener("click" , () => {
    console.log(linksList)
    linksList.style.display = "none"
    arrowDown.style.display = "none"
    arrowUp.style.display = "block"
})
arrowUp.addEventListener("click" , () => {
    console.log(linksList)
    linksList.style.display = "block"
    arrowDown.style.display = "block"
    arrowUp.style.display = "none"
})
altArrowUp.addEventListener("click" , () => {
    console.log("here")
    altLinksList.style.display = "block"
    lastButton.style.marginTop = "167px"
    altArrowDown.style.display = "block"
    altArrowUp.style.display = "none"
})
altArrowDown.addEventListener("click" , () => {
    altLinksList.style.display = "none"
    lastButton.style.marginTop = "0"
    altArrowDown.style.display = "none"
    altArrowUp.style.display = "block"
})
navBarIcon.addEventListener("click" , () => {
    navLinks.classList.toggle("active")
    // lastButton.style.marginTop = "0"
    // altArrowDown.style.display = "none"
    // altArrowUp.style.display = "block"
})