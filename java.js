document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFECTO DE ABRIR SOBRE Y REPRODUCIR MÚSICA
    const envelope = document.getElementById("envelope");
    const envelopeContainer = document.getElementById("envelope-container");
    const mainContent = document.getElementById("main-content");
    const musica = document.getElementById("musica-boda"); // Elemento de música

    envelope.addEventListener("click", () => {
        // Desvanecer sobre
        envelopeContainer.style.opacity = "0";
        
        // Intentar reproducir la música al abrir
        if (musica) {
            musica.play().catch(error => {
                console.log("El navegador bloqueó la reproducción automática inicial:", error);
            });
        }
        
        setTimeout(() => {
            envelopeContainer.style.display = "none";
            // Mostrar contenido de la boda
            mainContent.classList.remove("hidden");
            mainContent.style.opacity = "1";
            // Desplazar automáticamente al inicio de la invitación
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600);
    });

    // 2. CUENTA REGRESIVA (Configurada para el 8 de Agosto de 2026)
    const targetDate = new Date("August 8, 2026 15:30:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            document.querySelector(".countdown-timer").innerHTML = "¡LLEGÓ EL DÍA!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    };

    // Ejecutar cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();

    
    });
