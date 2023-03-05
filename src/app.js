const express = require('express');
const path = require ("path");
const app = express();

/*Routes*/
const mainRoutes = require("./routes/main");
const payingRoutes = require("./routes/paying");
const productsRoutes = require("./routes/products");
const generesRoutes = require("./routes/generes");
/*-----*/

const port = 3030 || process.env.PORT; //Lo inverti para que tome al puerto 3030 primero

/*Template engine configuration*/
app.set('views', path.join(__dirname, 'views')) 

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("Running on: http://localhost:"+port);
})

app.use(express.static(path.join(__dirname,'../public')));

app.use("/",mainRoutes);
app.use("/checkout",payingRoutes);
app.use("/product",productsRoutes);
app.use("/generes",generesRoutes);

app.get("/editProduct", (req,res)=>{
    res.render("editProduct")
})
