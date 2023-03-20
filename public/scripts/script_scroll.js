/**
 * Lo que hace este código JavaScript es agregar un evento de clic a la imagen, lo 
 * que guarda la posición inicial de la imagen y la posición del desplazamiento en
 * el momento en que se hace clic en la imagen. Luego, agrega un evento de arrastre 
 * a la imagen, lo que calcula la cantidad de píxeles que se han arrastrado la imagen 
 * y ajusta la posición de desplazamiento en consecuencia. Finalmente, cuando se suelta
 *  el botón del mouse, se detiene el arrastre.
 * Con estos cambios, se deberia poder arrastrar las imágenes dentro del contenedor 
 * "filtro".
 * **/

// Obtén el elemento "filtro"
var filtro = document.getElementById('filtro');

// Guarda la posición inicial de la imagen al hacer clic en ella
var startX, startScrollLeft;
filtro.addEventListener("mousedown", function (e) {
    startX = e.pageX - filtro.offsetLeft;
    startScrollLeft = filtro.scrollLeft;
});

// Arrastra la imagen al mover el mouse mientras se mantiene el botón izquierdo presionado
filtro.addEventListener("mousemove", function (e) {
    if (!startX) {
        return;
    }
    e.preventDefault();
    var x = e.pageX - filtro.offsetLeft;
    var walk = (x - startX) * 3;
    filtro.scrollLeft = startScrollLeft - walk;
});

// Deja de arrastrar la imagen al soltar el botón izquierdo del mouse
filtro.addEventListener("mouseup", function (e) {
    startX = null;
});


const figure = document.getElementById("filtro");
  const images = figure.children;
  const interval = 1000; // Intervalo en milisegundos
  const imageWidth = images[0].offsetWidth; // Ancho de cada imagen

  let index = 0;
  setInterval(() => {
    // Mueve el figure al siguiente índice
    index = (index + 1) % images.length;
    // Mueve las imágenes al siguiente índice
    for (let i = 0; i < images.length; i++) {
      images[0].style.width = "150px"
    }
  }, interval);
