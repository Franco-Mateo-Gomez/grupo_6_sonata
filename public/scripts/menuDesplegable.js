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
