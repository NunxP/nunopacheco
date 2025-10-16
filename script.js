
modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        modeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        modeToggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth scroll para as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Menu mobile
document.getElementById('click').addEventListener('change', function() {
    const nav = document.querySelector('nav');
    if (this.checked) {
        nav.style.left = '0%';
    } else {
        nav.style.left = '-100%';
    }
});