window.addEventListener("load", () => {

    let form = document.querySelector(".browserForm");
    let input = document.querySelector("#queryInput");
    let results = document.querySelector("#results");

    //Mostramos la cantidad de productos en el carrito 
    form.addEventListener("keyup", () => {
        if (input.value.length > 0) {

            fetch("http://localhost:3030/api/products")
                .then(response => response.json())
                .then(data => {
                    let albums = data.albums
                    let inputUser = input.value.toLowerCase();
                    let resultData = "";

                    for (let album of albums) {
                        let albumLowerCase = album.name.toLowerCase()
                        
                        if (albumLowerCase.indexOf(inputUser) != -1) {
                            resultData += `
                            <li class="tarjeta_album todo ${album.genreAlbum.name}.toLowerCase()}">
                            <section class="titulo_tarjeta_album">
                                <h2>${album.name}</h2>
                            </section>
                    
                            <img class="imagen_tarjeta_album" src=${album.image}>
                    
                            <div class="fondo_imagen">
                                <a href=${"product/detail/" + album.id} class="boton_verProducto"
                                    href>Ver producto <i
                                        class="fa-solid fa-eye"></i></a>
                            </div>
                    
                            <h3 class="precio_tarjeta_album">$ ${album.price + " " + album.coin}</h3>
                        </li>`

                        }
                        
                    }


                    results.innerHTML = resultData;

                    //EFECTO SOBRE LAS TARJETAS DE LOS ALBUMES
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
                })

               
        }

    });

})