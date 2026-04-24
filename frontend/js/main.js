document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            const navLinksContainer = document.querySelector('.nav-links');
            const hamburger = document.getElementById('hamburger');
            navLinksContainer.classList.remove('active');
            hamburger.classList.remove('toggle');

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    const bookingForm = document.querySelector('.booking-card form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Twoja rezerwacja na ceremonię została wysłana. Do zobaczenia we Florze!');
            bookingForm.reset();
        });
    }

    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('.nav-bar');
        if (window.scrollY > 100) {
            navBar.style.padding = '0.5rem 0';
            navBar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navBar.style.padding = '1rem 0';
            navBar.style.boxShadow = 'none';
        }
    });
});
