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


//-----NAV ------------


document.getElementById("navToggle").addEventListener("click", function() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
});




// Función para actualizar el índice de la diapositiva actual
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

// Función para fijar el encabezado después de pasar el carrusel
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const carrusel = document.querySelector('.carousel');
    const carruselHeight = carrusel.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > carruselHeight) {
        header.classList.add('fixed');
        document.body.style.paddingTop = `${header.offsetHeight}px`; // Añadir padding para evitar que el contenido se superponga
    } else {
        header.classList.remove('fixed');
        document.body.style.paddingTop = '0'; // Eliminar el padding cuando el header no está fijo
    }
});

// script.js

// Función para desplazar suavemente hacia el elemento con el id 'header'
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#header').scrollIntoView({ behavior: 'smooth' });
});


/*------------------------BUCLE DEL TERMOMETRO-------------------*/
const fill = document.querySelector('.fill');

function animateThermometer() {
    fill.style.height = '100%'; // Llenar el termómetro

    setTimeout(() => {
        fill.style.height = '0%'; // Vaciar el termómetro
    }, 2000); // Esperar 2 segundos antes de vaciar
}

// Repetir la animación en bucle
setInterval(animateThermometer, 4000); // Cada 4 segundos (2 para llenar, 2 para vaciar)




/*------------VISUALIZACION DE DATOS HIDROLOGICOS------------*/
// Función para generar datos aleatorios
function getRandomData(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Configuración del gráfico de caudal
const caudalCtx = document.getElementById('caudalChart').getContext('2d');
const caudalChart = new Chart(caudalCtx, {
    type: 'line',
    data: {
        labels: [], // Fechas o tiempos
        datasets: [{
            label: 'Caudal (m³/s)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            data: [] // Datos de caudal
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: 'Tiempo' } },
            y: { title: { display: true, text: 'Caudal (m³/s)' } }
        }
    }
});

// Configuración del gráfico de calidad del agua
const calidadAguaCtx = document.getElementById('calidadAguaChart').getContext('2d');
const calidadAguaChart = new Chart(calidadAguaCtx, {
    type: 'bar',
    data: {
        labels: [], // Fechas o tiempos
        datasets: [{
            label: 'Turbidez (NTU)',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            data: [] // Datos de calidad del agua
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: 'Tiempo' } },
            y: { title: { display: true, text: 'Turbidez (NTU)' } }
        }
    }
});

// Función para actualizar los gráficos con nuevos datos
function updateCharts() {
    const currentTime = new Date().toLocaleTimeString();

    // Generar y agregar datos para el caudal
    const caudalValue = getRandomData(40, 120);
    caudalChart.data.labels.push(currentTime);
    caudalChart.data.datasets[0].data.push(caudalValue);
    if (caudalChart.data.labels.length > 10) {
        caudalChart.data.labels.shift();
        caudalChart.data.datasets[0].data.shift();
    }
    caudalChart.update();

    // Generar y agregar datos para la calidad del agua
    const calidadAguaValue = getRandomData(0, 5);
    calidadAguaChart.data.labels.push(currentTime);
    calidadAguaChart.data.datasets[0].data.push(calidadAguaValue);
    if (calidadAguaChart.data.labels.length > 10) {
        calidadAguaChart.data.labels.shift();
        calidadAguaChart.data.datasets[0].data.shift();
    }
    calidadAguaChart.update();
}

// Actualizar los gráficos cada 3 segundos
setInterval(updateCharts, 3000);

// Mapa interactivo con Leaflet
const map = L.map('map').setView([-15.642, -71.617], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores para las terrazas y canales
const terrazas = [
    { lat: -15.633, lon: -71.615, estado: 'Buena' },
    { lat: -15.647, lon: -71.620, estado: 'Moderada' },
    { lat: -15.638, lon: -71.630, estado: 'Crítica' }
];

terrazas.forEach(terraza => {
    L.marker([terraza.lat, terraza.lon]).addTo(map)
        .bindPopup(`<b>Terraza</b><br>Estado: ${terraza.estado}`);
});
