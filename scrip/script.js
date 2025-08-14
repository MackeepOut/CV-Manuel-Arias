// Modo oscuro/claro
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('darkMode', 'enabled');
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Verificar preferencia almacenada
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Animación al hacer scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
        
        // Efecto parallax para el header
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const parallaxHeader = document.querySelector('.parallax-header');
            
            if (parallaxHeader) {
                parallaxHeader.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            }
        });
        
        // Formulario de contacto
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
                contactForm.reset();
            });
        }
        
        // Smooth scrolling para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
        
        // Iniciar animación de barras de progreso
        window.addEventListener('load', () => {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        });

        // Botón para descargar PDF
        document.getElementById('downloadPdfBtn').addEventListener('click', function() {
        // Reemplaza 'ruta/a/tu/archivo.pdf' con la ubicación real de tu PDF
        const pdfUrl = 'Manuel arias hv.pdf';
        
        
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Hoja_de_Vida_Manuel_Arias.pdf'; // Nombre del archivo al descargar
        
        // Simular clic en el enlace
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        });