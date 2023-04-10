const path = require("path");
const fs = require("fs")

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

function recordameMiddleware(req,res,next) {

    if(req.cookies.recordame !=undefined && req.session.user_data == undefined){
        const filtraUsuario = datausers.find(user => user.email == req.cookies.recordame || user.nombreArtista == req.cookies.recordame);
        req.session.user_data=filtraUsuario;
    }
    next();
}

module.exports = recordameMiddleware