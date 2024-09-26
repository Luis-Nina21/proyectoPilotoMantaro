let slideIndex = 1;
showSlides(slideIndex);

// Controlar el cambio de imágenes
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Establecer el slide actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Reiniciar el índice si es mayor que el número de slides
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Ocultar todos los slides y eliminar la clase activa de los dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); 
        dots[i].classList.remove("active");
    }

    // Mostrar el slide activo y añadir la clase activa al dot correspondiente
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Cambiar de slide automáticamente cada 5 segundos
setInterval(() => {
    plusSlides(1);
}, 5000);

function changeSlide(n) {
    slideIndex += n; // Cambiar el índice de la diapositiva
    if (slideIndex >= slides.length) { slideIndex = 0; } // Volver al inicio si excede
    if (slideIndex < 0) { slideIndex = slides.length - 1; } // Volver al final si es negativo
    showSlides(); // Mostrar la diapositiva actual
}

// Actualizar la función showSlides para manejar la lógica de los dots y las flechas
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Ocultar todos los slides y eliminar la clase activa de los dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    // Mostrar el slide activo y añadir la clase activa al dot correspondiente
    slides[slideIndex].classList.add("active");
    slides[slideIndex].style.transform = `translateX(-${slideIndex * 100}%)`; // Deslizar la imagen
    dots[slideIndex].classList.add("active");
}

