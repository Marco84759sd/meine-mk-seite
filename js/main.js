// Scroll-Animationen
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.chart-container, .slice-in, .slice-in-right, .fade-in, .stat-box, .course-card').forEach(item => {
        observer.observe(item);
    });

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal-Funktionalität für Kursdetails
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    const details = {
        easy: `
            <h3 style="color: #34c759;">Einstieg – Markteffekte mit CFD</h3>
            <p>
                Kurz: <strong>Halbautomatisierter Handel</strong> mit klaren Einstiegsregeln. Ziel: effiziente Nutzung wiederkehrender Markteffekte.
            </p>
            <ul>
                <li>Automatische Signale, geringerer manueller Aufwand</li>
                <li>Schnelle Implementierung auf CFD-Plattformen</li>
                <li>Vorteile: einfache Handhabung; Nachteile: höhere Volatilität</li>
            </ul>
            <p><em>Ideal für Händler, die klare Regeln und eine schnelle Umsetzung suchen.</em></p>
        `,
        medium: `
            <h3 style="color: #0071e3;">Kernsystem – Saisonaler Handel (Zertifikate)</h3>
            <p>
                Kurz: <strong>Regelbasierter Handel</strong> nach saisonalen Mustern. Fokus auf Validierung und mentalem Management.
            </p>
            <ul>
                <li>Detaillierte Backtests über viele Jahre</li>
                <li>Prüfung der Datenqualität (150 Aktien pro Jahr)</li>
                <li>Kurze TradingView-Einführung und Datenvalidierung</li>
                <li>Mental: Umgang mit Drawdowns, Re-Check an historischen ähnlichen Phasen</li>
            </ul>
            <p><em>Die Grundlage für jeden Trader, der datengetriebene Entscheidungen bevorzugt.</em></p>
        `,
        advance: `
            <h3 style="color: #ff3b30;">Premium – Kombination beider Ansätze</h3>
            <p>
                Kurz: Die Kombination beider Strategien ergibt eine <strong>stabilere Performance-Kurve</strong>. Die Grundregeln bleiben erhalten.
            </p>
            <ul>
                <li>Kombination unkorrelierter Systeme zur Risikoreduktion</li>
                <li>Komplexere Ausführung, dafür ausgeglichenerer Verlauf</li>
                <li>Empfohlen: Monitoring, klares Money-Management und Dokumentation</li>
            </ul>
            <p><em>Für fortgeschrittene Anleger, die eine maximale Portfolio-Stabilität anstreben.</em></p>
        `
    };

    // Funktion zum Öffnen des Modals
    window.openDetails = function(key) {
        if (modal && modalContent) {
            modalContent.innerHTML = details[key] || '';
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }

    // Funktion zum Schliessen des Modals
    window.closeModal = function() {
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }

    // Event Listener für die Karten
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            const course = card.getAttribute('data-course');
            if (course) {
                openDetails(course);
            }
        });
    });

    // Klick ausserhalb schliessen (auf das Overlay)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) closeModal();
        });
    }
});

// Timeline Bild Hover Effekt
document.addEventListener('DOMContentLoaded', function() {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="image-modal-content" src="" alt="Kurs Bild">
    `;
    document.body.appendChild(imageModal);
    
    const modalImg = imageModal.querySelector('.image-modal-content');
    const closeBtn = imageModal.querySelector('.close-modal');
    
    timelineSteps.forEach(step => {
        const imageHover = step.querySelector('.step-image-hover');
        const imageUrl = step.getAttribute('data-image');
        
        imageHover.addEventListener('click', function() {
            modalImg.src = imageUrl;
            imageModal.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
});

// Variante 3: Akkordeon Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Akkordeon Funktionalität
    const expandToggles = document.querySelectorAll('.expand-toggle');
    expandToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.fa-chevron-down');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Bild Modal für alle Varianten
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="image-modal-content" src="" alt="Kurs Bild">
    `;
    document.body.appendChild(imageModal);
    
    const modalImg = imageModal.querySelector('.image-modal-content');
    const closeBtn = imageModal.querySelector('.close-modal');
    
    // Klick-Event für alle Bild-Elemente
    const imageElements = document.querySelectorAll('[data-image], .step-image-preview, .step-thumbnail, .visual-icon, .gallery-preview');
    imageElements.forEach(element => {
        element.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image') || 'images/Kurs_01.jpg';
            modalImg.src = imageUrl;
            imageModal.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        imageModal.style.display = 'none';
    });
    
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });
});
