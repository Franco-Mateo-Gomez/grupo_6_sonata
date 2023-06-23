let form = document.querySelector(".modal-form-container")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    errores = 0

    let nombre = document.querySelector("#card_name")
    let errorName = document.querySelector(".error_name")
    if (nombre.value == '') {
        errorName.innerHTML = 'Ingrese nombre completo del titular'
        errores = 1
    }
    else {
        errorName.innerHTML = ''
    }


    let tarjeta = document.querySelector("#card_number")
    let errorTarjeta = document.querySelector(".error_tarjeta")
    if (tarjeta.value == '') {
        errorTarjeta.innerHTML = 'Ingrese el número de la tarjeta'
        errores = 1
    }
    else {
        errorTarjeta.innerHTML = ''
    }


    let vencimiento = document.querySelector("#card_date")
    let errorVencimiento = document.querySelector(".error_vencimiento")
    if (vencimiento.value == '') {
        errorVencimiento.innerHTML = 'Ingrese la fecha de expiración'
        errores = 1
    }
    else {
        errorVencimiento.innerHTML = ''
    }


    let codigo = document.querySelector("#card_cvc")
    let errorCodigo = document.querySelector(".error_codigo")
    if (codigo.value == '') {
        errorCodigo.innerHTML = 'Ingrese el codigo de seguridad de la tarjeta'
        errores = 1
    }
    else {
        errorCodigo.innerHTML = ''
    }

    console.log(errores)
    if (errores == 0) {
        form.submit();
    }


})