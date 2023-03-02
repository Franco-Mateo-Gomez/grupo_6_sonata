const express = require('express');
const path = require ("path");
const app = express();

/*Routes*/
const mainRoutes = require("./routes/main");
const payingRoutes = require("./routes/paying");
const productsRoutes = require("./routes/products");
const generesRoutes = require("./routes/generes");
/*-----*/

const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("Running on: http://localhost:"+port);
})

app.use(express.static(path.join(__dirname,'../public')));

app.use("/",mainRoutes);
app.use("/checkout",payingRoutes);
app.use("/productdetail",productsRoutes);
app.use("/generes",generesRoutes);
