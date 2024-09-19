// Selecciona el botón
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Detecta el scroll de la ventana
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show"); // Muestra el botón si se ha hecho scroll
    } else {
        scrollTopBtn.classList.remove("show"); // Oculta el botón si está cerca del top
    }
};

// Al hacer clic en el botón, vuelve al inicio de la página
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
};
