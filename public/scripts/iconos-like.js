let icono1 = document.querySelector(".iconos .icono-uno")
let icono2 = document.querySelector(".iconos .icono-dos")
let icono3 = document.querySelector(".iconos .icono-tres")
let icono4 = document.querySelector(".iconos .icono-cuatro")


icono1.addEventListener("click", (e) => {
    if(!icono2.classList.contains("colorlike")){
    icono1.classList.toggle("colornolike")
    }
    else{
        icono2.classList.remove("colorlike")
    }
})


icono2.addEventListener("click", (e) => {
    if(!icono1.classList.contains("colornolike")){
    icono2.classList.toggle("colorlike")
    }
    else{
        icono1.classList.remove("colornolike")
    }
})

icono3.addEventListener("click", (e) => {
    if(!icono1.classList.contains("colorlike")){
    icono3.classList.toggle("colornolike")
    }
    else{
        icono1.classList.remove("colorlike")
    }
})

icono4.addEventListener("click", (e) => {
    if(!icono3.classList.contains("colornolike")){
    icono4.classList.toggle("colorlike")
    }
    else{
        icono3.classList.remove("colornolike")
    }
})



