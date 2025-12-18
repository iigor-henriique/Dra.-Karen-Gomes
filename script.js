document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LÓGICA DO MENU MOBILE ---
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const iconImage = menuIcon ? menuIcon.querySelector('i') : null;

    if (menuIcon && navLinks) {
        // Abrir/Fechar menu ao clicar no ícone
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Alterna ícone entre barras e X
            if (navLinks.classList.contains('active')) {
                iconImage.classList.remove('fa-bars');
                iconImage.classList.add('fa-times');
            } else {
                iconImage.classList.remove('fa-times');
                iconImage.classList.add('fa-bars');
            }
        });

        // Fechar menu automaticamente ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    iconImage.classList.remove('fa-times');
                    iconImage.classList.add('fa-bars');
                }
            });
        });
    }

    // --- 2. LÓGICA DE ANIMAÇÃO AO ROLAR (SCROLL REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal-item');

    const options = {
        threshold: 0.1, // Dispara quando 10% do item estiver visível
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe de animação correta
                if (entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('slide-up'); 
                } else if (entry.target.classList.contains('fade-in-left')) {
                    entry.target.classList.add('fade-in-left');
                } else if (entry.target.classList.contains('fade-in-right')) {
                    entry.target.classList.add('fade-in-right');
                } else {
                    entry.target.classList.add('fade-in'); 
                }
                
                // Para de observar o elemento após animar
                observer.unobserve(entry.target);
            }
        });
    }, options);

    revealElements.forEach(element => {
        observer.observe(element);
    });
});