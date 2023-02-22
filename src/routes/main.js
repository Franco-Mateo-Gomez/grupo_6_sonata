/* Project -> Main Routes */

let express = require('express');
let router = express.Router();
const path = require ("path");

/*Principal page*/
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/main.html"));
})

/*Sub pages*/
router.get("/header",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/header.html"));
})

router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/login.html"));
})

router.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/register.html"));
})

module.exports=router;