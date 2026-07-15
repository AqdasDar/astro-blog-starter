document.addEventListener('astro:page-load', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    });

    const targets = document.querySelectorAll('.fade-in-on-scroll');
    targets.forEach((target) => {
        observer.observe(target);
    });
});
