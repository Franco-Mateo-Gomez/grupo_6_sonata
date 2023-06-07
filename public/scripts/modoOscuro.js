let contenedor_presentacion = document.querySelector(".presentacion")
let btn_fondoColor = document.querySelector(".btn_fondoColor");
let estado_fondoColor = false;

btn_fondoColor.addEventListener("click",()=>{
    contenedor_presentacion.classList.toggle("cambio_fondoColor");
    if(estado_fondoColor){
        btn_fondoColor.innerHTML = "<i class='fa-solid fa-moon'></i>"
        estado_fondoColor = false;
    }
    else{
        btn_fondoColor.innerHTML = "<i class='fa-solid fa-sun'></i>"
        estado_fondoColor = true;
    }
});