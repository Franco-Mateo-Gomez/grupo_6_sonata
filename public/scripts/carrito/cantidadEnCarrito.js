//FUNCIONALIDAD DEL BOTON CARRITO
function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}

window.addEventListener("load", () => {
    let numeroCarrito = document.querySelector(".cart_number");

    //Mostramos la cantidad de productos en el carrito 
    numeroCarrito.innerHTML = productosEnElCarrito();
});