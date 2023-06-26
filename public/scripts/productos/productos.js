//FUNCIONALIDAD DEL BOTON CARRITO
function productosEnElCarrito() {
    return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}

window.addEventListener("load", () => {
    let botonesComprar = document.querySelectorAll(".agregar_carrito")
    let numeroCarrito = document.querySelector(".cart_number");
    let botonCarrito= document.querySelector(".boton_agregarCarrito");

        //Verificamos si existe el carrito
        console.log("BOTON CARRITO: ", botonCarrito)
        if (localStorage.carrito) {
            let carrito = JSON.parse(localStorage.carrito);
            //Compruebo que el producto no fue agregado
            console.log("data-id: ",botonCarrito.getAttribute("data-id"))
            let index = carrito.findIndex((producto) => { return producto.id == botonCarrito.getAttribute("data-id") });

            //Agrego el producto esta en el carrito
            if (index == -1) { //findIndex devuelve -1 si no encuentra nada
                botonCarrito.style.background = "green";
            }
            else {
                botonCarrito.style.background = "#d95a4e";
            }
        }
    //Mostramos la cantidad de productos en el carrito 
    numeroCarrito.innerHTML = productosEnElCarrito();
    
    botonesComprar.forEach(botonComprar => {
        botonComprar.addEventListener("click", (e) => {

            //Verificamos si existe el carrito
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito);

                //Compruebo que el producto no fue agregado
                let index = carrito.findIndex((producto) => { return producto.id == e.target.dataset.id });

                //Agrego el producto esta en el carrito
                if (index == -1) { //findIndex devuelve -1 si no encuentra nada
                    carrito.push({ id: e.target.dataset.id })
                    botonComprar.style.background = "green";
                }
                else {
                    //Si presiona nuevamente el boton de comprar sacamos el producto
                    carrito.splice(index, 1);
                    botonComprar.style.background = "#d95a4e";
                }

                localStorage.setItem("carrito", JSON.stringify(carrito))
            }
            //Si no existe lo creamos
            else {
                //Creamos en localStorage Carrito con setItem que recibe 2 strings
                localStorage.setItem("carrito", JSON.stringify([{ id: e.target.dataset.id }]))
                //Verificamos si existe el carrito
                if (localStorage.carrito) {
                    //Compruebo que el producto no fue agregado
                    let index1 = JSON.parse(localStorage.carrito).findIndex((producto) => { return producto.id == botonComprar.getAttribute("data-id") });

                    //Agrego el producto esta en el carrito
                    if (index1 != -1) { //findIndex devuelve -1 si no encuentra nada
                        botonComprar.style.background = "green";
                    }
                }
            }

            numeroCarrito.innerHTML = productosEnElCarrito();

        });


        //Verificamos si existe el carrito
        if (localStorage.carrito) {
            //Compruebo que el producto no fue agregado
            let index1 = JSON.parse(localStorage.carrito).findIndex((producto) => { return producto.id == botonComprar.getAttribute("data-id") });

            //Agrego el producto esta en el carrito
            if (index1 != -1) { //findIndex devuelve -1 si no encuentra nada
                botonComprar.style.background = "green";
            }
        }


    });



});
