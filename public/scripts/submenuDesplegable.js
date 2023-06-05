let submenu_container = document.querySelectorAll(".submenu-container")
let submenu_botones = document.querySelectorAll("#submenu");
let flecha = document.querySelector(".flecha_submenu-boton");

submenu_botones.forEach((boton, i)=>{
    boton.addEventListener("click",()=>{
        submenu_container[i].classList.toggle("visible");
        flecha.classList.toggle("arrow-movimiento");
    })
});
