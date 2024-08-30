
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Navigation
const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = e.target.getAttribute('data-page');
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(targetPage).classList.remove('hidden');

        // Scroll to top of the page
        window.scrollTo(0, 0);

        // Animate content
        gsap.from(`#${targetPage} .section-content`, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Loading screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    gsap.to(loading, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            loading.style.display = 'none';
        }
    });
});

// Typewriter effect
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 50);
    } else {
        // Show the CTA button after typewriter effect is complete
        document.getElementById('cta-container').style.display = 'block';
    }
}

const terminalContent = document.getElementById('terminal-content');
terminalContent.innerHTML = '';
const textToType = `> Initializing Micro-Doppler Target Classification System...\n> Loading Tiny VGG architecture...\n> Calibrating PyTorch models...\n> System ready for Smart India Hackathon.\n> Welcome, Operator. Access granted.`;
typeWriter(terminalContent, textToType);

// Animate features on scroll
gsap.from('.feature-item', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
    },
});

// Animate section content on scroll
gsap.utils.toArray('.section-content').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
    });
});