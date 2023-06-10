window.onload = function () {

    let formulario = document.querySelector('.form_productos');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        let errores = 0

        let nombreAlbum = document.querySelector('#nombre_pista')
        let errorNombre = document.querySelector('.errorNombre')
        if (nombreAlbum.value == '') {
            errorNombre.innerHTML = 'Tienes que agregar un nombre para el album'
            errores = 1

            if (nombreAlbum.value.length < 5) {
                errorNombre.innerHTML += '<br> El nombre debe contener más de 5 caracteres'
                errores = 1
            }
        }
        else {
            errorNombre.innerHTML = ''
        }



        let genero = document.querySelector('.list-generes')
        if (genero.value == 'Ninguno') {
            document.querySelector('.errorGenero').innerHTML = 'Tienes que seleccionar un genero'
            errores = 1
        }
        else {
            document.querySelector('.errorGenero').innerHTML = ''
        }


        let descripcion = document.querySelector('#descripcion_pista')
        let errorDescripcion = document.querySelector('.error_descripcion')
        if (descripcion.value == '') {
            console.log('descripcion: ' + descripcion.value)
            errorDescripcion.innerHTML = 'Tienes que agregar una descripcion para el album'
            errores = 1

            if (descripcion.value.length < 20) {
                errorDescripcion.innerHTML += '<br> La descripción debe contener al menos 20 caracteres'
                errores = 1
            }
        }
        else {
            errorDescripcion.innerHTML = ''
        }



        let precio = document.querySelector('#precio_pista')
        let errorPrecio = document.querySelector('.error_precio')
        if (precio.value == '') {
            errorPrecio.innerHTML = 'Tienes que ingresar un precio'
            errores = 1
        }
        else {
            errorPrecio.innerHTML = ''
        }


        let moneda = document.querySelector('.checkout-moneda')
        if (moneda.value == 'Ninguno') {
            document.querySelector('.error_moneda').innerHTML = 'Tienes que seleccionar la moneda'
            errores = 1
        }
        else {
            document.querySelector('.error_moneda').innerHTML = ''
        }

        console.log(errores)
        if (errores == 0) {
            formulario.submit();
        }


        let imagen = document.querySelector('#imagen_pista')
        let errorImagen = document.querySelector('.error_imagen')
        if (imagen.value == '') {
            errorImagen.innerHTML = 'Ingrese una imagen'
            errores=1
        }
        else {
            const file = imagen.files[0];
            console.log(file.name.split('.').pop() + 'extension')
            console.log(imagen.value)

            errorImagen.innerHTML = ''
        }

    })



}