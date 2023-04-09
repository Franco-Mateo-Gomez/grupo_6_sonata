/*Import modules*/
const express = require('express');
const path = require ("path");
const methodOverride = require('method-override');
const session = require("express-session")
const bodyParser = require('body-parser');
/*-----------*/

/*Routes*/
const mainRoutes = require("./routes/main");
const payingRoutes = require("./routes/paying");
const productsRoutes = require("./routes/products");
const generesRoutes = require("./routes/generes");
/*-----*/

/*Express Methods declaration*/
const app = express();

/*Port declaration*/
const port = 3030 || process.env.PORT;

/*Template engine configuration*/
app.set('views', path.join(__dirname, 'views')) 
app.set("view engine","ejs");

/*Port configuration*/
app.listen(port,()=>{
    console.log("Running on: http://localhost:"+port);
})

/*Use Method Override*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


/*Use Express Session*/
app.use(session({
    secret:"SECRETO",
    resave: false,
    saveUninitialized:false
}));

/*Use Public folder*/
app.use(express.static(path.join(__dirname,'../public')));

/*Use routes*/
app.use("/",mainRoutes);
app.use("/checkout",payingRoutes);
app.use("/product",productsRoutes);
app.use("/generes",generesRoutes);


/*Page NOT FOUND*/
app.use((req,res,next) => {
    res.status(404).render('not-found')
})
