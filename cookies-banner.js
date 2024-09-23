/*----------ESTE CÓDIGO JS ES PARA EL MENSAJE DE COOKIES*/
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

// Desplazamiento suave del banner con el scroll
window.addEventListener("scroll", function() {
    var cookieBanner = document.getElementById("cookie-banner");
    var scrollY = window.scrollY || window.pageYOffset; // Obtener la posición del scroll actual
    var bannerHeight = cookieBanner.offsetHeight;
    
    // Actualiza la posición del banner para que se mueva con el scroll
    cookieBanner.style.transform = `translateY(${scrollY}px)`;
});
