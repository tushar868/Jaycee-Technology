document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("main-navbar");
    const offset = navbar.offsetTop; 

    window.addEventListener("scroll", function () {
        if (window.scrollY > offset) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});



/**
   * Back to top button
   */
let backtotop = document.querySelector('.back-to-top');

if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };

  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);

  backtotop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


/**
   * Preloader
   */
let preloader = document.querySelector('#preloader');

if (preloader) {
  window.addEventListener('load', () => {
    preloader.style.display = 'none';
  });
}



/**
   * Animation on scroll
   */
window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });


  