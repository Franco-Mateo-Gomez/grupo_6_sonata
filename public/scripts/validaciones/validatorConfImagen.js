window.onload = function () {

    let form = document.querySelector('.formulario_editarImagen')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        errores = 0


        let imagen = document.querySelector('#user_image')
        let errorImagen = document.querySelector('.errorImagen')
        if (imagen.value == '') {
            errorImagen.innerHTML = 'Ingrese una imagen'
            errores = 1
        }
        else {
            const file = imagen.files[0];
            console.log(file.name.split('.').pop() + 'extension')
            console.log(imagen.value)

            errorImagen.innerHTML = ''
        }

        console.log(errores)
        if (errores == 0) {
            form.submit();
        }

    })
}