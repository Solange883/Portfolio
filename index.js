const menuHamburger=document.querySelector('.menu-hamburger');
const navLinks=document.querySelector('.nav-links');
menuHamburger.onclick=() =>{ 
    navLinks.classList.toggle('mobile-menu');
};