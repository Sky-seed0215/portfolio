import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'

window.addEventListener('load', function(){

    const typed = new Typed(".multiple-text", {
        strings: ["Discord Bot developer", "Backend Developer", "Frontend Developer"],
        typeSpeed: 80,
        backSpeed: 85,
        backDelay: 1500,
        loop: true,
    })

    const ptyped = new Typed(".normal-text", {
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore."],
        typeSpeed: 10,
        cursorChar: '',
        loop:false,
    })

    const aptyped = new Typed(".about-text", {
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "],
        typeSpeed: 1,
        cursorChar: '',
        loop:false,
    })

    const fstyped = new Typed(".services-text-1", {
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "],
        typeSpeed: 1,
        cursorChar: '',
        loop:false,
    })

    const sstyped = new Typed(".services-text-2", {
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "],
        typeSpeed: 1,
        cursorChar: '',
        loop:false,
    })

    const tstyped = new Typed(".services-text-3", {
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "],
        typeSpeed: 1,
        cursorChar: '',
        loop:false,
    })

    // sticky navbar
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2000,
        delay: 180
    });
    
    ScrollReveal().reveal('.home-content, .about-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
})
