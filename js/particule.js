document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#0077be" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0077be",
                opacity: 0.4,
                width: 1
            },
            move: { enable: true, speed: 6 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});