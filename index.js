document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold as needed
    };

    const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            const sectionId = entry.target.id;
            const correspondingNavLink = document.querySelector(`[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                correspondingNavLink.classList.add('active');
            }
        });
    }

    // Additional code for handling link clicks
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-container');

    cards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            if (card.classList.contains('card-container-2')) {
                card.querySelector('.card').classList.add('jumping-down');
            } else {
                card.querySelector('.card').classList.add('jumping-up');
            }
        });

        card.addEventListener('mouseleave', function () {
            card.querySelector('.card').classList.remove('jumping-up', 'jumping-down');
        });
    });
});


