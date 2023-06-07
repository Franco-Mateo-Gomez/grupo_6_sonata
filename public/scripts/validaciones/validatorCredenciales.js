window.onload = function(){

    let formulario = document.querySelector('.formulario_registro');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        let errores = 0

        let nombreUsuario = document.querySelector('#user_name')
        let errorUsuario = document.querySelector('.error_usuario')
        if(nombreUsuario.value == ''){
             errorUsuario.innerHTML = 'Tienes que agregar un nombre de usuario'
             errores = 1
        }
        else{
            errorName.innerHTML = ''
        }

        let correoElectronico = document.querySelector('#user_email');
        let errorCorreo = document.querySelector('.error_correo')
        if(correoElectronico.value == ''){
             errorCorreo.innerHTML = 'Tienes que agregar un email'
             errores = 1
        }
        else{
            errorCorreo.innerHTML = ''
        }

        let nombreCompleto = document.querySelector('#client_fullname')
        let errorNombre = document.querySelector('.error_nombre')
        if(nombreCompleto.value == ''){
             errorNombre.innerHTML = 'Tienes que agregar un nombre y apellido'
             errores = 1
        }
        else{
            errorNombre.innerHTML = ''
        }


        console.log (errores)
        if (errores == 0){
         formulario.submit();
        }
    
    
    
    })
}


