// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// ---- i18n (ES / EN) ----
const translations = {
    es: {
        'nav.about': 'Info',
        'nav.skills': 'Stack',
        'nav.experience': 'Experiencia',
        'nav.studies': 'Estudios',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'hero.title': 'Automatización e IA',
        'hero.desc': 'Diseño agentes de IA, flujos agénticos y automatizaciones de negocio que reducen costos operativos y elevan la experiencia del cliente.',
        'hero.cta1': 'Ver Proyectos',
        'hero.cta2': 'Contáctame',
        'about.eyebrow': 'Perfil',
        'about.title': 'Información',
        'about.intro': 'AI Developer y Systems Engineer especializado en workflows impulsados por IA, flujos agénticos y automatización de procesos de negocio. Experto en optimizar operaciones, reducir costos y mejorar la experiencia del cliente mediante soluciones tecnológicas inteligentes.',
        'about.card1.title': 'Inteligencia Artificial',
        'about.card1.desc': 'Desarrollo agentes de IA conversacionales para atención al cliente, agendamiento de citas y automatización de procesos empresariales.',
        'about.card2.title': 'Automatización',
        'about.card2.desc': 'Automatizo procesos repetitivos y complejos para mejorar la eficiencia operativa y reducir costos empresariales.',
        'about.card3.title': 'Optimización',
        'about.card3.desc': 'Implemento soluciones que optimizan workflows, mejoran la experiencia del cliente y aumentan la productividad.',
        'skills.eyebrow': 'Stack',
        'skills.title': 'Habilidades Técnicas',
        'skills.card1.title': 'Automatización con IA',
        'skills.card2.title': 'Programación & Web',
        'experience.eyebrow': 'Trayectoria',
        'experience.title': 'Experiencia Laboral',
        'exp1.date': 'Junio 2025 — Mayo 2026',
        'exp1.desc': 'Diseño y desarrollo de un sistema de QA con IA para revisar posts de redes sociales, diseños de email y contenido SEO. Construcción y documentación de workflows automatizados, además de proyectos como un gestor de CVs y contratación, sistemas de respuesta automatizada contextual y un generador de posts para redes sociales.',
        'exp2.date': 'Febrero 2025 — Mayo 2025',
        'exp2.desc': 'Desarrollo de proyectos para múltiples clientes enfocados en chatbots y agentes de IA conversacionales por llamada telefónica. Implementación de soluciones de automatización integrando Twilio, ElevenLabs, Make y OpenAI para mejorar la eficiencia operativa y el servicio al cliente.',
        'exp3.date': 'Enero 2024 — Junio 2024',
        'exp3.role': 'Web Developer <span class="timeline-company">· Green Apples Nutrition</span>',
        'exp3.desc': 'Diseño e implementación de plantillas en WordPress y JavaScript, garantizando el cumplimiento de políticas de privacidad y datos. Uso de tecnologías CMS y estrategias SEO para cumplir con los requisitos funcionales y estéticos del cliente.',
        'studies.eyebrow': 'Formación',
        'studies.title': 'Estudios y Certificaciones',
        'edu1.title': 'Ingeniería en Sistemas (2020 - 2026)',
        'edu1.desc': 'Universidad Nacional Abierta y a Distancia — Santa Marta, Magdalena. Formación sólida en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
        'edu2.title': 'Desarrollo Web (2022 - 2023)',
        'edu2.desc': 'Academlo (Online). Certificaciones en desarrollo web backend y frontend, manejo e integración de APIs y bases de datos.',
        'edu3.title': 'Python, IA y Seguridad en la Industria',
        'edu3.desc': 'Certificación en aplicación de la programación e IA con Python en entornos industriales.',
        'projects.eyebrow': 'Portafolio',
        'projects.title': 'Proyectos',
        'proj1.title': 'QA AI Automation para Posts de Redes Sociales',
        'proj1.desc': 'Sistema totalmente automatizado con 9 workflows en Make que obtiene los posts de un cliente, los revisa siguiendo el brief, agrupa ideas y mensajes SPP para enviarlos a QA. Una vez aplicadas las correcciones por el Content Creator, la IA verifica que los cambios solicitados se hayan implementado correctamente.',
        'proj2.title': 'Adenai — Generador de Posts Editable',
        'proj2.desc': 'Aplicación propia para generar posts de redes sociales usando un modelo de IA entrenado a medida, con un framework agéntico basado en generación de código de plantillas editables directamente en la plataforma.',
        'proj2.tag': '<i class="fas fa-bolt"></i> IA Agéntica · React',
        'proj3.title': 'Automatización de Reportes Universitarios con API de Google Gemini + Make',
        'proj3.desc': 'Sistema automatizado para generación de reportes de seguimiento de micro diseño universitario con análisis de datos y visualización automática.',
        'proj4.title': 'Agente IA Ultrarrealista con ElevenLabs + Voximplant + Make',
        'proj4.desc': 'Agente conversacional inteligente integrado con Voximplant e ElevenLabs para atención al cliente automatizada y agendamiento de citas con procesamiento de voz natural.',
        'proj5.title': 'Automatización multicanal Instagram y Whatsapp con RPA Marketing',
        'proj5.desc': 'Sistema de recolección automatizada de seguidores de Instagram y mensajería masiva utilizando Playwright y gestión de sesiones con cookies.',
        'proj6.title': 'ChatBot WhatsApp Inteligente con API de OpenAI + Make',
        'proj6.desc': 'Bot de WhatsApp integrado con MAKE y ChatGPT para atención al cliente, agendamiento, reagendamiento y cancelación de citas de forma automatizada.',
        'proj7.title': 'Agente IA con API de OpenAI + Voximplant + Make',
        'proj7.desc': 'Sistema automatizado con Voximplant y ChatGPT para recordatorios de pagos, gestión de inscripciones y atención al cliente multicanal.',
        'proj8.title': 'Bot Telegram con Buffer de Mensajes en Make',
        'proj8.desc': 'Bot de Telegram optimizado con sistema de buffer de mensajes sin Redis, integrado con MAKE para automatización de workflows complejos.',
        'link.video': 'Video Demo',
        'contact.eyebrow': 'Conectemos',
        'contact.title': 'Contacto',
        'contact.desc': '¿Listo para automatizar tu negocio con IA?',
        'contact.phone': 'Teléfono'
    },
    en: {
        'nav.about': 'Info',
        'nav.skills': 'Stack',
        'nav.experience': 'Experience',
        'nav.studies': 'Education',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Automation & AI',
        'hero.desc': 'I design AI agents, agentic flows and business automations that cut operating costs and elevate the customer experience.',
        'hero.cta1': 'View Projects',
        'hero.cta2': 'Contact Me',
        'about.eyebrow': 'Profile',
        'about.title': 'About',
        'about.intro': 'AI Developer and Systems Engineer specialized in AI-driven workflows, agentic flows and business process automation. Expert in optimizing operations, reducing costs and improving the customer experience through intelligent technology solutions.',
        'about.card1.title': 'Artificial Intelligence',
        'about.card1.desc': 'I build conversational AI agents for customer service, appointment scheduling and business process automation.',
        'about.card2.title': 'Automation',
        'about.card2.desc': 'I automate repetitive and complex processes to improve operational efficiency and cut business costs.',
        'about.card3.title': 'Optimization',
        'about.card3.desc': 'I implement solutions that optimize workflows, improve the customer experience and boost productivity.',
        'skills.eyebrow': 'Stack',
        'skills.title': 'Technical Skills',
        'skills.card1.title': 'AI-driven Automation',
        'skills.card2.title': 'Programming & Web',
        'experience.eyebrow': 'Career',
        'experience.title': 'Work Experience',
        'exp1.date': 'June 2025 — May 2026',
        'exp1.desc': 'Designed and developed a QA AI system for reviewing social media posts, email designs and SEO blog content. Built and documented automated workflows, plus smaller projects including a CV & hiring handler, context-aware automated response systems, and a social media post generator.',
        'exp2.date': 'February 2025 — May 2025',
        'exp2.desc': 'Developed projects for multiple company clients focused on chatbots and conversational AI agents via phone calls. Implemented business process automation integrating Twilio, ElevenLabs, Make and OpenAI to improve operational efficiency and customer service.',
        'exp3.date': 'January 2024 — June 2024',
        'exp3.role': 'Web Developer <span class="timeline-company">· Green Apples Nutrition</span>',
        'exp3.desc': 'Designed and implemented page templates in WordPress and JavaScript, ensuring compliance with privacy and data policies. Used CMS technologies and SEO strategies to meet the client\'s functional and aesthetic requirements.',
        'studies.eyebrow': 'Education',
        'studies.title': 'Education & Certifications',
        'edu1.title': 'Systems Engineering (2020 - 2026)',
        'edu1.desc': 'Universidad Nacional Abierta y a Distancia — Santa Marta, Magdalena. Solid background in software development, systems architecture and agile methodologies.',
        'edu2.title': 'Web Development (2022 - 2023)',
        'edu2.desc': 'Academlo (Online). Certifications in backend and frontend web development, API integration and databases.',
        'edu3.title': 'Python, AI & Security in Industry',
        'edu3.desc': 'Certification in applying programming and AI with Python in industrial environments.',
        'projects.eyebrow': 'Portfolio',
        'projects.title': 'Projects',
        'proj1.title': 'QA AI Automation for Social Media Posts',
        'proj1.desc': 'Fully automated system using 9 Make workflows that pulls a client\'s posts, reviews them against the brief, batches ideas and SPP messages, then sends them to QA. Once the Content Creator applies the fixes, the AI verifies the requested changes were correctly implemented.',
        'proj2.title': 'Adenai — Editable Social Post Generator',
        'proj2.desc': 'A self-built app that generates social media posts using my own trained AI, with an agentic framework based on code generation of templates that can be edited directly within the platform.',
        'proj2.tag': '<i class="fas fa-bolt"></i> Agentic AI · React',
        'proj3.title': 'University Report Automation with Google Gemini API + Make',
        'proj3.desc': 'Automated system for generating follow-up reports on university micro-design courses, including data analysis and automatic visualization.',
        'proj4.title': 'Ultrarealistic AI Agent with ElevenLabs + Voximplant + Make',
        'proj4.desc': 'Conversational AI agent integrated with Voximplant and ElevenLabs for automated customer service and appointment scheduling via natural voice processing.',
        'proj5.title': 'Multichannel Instagram & WhatsApp Automation with RPA Marketing',
        'proj5.desc': 'Automated system for gathering Instagram followers and sending mass messages using Playwright and cookie-based session management.',
        'proj6.title': 'Intelligent WhatsApp Chatbot with OpenAI API + Make',
        'proj6.desc': 'WhatsApp bot integrated with Make and ChatGPT for automated customer service: scheduling, rescheduling and canceling appointments.',
        'proj7.title': 'AI Agent with OpenAI API + Voximplant + Make',
        'proj7.desc': 'Automated system using Voximplant and ChatGPT for payment reminders, enrollment management and multichannel customer support.',
        'proj8.title': 'Telegram Bot with Message Buffering in Make',
        'proj8.desc': 'Optimized Telegram bot with a Redis-free message buffering system, integrated with Make for complex workflow automation.',
        'link.video': 'Video Demo',
        'contact.eyebrow': "Let's Connect",
        'contact.title': 'Contact',
        'contact.desc': 'Ready to automate your business with AI?',
        'contact.phone': 'Phone'
    }
};

function setLanguage(lang) {
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = dict[key];
        if (value === undefined) return;
        if (value.includes('<')) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('preferredLang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

setLanguage(localStorage.getItem('preferredLang') || 'es');

// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Smooth scrolling
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

// Scroll indicator
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scrollIndicator').style.transform = `scaleX(${scrolled / 100})`;
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(5, 7, 13, 0.92)';
    } else {
        header.style.background = 'rgba(5, 7, 13, 0.75)';
    }
});

// Add floating animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'floating 2s ease-in-out infinite';
    });
    card.addEventListener('mouseleave', () => {
        card.style.animation = 'none';
    });
});

// Add click effects to buttons
document.querySelectorAll('.project-link, .cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add typewriter effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typewriter effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 150);
    }, 1000);
});
