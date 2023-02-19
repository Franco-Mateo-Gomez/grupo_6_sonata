/* Project -> Main Routes */

let express = require('express');
let router = express.Router();
const path = require ("path");

/*Principal page*/
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
})

/*Sub pages*/
router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/login.html"));
})

module.exports = router;