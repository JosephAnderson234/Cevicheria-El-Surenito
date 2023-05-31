

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
setTimeout(clearHeader, 0000)

const buttonGalleryB = document.getElementsByClassName("before");
const buttonGalleryA = document.getElementsByClassName("after");

buttonGalleryB[0].addEventListener("click", ()=>{
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-400, 0);
})

buttonGalleryA[0].addEventListener("click", ()=>{
    var left = document.querySelector(".scroll-images");
    left.scrollBy(400, 0);
})