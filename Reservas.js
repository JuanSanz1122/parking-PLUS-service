let modal = document.getElementById("Modal");
let reservar = document.getElementById("reservar");
let span = document.getElementsByClassName("close")[0];

// Al hacer clic en el botón "reservar", muestra el modal con la animación
reservar.onclick = function() {
    modal.style.display = "flex"; // Mostrar el modal
    setTimeout(() => modal.classList.add("show"), 10); // Agregar animación de zoom
}

// Al hacer clic en "X", cierra el modal con la animación
span.onclick = function() {
    modal.classList.remove("show"); // Remueve la animación
    setTimeout(() => modal.style.display = "none", 300); // Oculta después de la animación
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    }
}

