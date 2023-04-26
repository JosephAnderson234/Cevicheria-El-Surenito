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

const header = document.querySelector("header");
const position = 0;

/* window.addEventListener("scroll", ()=>{
    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition)
    if (scrollPosition == position){
        header.classList.add("opacity");
    }
    else{
        header.classList.remove("opacity");
    }
}) */