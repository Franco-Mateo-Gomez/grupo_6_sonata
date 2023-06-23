const {validationResult} = require("express-validator");

const pagoController ={
    pagoView: (req, res) =>{
        res.render("products/productCart");
    },

    processPago: (req, res) =>{
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render("products/productCart", {
                errors: resultValidation.mapped()
            })
        }
        else{
            res.render("/login");
        }
    }

}

module.exports = pagoController;