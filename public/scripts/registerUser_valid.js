// Register validations
window.addEventListener("load", () => {

    let form = document.querySelector(".formulario_registro")

    form.addEventListener("submit", (event) => {

        let userNameField = document.querySelector("#user_name")
        let userNameErrors = document.querySelector(".user_name_errors_front");

        let fullNameField = document.querySelector("#client_fullname")
        let fullNameErrors_front = document.querySelector(".fullname_errors_front");

        if (userNameField.value.length <2) {
            userNameErrors.innerHTML = "Este campo debe tener 2 caracteres como mínimo"
        }
        else{
            userNameErrors.innerHTML = ""
        }

        if (fullNameField.value.length <2) {
            fullNameErrors_front.innerHTML = "Este campo debe tener 2 caracteres como mínimo"
        }
        else{
            fullNameErrors_front.innerHTML = ""
        }

    })

})