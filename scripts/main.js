const button = document.querySelector(".button-show-container");
const nav = document.querySelector("nav");
button.addEventListener("click", ()=>{
    nav.classList.toggle("show");
})


const siButton = document.querySelector(".SI");
const socialBar = document.querySelector(".social-links-ul");

siButton.addEventListener("click", ()=>{
    siButton.classList.toggle("show");
    socialBar.classList.toggle("moved");
})