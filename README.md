# Concurso-agrinho<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agro Forte, Futuro Sustentável</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container nav-container">
            <div class="logo">Agro<span>Sustentável</span></div>
            <nav>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#pilares">Pilares</a></li>
                    <li><a href="#tecnologia">Tecnologia</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="inicio" class="hero">
        <div class="container hero-content">
            <h1>Agro Forte, Futuro Sustentável</h1>
            <p>O equilíbrio perfeito entre a alta produtividade no campo e a preservação do meio ambiente.</p>
            <a href="#pilares" class="btn-principal">Conheça Nossas Práticas</a>
        </div>
    </section>

    <section id="pilares" class="section-padding">
        <div class="container">
            <h2 class="section-title">O Equilíbrio em Prática</h2>
            <div class="grid-3">
                <div class="card">
                    <h3>Produção Eficiente</h3>
                    <p>Uso de técnicas avançadas para maximizar a colheita por hectare, reduzindo a necessidade de expansão territorial e protegendo biomas nativos.</p>
                </div>
                <div class="card">
                    <h3>Preservação Ativa</h3>
                    <p>Implementação de manejo de solo, rotação de culturas e recuperação de áreas degradadas para manter a terra fértil por gerações.</p>
                </div>
                <div class="card">
                    <h3>Gestão de Recursos</h3>
                    <p>Sistemas inteligentes de irrigação e captação de água da chuva que evitam o desperdício e protegem nossos recursos hídricos.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="tecnologia" class="bg-light section-padding">
        <div class="container split-section">
            <div class="split-text">
                <h2>Tecnologia a Serviço da Natureza</h2>
                <p>O futuro do agro é digital. Através de sensores de solo, monitoramento por drones e inteligência artificial, conseguimos aplicar insumos na quantidade exata, reduzindo impactos ambientais e aumentando a segurança alimentar.</p>
                <blockquote>"Inovação não é apenas produzir mais, é produzir melhor."</blockquote>
            </div>
            <div class="split-image">
                <div class="image-box">Inovação no Campo</div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container footer-content">
            <p>&copy; 2026 AgroSustentável. Cultivando o amanhã, hoje.</p>
        </div>
    </footer>

</body>
</html>/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    color: #333;
    line-height: 1.6;
    background-color: #fcfcfc;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.section-padding {
    padding: 80px 0;
}

.bg-light {
    background-color: #f4f7f4;
}

/* Cabeçalho */
header {
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #2e7d32;
}

.logo span {
    color: #81c784;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #4e5d4e;
    font-weight: 500;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #2e7d32;
}

/* Banner Principal (Hero) */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;
    height: 70vh;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-align: center;
}

.hero-content {
    max-width: 800px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
}

.btn-principal {
    display: inline-block;
    background-color: #2e7d32;
    color: #fff;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
}

.btn-principal:hover {
    background-color: #1b5e20;
}

/* Seção de Blocos (Grid) */
.section-title {
    text-align: center;
    font-size: 32px;
    color: #2e7d32;
    margin-bottom: 50px;
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.card {
    background: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-top: 5px solid #2e7d32;
}

.card h3 {
    margin-bottom: 15px;
    color: #1b5e20;
}

/* Seção Dividida (Texto e Imagem) */
.split-section {
    display: flex;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
}

.split-text {
    flex: 1;
    min-width: 300px;
}

.split-text h2 {
    color: #2e7d32;
    font-size: 32px;
    margin-bottom: 20px;
}

.split-text p {
    margin-bottom: 20px;
    color: #555;
}

blockquote {
    font-style: italic;
    border-left: 4px solid #81c784;
    padding-left: 15px;
    color: #2e7d32;
    font-weight: 500;
}

.split-image {
    flex: 1;
    min-width: 300px;
}

.image-box {
    background: #c8e6c9;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #2e7d32;
    font-weight: bold;
    font-size: 20px;
    border: 2px dashed #81c784;
}

/* Rodapé */
footer {
    background-color: #1b5e20;
    color: #ffffff;
    text-align: center;
    padding: 30px 0;
    font-size: 14px;
}

/* Responsividade */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 15px;
    }
    nav ul li {
        margin: 0 10px;
    }
    .hero h1 {
        font-size: 32px;
    }
    .hero p {
        font-size: 16px;
    }
}document.addEventListener("DOMContentLoaded", () => {
    
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
