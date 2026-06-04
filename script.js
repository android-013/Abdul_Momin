const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-right');

function toggleMenu() {
    const isOpen = navMenu?.classList.toggle('active') ?? false;
    menuButton?.classList.toggle('active', isOpen);
    menuButton?.setAttribute('aria-expanded', String(isOpen));
}

menuButton?.addEventListener('click', toggleMenu);

const revealTargets = document.querySelectorAll('.reveal, .section-card, .job, .project-card, .publication-card, .skill-pill, table, .profile-card, .contact-card, .info-card, .hero-card, .social-links a');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealTargets.forEach((element) => {
        element.classList.add('is-visible');
    });
}

window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 24);
});
