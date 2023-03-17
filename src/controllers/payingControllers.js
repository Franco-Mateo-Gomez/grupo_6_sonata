const productList=[
    {
        id:1,
        image:"/images/imagen_album3.JPG",
        name:"Pista 1",
        precio:5.00,
        moneda:"ARS"
    },
    {
        id:2,
        image:"/images/imagen_album2.JPG",
        name:"Pista 2",
        precio:3.00,
        moneda:"ARS"
    },
    {
        id:3,
        image:"/images/imagen_album5.JPG",
        name:"Pista 3",
        precio:6.00,
        moneda:"ARS"
    }
]

const payingController={
    checkout:(req,res) =>{
        res.render("products/productCart",{productList:productList});
    }
}

module.exports = payingController;