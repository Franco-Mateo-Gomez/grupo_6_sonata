

let formulario = document.querySelector('.formulario_contraseña');
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let errores = 0

    let contrasenia = document.querySelector('#user_password')
    let errorContra = document.querySelector('.error_contra')
    if (contrasenia.value == '') {
        errorContra.innerHTML = 'Tienes que agregar una contraseña.'
        errores = 1
    }

    if (contrasenia.value.length < 8) {
        errorContra.innerHTML = 'La contraseña debe contener al menos 8 caracteres.'
        errores = 1

    }
    else {
        errorContra.innerHTML = ''
    }

    let confirmar = document.querySelector('#user_passwordConfirmation')
    let errorConfirmar = document.querySelector('.error_confirmar')
    if (confirmar.value != contrasenia) {
        errorConfirmar.innerHTML = 'La contraseña no es igual.'
        errores = 1
    }
    else {
        errorConfirmar.innerHTML = ''
    }

    console.log(errores)
    if (errores == 0) {
        formulario.submit();
    }

})

