const { validationsResult } = require("express-validator");

const comprasController = {

    compraView: (req, res) => {
        res.render("products/productCart");
    },

    processCompras: (req, res) => {
        const resultValidation = validationsResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("products/productCart", {
                errors: resultValidation.mapped()
            })
        }
        else {
            res.render("/login");
        }
    }

}

module.exports = comprasController;