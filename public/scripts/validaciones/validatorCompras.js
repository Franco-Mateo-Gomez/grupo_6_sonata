

    let formulario = document.querySelector('.checkout-form-container');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        let errores = 0

        let nombreCompleto = document.querySelector('#full_name')
        let errorName = document.querySelector('.error_nombre')
        if(nombreCompleto.value == ''){
             errorName.innerHTML = 'Tienes que agregar un nombre y apellido'
             errores = 1
        }
        else{
            errorName.innerHTML = ''
        }


        let correoElectronico = document.querySelector('#email');
        let errorCorreo = document.querySelector('.error_correo')
        if(correoElectronico.value == ''){
             errorCorreo.innerHTML = 'Tienes que agregar un email'
             errores = 1
        }
        else{
            errorCorreo.innerHTML = ''
        }


        let pais = document.querySelector('#select-checkout-country');
        if (pais.value == 'Ninguno'){
            document.querySelector('.error_pais').innerHTML = 'Tienes que seleccionar un pais' 
            errores = 1
        }
        else{
            document.querySelector('.error_pais').innerHTML = ''
        }


        let ciudad = document.querySelector('#city')
        let errorCiudad = document.querySelector('.error_ciudad')
        if (ciudad.value == ''){ 
            errorCiudad.innerHTML = 'Tienes que agregar una ciudad'
            errores = 1
        }
        else{
            errorCiudad.innerHTML = ''
        }


        let codigo = document.querySelector('#postal');
        let errorCodigo = document.querySelector('.error_codigo')
        if (codigo.value == ''){ 
            errorCodigo.innerHTML = 'Tienes que agregar tu codigo postal'
            errores = 1
        }
        else{
            errorCodigo.innerHTML = ''
        }


        let direccion = document.querySelector('#address');
        let errorDireccion = document.querySelector('.errorDireccion')
        if (direccion.value == ''){ 
            errorDireccion.innerHTML = 'Tienes que agregar tu dirección'
            errores = 1
        }
        else{
            errorDireccion.innerHTML = ''
        }


        console.log (errores)
        if (errores == 0){
         formulario.submit();
        }
    
    
    
    })



