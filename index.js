// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});
