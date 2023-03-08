
const generesRock=[
    {
        name:"Skrillex",
        image:"/images/imagen_album3.JPG",
    },
    {
        name:"Mona Lisa",
        image:"/images/imagen_album2.JPG",
    },
    {
        name:"Carl",
        image:"/images/imagen_album4.JPG",
    }
]

const generesController={
    rock:(req,res) =>{
        res.render("generesRock",{generesRock:generesRock});
    }
}

module.exports = generesController;