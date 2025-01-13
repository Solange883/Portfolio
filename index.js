const menuHamburger=document.querySelector('.menu-hamburger');
const navLinks=document.querySelector('.nav-links');
menuHamburger.onclick=() =>{ 
    navLinks.classList.toggle('mobile-menu');
};









const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000?
    reset:true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})