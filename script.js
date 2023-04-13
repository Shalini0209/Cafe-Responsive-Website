let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener("click", function(){
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
})

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener("click", function(){
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
})

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').addEventListener("click", function(){
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
})


window.addEventListener("scroll", function(){
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
})