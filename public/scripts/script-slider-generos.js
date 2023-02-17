function App() { }
window.onload = function (event) {
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    console.log(event.currentTarget)

    const carruselList = event.currentTarget.parentNode;
    console.log(event.target.parentNode);

    /**Obtengo todos los elementos hijos de #track > cada slider por ejemplo**/
    const track = event.currentTarget.parentNode.querySelector("#track")

    /**Filtramos del contenedo #track todos los elementos con .slider-genros**/
    const carrusel = track.querySelectorAll(".slider-generos")
    console.log(track.querySelectorAll(".slider-generos"))

    const carruselWidth = carrusel[0].offsetWidth;
    console.log(carrusel[0].offsetWidth)

    const trackWidth = track.offsetWidth;
    console.log(track.offsetWidth)

    const listWidth = carruselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);

}

let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}
