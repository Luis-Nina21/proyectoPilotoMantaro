document.addEventListener("DOMContentLoaded", function() {
    // Muestra el banner de cookies solo si no ha sido aceptado ni cancelado previamente en esta sesión
    if (!sessionStorage.getItem("cookiesDecision")) {
        setTimeout(showCookieBanner, 1000); // Aparece después de 1 segundo
    }
});

function showCookieBanner() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "block";
    cookieBanner.style.opacity = "0"; // Inicialmente invisible
    cookieBanner.style.transition = "opacity 1s"; // Transición de 1 segundo
    setTimeout(function() {
        cookieBanner.style.opacity = "1"; // Gradualmente hace visible el banner
    }, 10); // Delay pequeño para asegurar que el efecto funcione
}

function acceptCookies() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.opacity = "0"; // Desvanece el banner
    setTimeout(function() {
        cookieBanner.style.display = "none"; // Después de desvanecerse, oculta el banner
    }, 1000); // Espera el tiempo de la transición antes de ocultarlo

    // Almacena la decisión del usuario en sessionStorage
    sessionStorage.setItem("cookiesDecision", "accepted");
}

function cancelCookies() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.opacity = "0"; // Desvanece el banner
    setTimeout(function() {
        cookieBanner.style.display = "none"; // Después de desvanecerse, oculta el banner
    }, 1000); // Espera el tiempo de la transición antes de ocultarlo

    // Almacena la decisión del usuario en sessionStorage
    sessionStorage.setItem("cookiesDecision", "canceled");
}

// Asocia las funciones a los botones
document.getElementById("accept-btn").addEventListener("click", acceptCookies);
document.getElementById("cancel-btn").addEventListener("click", cancelCookies);

// Efecto de movimiento sutil sin modificar el centrado
window.addEventListener("scroll", function() {
    var cookieBanner = document.getElementById("cookie-banner");

    // Mantener el banner centrado aplicando una ligera oscilación vertical
    var scrollY = window.scrollY || window.pageYOffset;
    var oscillation = Math.sin(scrollY * 0.05) * 3; // Oscilación leve (3px) para no alterar el centrado
    
    // Mantiene el banner centrado y aplica el movimiento leve con transform
    cookieBanner.style.transform = `translate(-50%, ${oscillation}px)`;
});
