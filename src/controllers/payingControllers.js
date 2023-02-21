const path = require ("path");

const payingController={
    checkout:(req,res) =>{
        res.sendFile(path.join(__dirname,"../views/productCart.html"));
    }
}

module.exports = payingController;