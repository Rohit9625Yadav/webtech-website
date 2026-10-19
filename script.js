
const header = document.querySelector('header');
const logoImage = document.querySelector('.logo img');

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
   
        header.classList.add('sticky');
        logoImage.src = 'img/logo-2.png'; 
    } else {
  
        header.classList.remove('sticky');
        logoImage.src = 'img/logo.png'; 
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = [

        document.querySelector('.progress-labels'),
        document.querySelector('.progress-bar-fill'),
    ];

 
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        if (el) observer.observe(el);
    });
});






const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.add('active');
    });
}

if (closeMenu && navMenu) {
    closeMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.remove('active');
    });
}