const burger = document.querySelector(".hamburger");

const iconburger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const blur = document.querySelector(".wrapper");

burger.addEventListener('click', function(){
    iconburger.classList.toggle('show');
    iconX.classList.toggle('show');
    column.classList.toggle('show');
blur.classList.toggle('blur');
})

// active menu button
// const red = document.querySelector('aside nav a');
// red.addEventListener('click', function(){
// red.classList.toggle('red');
// }
// )