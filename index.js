const menuHamburger=document.querySelector('.menu-hamburger');
const navLinks=document.querySelector('.nav-links');
menuHamburger.onclick=() =>{ 
    navLinks.classList.toggle('mobile-menu');
};


const typingText = document.querySelector('.color');
const text = 'Marie Solange Diouf';
let i = 0;

function type() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 130); // Ajustez l'intervalle en millisecondes
  }
}
type();






const sr=ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})


sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.image img',{delay:400})
sr.reveal('.reseau_icon',{interval:200})

sr.reveal('.section_title',{})
sr.reveal('.about_imag',{delay:400})
sr.reveal('.about_text',{delay:400})

sr.reveal('.section_title',{})
sr.reveal('.langage',{interval:200})

sr.reveal('.work_title',{})


sr.reveal('.contact_title',{})
sr.reveal('.contact_input',{interval:200})


