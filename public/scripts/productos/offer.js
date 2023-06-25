window.addEventListener("load", () => {

    let offerInput = document.querySelector("#offerLabel");
    let offerContainer = document.querySelector(".input_offer");
    let inputPrice = document.querySelector("#precio_pista");
    let offerOutput = document.querySelector("#offerOutput")
    let coinInput = document.querySelector(".checkout-moneda");

    offerInput.addEventListener("input", () =>{

        switch (coinInput.value) {
            case "USD":
                if(inputPrice.value <2) {
                    offerContainer.classList.add("delete_input_offer")
                }
                else{
                    offerContainer.classList.remove("delete_input_offer")
                    offerOutput.innerHTML = offerInput.value + "%";
                }
                break;
            case "ARS":
                if(inputPrice.value <100) {
                    offerContainer.classList.add("delete_input_offer")
                }
                else{
                    offerContainer.classList.remove("delete_input_offer")
                    offerOutput.innerHTML = offerInput.value + "%";
                }
                break;
            case "EUR":
                if(inputPrice.value <3) {
                    offerContainer.classList.add("delete_input_offer")
                }
                else{
                    offerContainer.classList.remove("delete_input_offer")
                    offerOutput.innerHTML = offerInput.value + "%";
                }
                break;
        }  
        
    })

    inputPrice.addEventListener("input", () =>{
        if (inputPrice.value > 2 || inputPrice.value > 100 || inputPrice.value > 3) {
            offerContainer.classList.remove("delete_input_offer");
          }
    })

})