const express = require('express');
const app = express();

const path = require ("path");
const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("Running on: "+port);
})

app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname,"/app/views/main.html"));
})

app.get("/header",(req,res)=>{
    res.sendFile(path.join(__dirname,"/app/views/header.html"));
})