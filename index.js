// Selecciona el elemento con la clase "banner_text" del DOM
const banner_text = document.querySelector(".banner_text"); 

// Crea un observador que observa la visibilidad de "banner_text"
const observador = new IntersectionObserver((entradas) => {
    // Itera sobre cada entrada (elemento observado) del observador
    entradas.forEach(entrada => {
        // Verifica si la entrada está en la vista del usuario
        if (entrada.isIntersecting) {
            // Si está en la vista, remueve la clase "oculto" para mostrar el elemento
            banner_text.classList.remove("oculto");
        } else {
            // Si no está en la vista, agrega la clase "oculto" para esconder el elemento
            banner_text.classList.add("oculto");
        }
    });
}, {
    // Define que el elemento debe estar completamente visible para activar el observador
    threshold: 1.0 
});

// Inicia la observación de "banner_text"
observador.observe(banner_text);


// Selecciona el elemento con la clase "main_section" del DOM
const main_section = document.querySelector(".main_section"); 

// Crea un observador que observa la visibilidad de "main_section"
const infoObserver = new IntersectionObserver((entradas) => {
    // Itera sobre cada entrada (elemento observado) del observador
    entradas.forEach(entrada => {
        // Verifica si la entrada está en la vista del usuario
        if (entrada.isIntersecting) {
            // Si está en la vista, agrega la clase "aparecer" para mostrar el elemento
            main_section.classList.add("aparecer"); 
        } else {
            // Si no está en la vista, remueve la clase "aparecer" para esconder el elemento
            main_section.classList.remove("aparecer"); 
        }
    });
}, {
    // Define que el elemento debe estar al menos un 10% visible para activar el observador
    threshold: 0.1 
});

// Inicia la observación de "main_section"
infoObserver.observe(main_section);
