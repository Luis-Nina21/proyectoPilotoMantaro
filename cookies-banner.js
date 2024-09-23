/*----------ESTE CODIGO JS ES PARA EL MENSAJE DE COOKIES*/
document.addEventListener("DOMContentLoaded", function() {
    // Muestra el banner de cookies solo si no ha sido aceptado ni cancelado previamente en esta sesión
    if (!sessionStorage.getItem("cookiesDecision")) {
        showCookieBanner();
    }
});

function showCookieBanner() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "block";
}

function acceptCookies() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "none";
    
    // Almacena la decisión del usuario en sessionStorage
    sessionStorage.setItem("cookiesDecision", "accepted");
}

function cancelCookies() {
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "none";
    
    // Almacena la decisión del usuario en sessionStorage
    sessionStorage.setItem("cookiesDecision", "canceled");
}

// Asocia las funciones a los botones
document.getElementById("accept-btn").addEventListener("click", acceptCookies);
document.getElementById("cancel-btn").addEventListener("click", cancelCookies);
