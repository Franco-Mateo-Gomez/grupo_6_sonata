let submenu_container = document.querySelectorAll(".submenu-container")
let submenu_botones = document.querySelectorAll("#submenu");
let flecha = document.querySelector(".flecha_submenu-boton");

submenu_botones.forEach((boton, i)=>{
    boton.addEventListener("click",()=>{
        submenu_container[i].classList.toggle("visible");
        flecha.classList.toggle("arrow-movimiento");
    })
});

//BOTON ACTIVADOR DEL DESPLUEGUE DEL MENU HORIZONTAL
let menu_desplegable = document.querySelector(".menu_desplegable");
let menu = document.querySelector(".nav-menu");
let btn_usuario = document.querySelector(".btn-usuario-x");
let estado_x = false;

btn_usuario.addEventListener("click",()=>{
    menu.classList.toggle("invisible-navegacion")
    btn_usuario.classList.toggle("border-btn-user")
    menu_desplegable.classList.toggle("visible_menu");
    if(estado_x){
        btn_usuario.innerHTML = "<i class='fa-solid fa-user'></i>"
        estado_x = false;
    }
    else{
        btn_usuario.innerHTML = "<i class='fa-solid fa-xmark'></i>"
        estado_x = true;
    }
    
});

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