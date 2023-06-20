window.addEventListener("load", () => {

    let form = document.querySelector(".browserForm");
    let input = document.querySelector("#queryInput");
    let results = document.querySelector("#results");


    form.addEventListener("keyup", () =>{

        if (input.value.length >0){

            fetch ("http://localhost:3030/api/products")
            .then(response => response.json())
            .then(data => {
                let albums = data.albums
                let inputUser = input.value.toLowerCase();
                let resultData = "";

                for(let album of albums){
                    let albumLowerCase = album.name.toLowerCase()

                    if(albumLowerCase.indexOf(inputUser) != -1){
                        resultData += `
                        <li class="descripcion_album">

                            <div class="description_album_container">
                                <h3>${album.name}</h3>

                                <a class="descripcion_boton" href="/product/detail/${album.id}">Ver Album</a>
                            </div>

                        </li>
                        `
                    }
                }

                results.innerHTML = resultData;
                
            })
        }

        else{
            results.innerHTML = ""
        }

    });

})