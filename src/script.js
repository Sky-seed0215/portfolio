import Typed from 'typed.js'

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
})
