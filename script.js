tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-secondary": "#003640",
                "on-surface": "#dae2fd",
                "tertiary-fixed-dim": "#ccbeff",
                "on-tertiary-container": "#2c1f5c",
                "secondary-fixed-dim": "#4cd7f6",
                "primary-fixed": "#e9ddff",
                "surface-dim": "#0b1326",
                "on-tertiary-fixed-variant": "#4a3d7c",
                "surface-variant": "#2d3449",
                "on-secondary-fixed-variant": "#004e5c",
                "inverse-on-surface": "#283044",
                "secondary-container": "#03b5d3",
                "primary-container": "#a078ff",
                "secondary-fixed": "#acedff",
                "on-primary-fixed": "#23005c",
                "primary-fixed-dim": "#d0bcff",
                "outline-variant": "#494454",
                "on-background": "#dae2fd",
                "on-secondary-container": "#00424e",
                "inverse-surface": "#dae2fd",
                "on-surface-variant": "#cbc3d7",
                "tertiary-container": "#9587cc",
                "on-error": "#690005",
                "surface-container-low": "#131b2e",
                "surface-container-highest": "#2d3449",
                "on-primary-fixed-variant": "#5516be",
                "tertiary-fixed": "#e7deff",
                "primary": "#d0bcff",
                "error": "#ffb4ab",
                "background": "#0b1326",
                "on-secondary-fixed": "#001f26",
                "on-primary-container": "#340080",
                "surface-bright": "#31394d",
                "inverse-primary": "#6d3bd7",
                "surface-container-high": "#222a3d",
                "on-primary": "#3c0091",
                "on-error-container": "#ffdad6",
                "error-container": "#93000a",
                "surface": "#0b1326",
                "on-tertiary": "#332664",
                "outline": "#958ea0",
                "surface-container-lowest": "#060e20",
                "tertiary": "#ccbeff",
                "surface-tint": "#d0bcff",
                "secondary": "#4cd7f6",
                "surface-container": "#171f33",
                "on-tertiary-fixed": "#1e0e4e"
            },
            fontFamily: {
                "headline": ["Manrope"],
                "body": ["Inter"],
                "label": ["Inter"],
                "manrope": ["Manrope"],
                "inter": ["Inter"]
            },
            borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
        },
    },
}

document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Observer
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    reveals.forEach(reveal => observer.observe(reveal));

    // 3D Parallax Effect
    const glassElems = document.querySelectorAll(".glass-3d");
    glassElems.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 2;
            const yPercent = (y / rect.height - 0.5) * 2;
            
            // Limit the rotation angle
            const maxRotate = 8;
            const rotateX = -yPercent * maxRotate;
            const rotateY = xPercent * maxRotate;
            
            el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        el.addEventListener("mouseleave", () => {
             el.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
             el.style.transition = "transform 0.5s ease, box-shadow 0.1s ease";
        });
        
        el.addEventListener("mouseenter", () => {
             el.style.transition = "transform 0.1s ease, box-shadow 0.1s ease";
        });
    });
});
