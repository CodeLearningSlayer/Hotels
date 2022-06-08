import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation } from 'swiper';



const swiper = new Swiper('.swiper', {
    modules:[Navigation],
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});






flsFunctions.testWebP();