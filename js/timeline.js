// Timeline Animation und Interaktivität MIT BILDERN
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineInfo = document.getElementById('timelineInfo');
    
    if (!timelineItems.length || !timelineInfo) return;
    
    // Scroll-Animation für Timeline Items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Hover-Effekte für Timeline Items MIT BILDERN
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const title = this.getAttribute('data-title');
            const duration = this.getAttribute('data-duration');
            const details = this.getAttribute('data-details');
            const image = this.getAttribute('data-image');
            
            console.log('Hover over:', title, 'Image:', image); // Debug
            
            // Bild-HTML falls vorhanden
            let imageHtml = '';
            if (image) {
                imageHtml = `<img src="${image}" alt="${title}" class="timeline-image">`;
            }
            
            // Entferne vorherige Animation
            timelineInfo.classList.remove('info-details-enter');
            void timelineInfo.offsetWidth; // Trigger reflow
            
            // Setze neuen Inhalt mit Animation UND BILD
            timelineInfo.innerHTML = `
                <div class="info-content info-details-enter">
                    ${imageHtml}
                    <h3>${title}</h3>
                    <div class="duration-badge">
                        <i class="fas fa-clock"></i>
                        <span>${duration}</span>
                    </div>
                    <p>${details}</p>
                </div>
            `;
            
            timelineInfo.classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
            setTimeout(() => {
                if (!isAnyItemHovered()) {
                    resetInfoPanel();
                }
            }, 100);
        });
    });
    
    // Prüft ob ein Item gehovered wird
    function isAnyItemHovered() {
        return Array.from(timelineItems).some(item => 
            item.matches(':hover') || item.querySelector('.timeline-content').matches(':hover')
        );
    }
    
    // Setzt Info-Panel zurück
    function resetInfoPanel() {
        timelineInfo.classList.remove('active');
        
        setTimeout(() => {
            if (!timelineInfo.classList.contains('active')) {
                timelineInfo.innerHTML = `
                    <div class="info-content">
                        <i class="fas fa-info-circle info-icon"></i>
                        <h3>Coaching Ablauf</h3>
                        <p>Bewegen Sie die Maus über einen Schritt für detaillierte Informationen</p>
                    </div>
                `;
            }
        }, 300);
    }
    
    // Klick-Effekt für Mobile MIT BILDERN
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const title = this.getAttribute('data-title');
                const duration = this.getAttribute('data-duration');
                const details = this.getAttribute('data-details');
                const image = this.getAttribute('data-image');
                
                // Bild-HTML falls vorhanden
                let imageHtml = '';
                if (image) {
                    imageHtml = `<img src="${image}" alt="${title}" class="timeline-image">`;
                }
                
                timelineInfo.innerHTML = `
                    <div class="info-content">
                        ${imageHtml}
                        <h3>${title}</h3>
                        <div class="duration-badge">
                            <i class="fas fa-clock"></i>
                            <span>${duration}</span>
                        </div>
                        <p>${details}</p>
                    </div>
                `;
                
                timelineInfo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
