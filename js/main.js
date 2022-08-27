'use strict';

const btn = document.querySelector('.menu__burger');
const menu = document.querySelector('.nav__menu');

btn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active')
})