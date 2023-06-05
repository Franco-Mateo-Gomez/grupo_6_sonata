let contenedorAlbumes = document.querySelector(".contenedor_albumes_filtrar");
let albumes = document.querySelector(".contenedor_albumes_filtrar").children;
let botones = document.querySelector(".filtrador_botones").children;
let botonNada = document.querySelector("#nada");
let botonNada_desplegable = document.querySelector("#nada_desplegable");
let botones_desplegable = document.querySelector(".filtrador_botones_desplegable").children;


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        let eleccion = botones[i].id + "";

        if (botonNada.className.includes("seleccionada") || botonNada_desplegable.className.includes("seleccionada")) {
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

        // Remover la clase "seleccionada" de todos los botones
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove("seleccionada");
        }
        // Agregar la clase "seleccionada" solo al botón presionado
        botones[i].classList.add("seleccionada");

    })
}
botonNada.addEventListener("click", () => {
    contenedorAlbumes.classList.toggle("invisible-filtro");
    botonNada.classList.toggle("seleccionada");
    // Remover la clase "seleccionada" de todos los botones
    for (let j = 0; j < botones.length; j++) {
        botones[j].classList.remove("seleccionada");
    }
});



for (let i = 0; i < botones.length - 1; i++) {

    botones_desplegable[i].addEventListener("click", () => {
        let eleccion = botones_desplegable[i].id + "";

        if (botonNada.className.includes("seleccionada") || botonNada_desplegable.className.includes("seleccionada")) {
            contenedorAlbumes.classList.remove("invisible-filtro");
            botonNada_desplegable.classList.remove("seleccionada");
        }

        for (let j = 0; j < albumes.length; j++) {
            if (!albumes[j].className.includes(eleccion) && botones_desplegable[i].id.includes("seleccionada") == false) {
                albumes[j].classList.add("invisible-filtro");
                botones_desplegable[i].classList.add("seleccionada");
            }
            else {
                albumes[j].classList.remove("invisible-filtro");
                botones_desplegable[i].classList.remove("seleccionada");
            }
        }

        // Remover la clase "seleccionada" de todos los botones
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove("seleccionada");
        }
        // Agregar la clase "seleccionada" solo al botón presionado
        botones[i].classList.add("seleccionada");
    })
}

botonNada_desplegable.addEventListener("click", () => {
    contenedorAlbumes.classList.toggle("invisible-filtro");
    botonNada_desplegable.classList.toggle("seleccionada");
});


let boton_filtrador_generos = document.querySelector(".boton_generos");
let contenedor_lista_generos = document.querySelector(".filtrador_botones_desplegable");
let boton_ocultarTodo = document.querySelector("#nada_desplegable");

boton_filtrador_generos.addEventListener("click", () => {
    contenedor_lista_generos.classList.toggle("visibleMenuDesplegableGeneros")
});

boton_ocultarTodo.addEventListener("click", () => {
    contenedor_lista_generos.classList.toggle("visibleMenuDesplegableGeneros")
});




//EFECTO SOBRE LAS TARJETAS DE LOS ALBUMES
let imagen_tarjeta = document.querySelectorAll(".imagen_tarjeta_album");
let fondo_imagen = document.querySelectorAll(".fondo_imagen")

let contenedores = document.querySelectorAll(".tarjeta_album");

for (let i = 0; i < contenedores.length; i++) {

    contenedores[i].addEventListener("mouseover", () => {
        fondo_imagen[i].classList.add("fondo_imagen_tamaño");
    })

    contenedores[i].addEventListener("mouseout", () => {
        fondo_imagen[i].classList.remove("fondo_imagen_tamaño");
    })
}



//DESPLAZAMIENTO DE LAS CAJAS DE GENEROS
let botonPrev = document.querySelector(".prev");
let botonNext = document.querySelector(".next");
let contenedorFiltros = document.querySelector(".contenedor_genero");
let desplazamiento = 0; // Inicialmente no hay desplazamiento

botonPrev.addEventListener("click", () => {
    desplazamiento += 240; // Suma 100vw al desplazamiento acumulativo
    contenedorFiltros.style.transform = `translateX(${desplazamiento}px)`;
});

botonNext.addEventListener("click", () => {
    desplazamiento -= 240; // Resta 100vw al desplazamiento acumulativo
    contenedorFiltros.style.transform = `translateX(${desplazamiento}px)`;
});