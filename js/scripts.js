'use strict';

const hamburger = document.querySelector('.site-header__icon');

const hamburgerBlack = document.querySelector('.nav-stick-icon');

const close = document.querySelector('.menu .material-icons');

const nav = document.querySelector('.menu');

const div = document.querySelector('.site'); 

hamburger.addEventListener('click', ()=>{

    nav.classList.add('menu-show');
    div.classList.add('site-overlay');

} )

close.addEventListener('click', ()=> {

    nav.classList.remove('menu-show');
    div.classList.remove('site-overlay');

})

hamburgerBlack.addEventListener('click', ()=>{

    nav.classList.add('menu-show');
    div.classList.add('site-overlay');

} )

close.addEventListener('click', ()=> {

    nav.classList.remove('menu-show');
    div.classList.remove('site-overlay');

})

const stickyNav = document.querySelector('.nav-stick');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        stickyNav.classList.add('nav-stick-display');
    }else {
        stickyNav.classList.remove('nav-stick-display');
    }
};