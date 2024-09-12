let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].classList.remove("active");
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Mapa simulado
function initMap() {
    // Simulación de datos en tiempo real
    document.getElementById("map").innerHTML = "<h3>Mapa de la Cuenca del Río Mantaro</h3>";
}

// Modal para mostrar información de cada tarjeta
function openInfo(type) {
    let infoContent = "";

    if (type === 'flora') {
        infoContent = "<h3>Flora del Río Mantaro</h3><p>La cuenca del río Mantaro alberga una rica variedad de especies vegetales como los eucaliptos y plantas nativas...</p>";
    } else if (type === 'fauna') {
        infoContent = "<h3>Fauna del Río Mantaro</h3><p>En las riberas del río, se puede observar la presencia de especies animales como el pato andino y la taruca...</p>";
    } else if (type === 'caudal') {
        infoContent = "<h3>Caudal del Río Mantaro</h3><p>El caudal del río actualmente es de 200 m³/s según los datos simulados en tiempo real proporcionados por el gobierno.</p>";
    } else if (type === 'turismo') {
        infoContent = "<h3>Lugares Turísticos</h3><p>Entre los lugares turísticos más visitados destacan el Puente Colgante de Huancayo y las Termas de Churín...</p>";
    }

    document.getElementById("modalInfo").innerHTML = infoContent;
    document.getElementById("infoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}
