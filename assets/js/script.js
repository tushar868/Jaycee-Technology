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



