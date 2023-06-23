function setCarritoVacio() {
    contedorListaProducto.innerHTML = `<div class="checkout-summary-products">
    Carrito Vacio
</div>`
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
}

let contenedorProductosCarrito = document.querySelector(".productos_carrito");
let contenedorPrecioTotal = document.querySelector(".precioTotalCarrito")

let productos = []
let precioTotal = 0;

if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);
    console.log(contenedorProductosCarrito, "dsada")
    carrito.forEach((item, index) => {
        fetch(`/api/products/${item.id}`).then(res => res.json())
            .then(producto => {
                if (producto) {
                    contenedorProductosCarrito.innerHTML += `<div class="tarjeta_producto_carrito">
            <img src=${producto.image} class="imagen_producto_carrito" alt="imagen de producto">

            <div class="producto_detalles_carrito">
                
                <div class="producto_contenedor_detalles">
                    <h4 class="producto_nombre_carrito">
                            ${producto.name}
                    </h4>

                    <div class="producto_precio_carrito">
                        <h4>
                            $${producto.price}
                            <h6>${producto.coin}</h6>
                        </h4>
                    </div>

                    
                </div>

                <div class="producto_funciones_carrito">
                    <a class="producto_funcion_eliminar_carrito" href="#">
                        Eliminar
                    </a>

                    <a class="producto_funcion_ver_carrito" href="/product/detail/${producto.id}">
                        Ver
                    </a>
                </div>

                
            </div>
        </div>`
                    precioTotal += Number(producto.price)

                    productos.push({
                        id: producto.id,
                        description: producto.description,
                        image: producto.image,
                        price: producto.price
                    })
                } else {
                    //Si en la db no existe el producto lo saco de localStorage
                    carrito.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carrito));
                }
            }).then(() => {
                contenedorPrecioTotal.innerHTML = "$ " + precioTotal + " ARS";
            })
    });
}

let checkoutCart = document.querySelector("#checkout-cart");

checkoutCart.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e)
});
