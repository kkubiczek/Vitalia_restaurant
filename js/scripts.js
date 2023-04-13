'use strict';

const hamburger = document.querySelector('.site-header__icon');

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