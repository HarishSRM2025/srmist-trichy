 // Scroll Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const offcanvasMenu = document.getElementById("offcanvasMenu");
    const overlay = document.getElementById("overlay");
    const mobileMenu = document.getElementById("off-menu")

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        offcanvasMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        offcanvasMenu.classList.remove("active");
        overlay.classList.remove("active");
        mobileMenu.sty
    });

    // Close menu on link click (mobile UX)
    offcanvasMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            offcanvasMenu.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
});




// Form Submit
        document.querySelector('.contact-form form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        });

        // Stats Counter Animation
        const statsSection = document.querySelector('.stats');
        let statsAnimated = false;

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    animateStats();
                }
            });
        });

        statsObserver.observe(statsSection);

        function animateStats() {
            const statItems = document.querySelectorAll('.stat-item h3');
            statItems.forEach(stat => {
                const target = parseInt(stat.textContent);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = stat.textContent.includes('+') ? target + '+' : 
                                          stat.textContent.includes('%') ? target + '%' : target;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : 
                                                                  stat.textContent.includes('%') ? '%' : '');
                    }
                }, 16);
            });
        }