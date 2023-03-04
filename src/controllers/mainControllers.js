
const mainController={
    index:(req,res) =>{
        res.render("index");
    },
    login:(req,res) =>{
        res.render("login");
    },
    register:(req,res) =>{
        res.render("register");
    },
    aboutUs:(req,res) =>{
        res.render("aboutUs");
    },
    front:(req,res) =>{
        res.render("frontPage");
    }
}

module.exports = mainController;