// Mobile menu
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );
});

// Close menu when clicking a link
mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );
    });
});

// Scroll reveal animation
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

document.querySelectorAll('.reveal').forEach((element) => {
    revealObserver.observe(element);
});

// Timeline filter
const filterButtons = document.querySelectorAll('.filter-btn');
const timelineItems = document.querySelectorAll('.timeline-item');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {

        filterButtons.forEach((item) => {
            item.classList.remove('active');
        });

        button.classList.add('active');

        const filter = button.dataset.filter;

        timelineItems.forEach((item) => {
            item.classList.toggle(
                'hidden',
                filter !== 'all' &&
                item.dataset.category !== filter
            );
        });

    });
});

// Automatic current year
document.querySelector('#year').textContent =
    new Date().getFullYear();