let formu = document.querySelector('.formulario_registro');
formu.addEventListener('submit', (e) => {
    e.preventDefault()
    let errores = 0

    let nombreUsuario = document.querySelector('#user_name')
    let errorUsuario = document.querySelector('.error_usuario')
    if (nombreUsuario.value == '') {
        errorUsuario.innerHTML = 'Tienes que agregar un nombre de usuario.'
        errores = 1
    }
    else {
        errorUsuario.innerHTML = ''
    }

    let nombreCompleto = document.querySelector('#client_fullname')
    let errorNombre = document.querySelector('.error_nombre')
    if (nombreCompleto.value == '') {
        errorNombre.innerHTML = 'Tienes que agregar un nombre y apellido.'
        errores = 1
    }
    else {
        errorNombre.innerHTML = ''
    }


    console.log(errores)
    if (errores == 0) {
        formu.submit();
    }



})



