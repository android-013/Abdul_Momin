const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-right');

function toggleMenu() {
    navMenu?.classList.toggle('active');
    menuButton?.classList.toggle('active');
}

menuButton?.addEventListener('click', toggleMenu);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .section-card, .job, .project-card, .publication-card, .skill-pill, table, .profile-card, .hero-card, .social-links a').forEach((element) => {
    revealObserver.observe(element);
});

window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 24);
});
