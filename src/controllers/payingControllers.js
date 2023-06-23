const userFunctions = require("../functions/User");

let productList = [{}]
const payingController={
    checkout: async (req,res) =>{
        if(!req.session.user_data){
            res.redirect("/login");
        }
        const findUser = await userFunctions.findInDB(req, res);
        res.render("products/productCart",{productList:productList, user: findUser});
    }
}

module.exports = payingController;