document.addEventListener("DOMContentLoaded", function() {
    // Muestra el banner de cookies solo si no ha sido aceptado ni cancelado previamente en esta sesión
    if (!sessionStorage.getItem("cookiesDecision")) {
        setTimeout(showCookieBanner, 1000); // Aparece después de 1 segundo
    }
});

function showCookieBanner() {
    var cookieBanner = document.getElementById("cookie-banner");
    var windowWidth = window.innerWidth;

    // Verifica el tamaño de la ventana y ajusta el banner de acuerdo al dispositivo
    if (windowWidth <= 768) {
        // Pantallas pequeñas: centra el banner horizontal y verticalmente
        cookieBanner.style.width = "90%"; // Ajusta el ancho en pantallas pequeñas
        cookieBanner.style.position = "fixed";
        cookieBanner.style.top = "50%";
        cookieBanner.style.paddingBottom = "10px";
        cookieBanner.style.left = "50%";
        cookieBanner.style.boxSizing = "border-box"; /* Asegura que el padding y border no rompan el layout */
        cookieBanner.style.transform = "translate(-50%, -50%)"; // Centramos completamente
        cookieBanner.style.boxShadow = "6px 6px 6px 15px rgba(86, 87, 86, 0.251)";
        cookieBanner.style.borderRadius = "10px";
    } else {
        // Pantallas grandes: el banner se coloca en la parte inferior
        cookieBanner.style.width = "100%";
        cookieBanner.style.height = "auto";
        cookieBanner.style.position = "fixed";
        cookieBanner.style.boxSizing = "border-box"; /* Asegura que el padding y border no rompan el layout */
        cookieBanner.style.bottom = "0";
        cookieBanner.style.left = "0";
        cookieBanner.style.transform = "none"; // Elimina cualquier transformación previa
        cookieBanner.style.borderRadius = "0";
        cookieBanner.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.2)";
    }

    // Mostrar el banner con una transición suave
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

// Efecto de movimiento solo en pantallas pequeñas
window.addEventListener("scroll", function() {
    var cookieBanner = document.getElementById("cookie-banner");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
        // Aplica el movimiento solo en pantallas pequeñas
        var scrollY = window.scrollY || window.pageYOffset;
        var oscillation = Math.sin(scrollY * 0.05) * 3; // Oscilación leve (3px) solo en el eje Y

        // Movimiento leve vertical, manteniendo centrado el banner
        cookieBanner.style.transform = `translate(-50%, calc(-50% + ${oscillation}px))`;
    }
});
