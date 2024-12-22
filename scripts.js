
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.animation = 'fadeIn 2s ease-in-out';
        }
    });
});

document.querySelectorAll('.animated-svg').forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        svg.style.transform = 'scale(1.2)';
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.transform = 'scale(1)';
    });
});
