document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MENU RESPONSIVO MOBILE ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
        });

        const navLinks = document.querySelectorAll(".nav-menu a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";
            });
        });
    }

    // --- 2. CONTADOR ANIMADO ---
    const counters = document.querySelectorAll(".counter");
    
    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
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

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add("visible");
            }
        });

        if (impactSection) {
            const sectionTop = impactSection.getBoundingClientRect().top;
            if (sectionTop < triggerBottom && !counterStarted) {
                startCounters();
                counterStarted = true; 
            }
        }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 

    // --- 4. ABAS EXPANSÍVEIS (PILARES) ---
    const cardsExpandiveis = document.querySelectorAll(".card.expandivel");

    cardsExpandiveis.forEach(card => {
        card.addEventListener("click", () => {
            const estaAtivo = card.classList.contains("aberto");
            
            // Fecha outros cards abertos (foco único)
            cardsExpandiveis.forEach(c => {
                c.classList.remove("aberto");
                c.setAttribute("aria-expanded", "false");
                const icone = c.querySelector(".icone-expandir");
                if (icone) icone.textContent = "+";
            });

            // Se não estava aberto, abre o atual
            if (!estaAtivo) {
                card.classList.add("aberto");
                card.setAttribute("aria-expanded", "true");
                const icone = card.querySelector(".icone-expandir");
                if (icone) icone.textContent = "−";
            }
        });

        // Suporte a acessibilidade via teclado
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                card.click();
            }
        });
    });
});
