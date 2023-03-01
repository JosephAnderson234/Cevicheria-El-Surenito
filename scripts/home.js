const button = document.querySelector(".button-show-container")
const nav = document.querySelector("nav")
button.addEventListener("click", ()=>{
    nav.classList.toggle("show")
})