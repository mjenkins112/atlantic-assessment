// Function to observe when sections are in view
const observeSections = () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the "visible" class when in view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    sections.forEach(section => observer.observe(section));
};
window.addEventListener('scroll', function () {
    const page2 = document.getElementById('page2');
    const page2Top = page2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When page2 comes into view, trigger the animation
    if (page2Top < windowHeight) {
        page2.classList.add('animate');
    }
});
window.addEventListener('scroll', function () {
    const page5 = document.getElementById('page5');
    const page5Top = page5.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When page2 comes into view, trigger the animation
    if (page5Top < windowHeight) {
        page5.classList.add('animate');
    }
});
window.addEventListener('scroll', function () {
    const page8 = document.getElementById('page8');
    const page8Top = page8.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When page2 comes into view, trigger the animation
    if (page8Top < windowHeight) {
        page8.classList.add('animate');
    }
});
window.addEventListener('scroll', function () {
    const page15 = document.getElementById('page15');
    const page15Top = page15.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When page2 comes into view, trigger the animation
    if (page15Top < windowHeight) {
        page15.classList.add('animate');
    }
});
window.addEventListener('scroll', function () {
    const page17 = document.getElementById('page17');
    const page17Top = page17.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When page2 comes into view, trigger the animation
    if (page17Top < windowHeight) {
        page17.classList.add('animate');
    }
});


// Initialize the observer on page load
document.addEventListener('DOMContentLoaded', observeSections);