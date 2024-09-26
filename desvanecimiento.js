    // JavaScript para detectar cada tarjeta en el viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Agrega la clase cuando la tarjeta está en la vista
            }
        });
    }, {
        threshold: 0.1 // Inicia la animación cuando el 10% de la tarjeta es visible
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card); // Observa cada tarjeta
    });











    