
const mainController = {
    front: (req, res) => {
        res.render("frontPage");
    },
    aboutUs: (req,res) =>{
        res.render("aboutUs");
    }
}

module.exports = mainController;