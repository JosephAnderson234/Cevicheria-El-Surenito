

const header = document.querySelector("header");
const position = 0;

function clearHeader() {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition == position){
        header.classList.add("opacity");
    }
    else{
        header.classList.remove("opacity");
    }
}

window.addEventListener("scroll", clearHeader)
setTimeout(clearHeader, 0)

const buttonGalleryB = document.getElementsByClassName("before");
const buttonGalleryA = document.getElementsByClassName("after");

buttonGalleryB[0].addEventListener("click", ()=>{
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-screen.width, 0);
})

buttonGalleryA[0].addEventListener("click", ()=>{
    var left = document.querySelector(".scroll-images");
    left.scrollBy(screen.width, 0);
})

function left (){
    var left = document.querySelector(".scroll-images");
    left.scrollBy(screen.width, 0)
}
function right (){
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-screen.width, 0)
}

/* function animationHeader(){
    for(let j = 0; j < 100; j++) {
        for (let i = 0; i <= 2; i++) {
            setTimeout(right, 5000)
        }
        for (let i = 0; i <= 2; i++) {
            setTimeout(right, 5000)
        }
    }
    
    
}

window.addEventListener("load", animationHeader) */