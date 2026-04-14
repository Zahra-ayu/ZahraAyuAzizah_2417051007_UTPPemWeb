document.addEventListener('DOMContentLoaded', () => {
    
    // Navigasi
    const navLinks = document.querySelectorAll('.menu a');
    const currentPath = window.location.pathname.split("/").pop() || "home.html";

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Efek di button
    const magnets = document.querySelectorAll('.pill');
    magnets.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // Form Handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const sendBtn = document.querySelector('.send-btn');
            const notif = document.getElementById('notif');

            sendBtn.innerText = 'SENT!';
            sendBtn.style.opacity = '0.6';
            sendBtn.style.pointerEvents = 'none';

            notif.classList.add('show');

            setTimeout(() => {
                notif.classList.remove('show');
                sendBtn.innerText = 'SEND MESSAGE';
                sendBtn.style.opacity = '1';
                sendBtn.style.pointerEvents = 'auto';
            }, 3000);
        });
    }

    // Progress Bar
    const bars = document.querySelectorAll('.progress-line span');

    bars.forEach(bar => {
        const val = bar.getAttribute('data-width');
        const num = parseInt(val);

        setTimeout(() => {
            bar.style.transform = `scaleX(${num / 100})`;
        }, 300);
    });

});