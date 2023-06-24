let formulario = document.querySelector('.checkout-form-container');
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let errores = 0

    let nombreCompleto = document.querySelector('#full_name')
    let errorName = document.querySelector('.error_nombre')
    if(nombreCompleto.value == ''){
         errorName.innerHTML = 'Tienes que agregar un nombre y apellido.'
         errores = 1
    }
    else{
        errorName.innerHTML = ''
    }


    let correoElectronico = document.querySelector('#email');
    let errorCorreo = document.querySelector('.error_correo')
    if(correoElectronico.value == ''){
         errorCorreo.innerHTML = 'Tienes que agregar un email.'
         errores = 1
    }
    else{
        errorCorreo.innerHTML = ''
    }

    let tarjeta = document.querySelector("#card_number")
    let errorTarjeta = document.querySelector(".error_tarjeta")
    if (tarjeta.value == '') {
        errorTarjeta.innerHTML = 'Ingrese el número de la tarjeta.'
        errores = 1

        if(tarjeta.value.length == 16){
            errorTarjeta.innerHTML = 'Debe contener 16 caracteres.'
        errores = 1
        }
    }
    else {
        errorTarjeta.innerHTML = ''
    }

    let vencimiento = document.querySelector("#card_date")
    let errorVencimiento = document.querySelector(".error_vencimiento")
    if (vencimiento.value == '') {
        errorVencimiento.innerHTML = 'Ingrese la fecha de expiración.'
        errores = 1
    }
    else {
        errorVencimiento.innerHTML = ''
    }

    let codig = document.querySelector("#card_cvc")
    let errorCodig = document.querySelector(".error_codig")
    if (codig.value == '') {
        errorCodig.innerHTML = 'Ingrese el codigo.'
        errores = 1

        if(codig.value.length == 3){
            errorCodig.innerHTML = 'Debe contener 3 caracteres.'
        errores = 1
        }
    }
    else {
        errorCodig.innerHTML = ''
    }

    console.log (errores)
    if (errores == 0){
     formulario.submit();
    }



})



