/* Project -> Paying Routes */

let express = require('express');
let router = express.Router();
const path = require ("path");

/*Principal page*/
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/productCart.html"));
})

module.exports = router;