// Obtener elementos del encabezado y la caja
var header = document.querySelector("header");
var caja = document.querySelector(".presentacion");

// Escuchar el evento scroll
window.addEventListener("scroll", function () {
    header.style.transition = "background-color 1s ease-in-out";
    // Obtener posición de la caja
    var cajaPosicion = caja.getBoundingClientRect();

    // Obtener posición del encabezado
    var headerPosicion = header.getBoundingClientRect();

    // Verificar si el encabezado está sobre la caja específica
    if (headerPosicion.bottom >= cajaPosicion.top && headerPosicion.top <= cajaPosicion.bottom) {
        header.classList.add("fondo-transparente-header");/* Cambiar el color del encabezado */
    } else {
        header.classList.remove("fondo-transparente-header"); /* Volver al color inicial del encabezado */
    }
});

// Función para verificar el estado del encabezado al cargar la página
function verificarEstadoInicial() {
    var cajaPosicion = caja.getBoundingClientRect();
    var headerPosicion = header.getBoundingClientRect();

    // Verificar si el encabezado está sobre la caja específica al cargar la página
    if (headerPosicion.bottom >= cajaPosicion.top && headerPosicion.top <= cajaPosicion.bottom) {
        header.classList.add("fondo-transparente-header"); /* Cambiar el color del encabezado */
    } else {
        header.classList.remove("fondo-transparente-header"); /* Volver al color inicial del encabezado */
    }
}

// Escuchar el evento scroll
window.addEventListener("scroll", function () {
    var cajaPosicion = caja.getBoundingClientRect();
    var headerPosicion = header.getBoundingClientRect();

    // Verificar si el encabezado está sobre la caja específica al hacer scroll
    if (headerPosicion.bottom >= cajaPosicion.top && headerPosicion.top <= cajaPosicion.bottom) {
        header.classList.add("fondo-transparente-header"); /* Cambiar el color del encabezado */
    } else {
        header.classList.remove("fondo-transparente-header"); /* Volver al color inicial del encabezado */
    }
});

// Verificar el estado inicial del encabezado al cargar la página
verificarEstadoInicial();