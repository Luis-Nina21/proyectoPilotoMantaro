let slideIndex = 0; // Índice de la diapositiva inicial
showSlides(); // Mostrar la diapositiva inicial

function changeSlide(n) {
    slideIndex += n; // Cambiar el índice de la diapositiva
    const slides = document.getElementsByClassName("slide");
    
    // Verificar límites
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Volver al inicio si excede
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Volver al final si es negativo
    }
    
    showSlides(); // Mostrar la diapositiva actual
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    // Ocultar todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ocultar la diapositiva
    }

    // Mostrar la diapositiva activa
    slides[slideIndex].style.display = "block"; // Mostrar la diapositiva actual
}

// Puedes añadir un manejador de eventos aquí si quieres para cada flecha
document.querySelector('.arrow.left').addEventListener('click', function() {
    changeSlide(-1);
});

document.querySelector('.arrow.right').addEventListener('click', function() {
    changeSlide(1);
});
