
let contenedorAlbumes = document.querySelector(".contenedor_albumes_filtrar");
let albumes = document.querySelector(".contenedor_albumes_filtrar").children;

let botones = document.querySelector(".filtrador_botones").children;

let botonNada = document.querySelector("#nada");

for (let i = 0; i < botones.length - 1; i++) {


    botones[i].addEventListener("click", () => {
        let eleccion = botones[i].id + "";
        console.log(botonNada.className.includes("seleccionada"))
        if(botonNada.className.includes("seleccionada")){
            contenedorAlbumes.classList.remove("invisible-filtro");
            botonNada.classList.remove("seleccionada");
        }

        for (let j = 0; j < albumes.length; j++) {
            if (!albumes[j].className.includes(eleccion) && botones[i].id.includes("seleccionada") == false) {
                albumes[j].classList.add("invisible-filtro");
                botones[i].classList.add("seleccionada");
            }
            else {
                albumes[j].classList.remove("invisible-filtro");
                botones[i].classList.remove("seleccionada");
            }
        }
    })
}

botonNada.addEventListener("click", () => {
    contenedorAlbumes.classList.toggle("invisible-filtro");
    botonNada.classList.toggle("seleccionada");
    
});


let imagen_tarjeta = document.querySelectorAll(".imagen_tarjeta_album");
let fondo_imagen = document.querySelectorAll(".fondo_imagen") 

let contenedores = document.querySelectorAll(".tarjeta_album");

for (let i = 0; i < contenedores.length ; i++) {

    contenedores[i].addEventListener("mouseover", () => {
        fondo_imagen[i].classList.add("fondo_imagen_tamaño");
    })

    contenedores[i].addEventListener("mouseout", () => {
        fondo_imagen[i].classList.remove("fondo_imagen_tamaño");
    })
}


// Obtener elementos del encabezado y la caja
var header = document.querySelector("header");
var caja = document.querySelector(".presentacion");

// Escuchar el evento scroll
window.addEventListener("scroll", function() {
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
  window.addEventListener("scroll", function() {
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

  let boton_filtrador_generos = document.querySelector(".boton_generos");
  let contenedor_lista_generos = document.querySelector(".filtrador_botones");

  boton_filtrador_generos.addEventListener("click", ()=>{
    contenedor_lista_generos.classList.toggle("visibleMenuDesplegableGeneros")
  });
