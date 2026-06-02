document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MENU RESPONSIVO MOBILE ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        // Alterna o ícone entre o "hambúrguer" e o "X" de fechar
        menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
    });

    // Fecha o menu ao clicar em qualquer link (melhor experiência do usuário)
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });


    // --- 2. CONTADOR ANIMADO ---
    const counters = document.querySelectorAll(".counter");
    
    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                
                // Velocidade da animação (ajuste o divisor se quiser mais rápido/lento)
                const speed = target / 100; 

                if (count < target) {
                    counter.innerText = Math.ceil(count + speed);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };


    // --- 3. EFEITO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL) ---
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const impactSection = document.querySelector("#impacto");
    let counterStarted = false;

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        // Verifica elementos para revelar na tela
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("visible");
            }
        });

        // Verifica se a seção de impacto apareceu para iniciar os números
        if (impactSection) {
            const sectionTop = impactSection.getBoundingClientRect().top;
            if (sectionTop < triggerBottom && !counterStarted) {
                startCounters();
                counterStarted = true; // Garante que roda apenas uma vez
            }
        }
    };

    // Executa uma vez ao carregar a página e depois sempre que houver scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});
