// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}

// scrolls sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  // sticky navbar 
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100)


  // remove navbar when click navbar link(scroll)
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');

};

const menuMedia = document.getElementById('menuMedia');
const aboutSection = document.getElementById('about');
const arrowUp = window.document.getElementById('arrowUp');

window.addEventListener('scroll', function () {
  
  if (window.scrollY > aboutSection.offsetHeight) {
    arrowUp.classList.remove('invisible');
    menuMedia.classList.remove('invisible');
  } else {
    arrowUp.classList.add('invisible');
    menuMedia.classList.add('invisible');
  }

});


// grayscale 1 to 0, scale 1 to 1.05 when mouseover ;
// all settings return to default after mouseout;
/*
const servicesBoxes = document.querySelectorAll('.services-box');

servicesBoxes.forEach(servicesBox => {
  const icons = servicesBox.querySelectorAll('.icons');
  
  servicesBox.addEventListener('mouseover', () => {
    icons.forEach(icon => {
      icon.style.filter = 'grayscale(0)';
      icon.style.transition = '1s';
      icon.style.scale = '1.05';
    });
  });
  
  servicesBox.addEventListener('mouseout', () => {
    icons.forEach(icon => {
      icon.style.filter = 'grayscale(1)';
      icon.style.transition = '1s';
      icon.style.scale = '1';
    });
  });
});

*/

// check screenWidth, case 1280px, ajust fontsyze of element

const screenWidth = window.innerWidth;

if (screenWidth === 1280) {
  const servicesBoxPs = document.querySelectorAll('.services-box p');
  servicesBoxPs.forEach(element => {
    console.log('entrou')
    element.style.fontSize = '1.8rem';
  });
}



// scroll reveal

ScrollReveal({
  reset: false, // reset de animation always the section is visited again;
  distance: '80px',
  duration: 2000,
  delay: 200,
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-video', { origin: '-left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: '-right' });


// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer!', 'Father of three beloved children!', 'Happily married to Martha.'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
})


const typed2 = new Typed('.multiple-text2', {
  strings: ['Languages!', 'Knowledges!', 'Techniques!'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
})