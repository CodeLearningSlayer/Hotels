import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

//при переходе toggleClass к названию header'a, чтоб менять фоновую картинку


const swiper = new Swiper('.testimonials .swiper', {
    modules:[Navigation],
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const singlePlaceSlider = new Swiper('.single-place.swiper, .double-place.swiper, .twin-place.swiper', {
    modules:[Pagination],
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    pagination:{
        el: '.swiper-pagination',
    }
});

if (document.querySelector(".scroll__btn"))
{
    document.querySelector(".scroll__btn").addEventListener("click", ()=>{
        document.getElementById("scrollTo").scrollIntoView({
            behavior:"smooth",
            block:"start",
        })
    });
}

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

if (open && modal_container && close)
{
    open.addEventListener("click", ()=>{
        modal_container.classList.add("show");
    });
    
    close.addEventListener("click", ()=>{
        modal_container.classList.remove("show");
    });
}



flsFunctions.testWebP();