const express = require('express');
const path = require ("path");

/*Routes*/
const mainRoutes = require('./routes/main.js')
const payingRoutes = require('./routes/paying.js')
/*-----*/

const app = express();

const port = process.env.PORT || 3030;

app.listen(port,()=>{
    console.log("Running on: http://localhost:"+port);
})

app.use(express.static(path.join(__dirname,'../public')));
app.use("/",mainRoutes);
app.use("/checkout",payingRoutes);