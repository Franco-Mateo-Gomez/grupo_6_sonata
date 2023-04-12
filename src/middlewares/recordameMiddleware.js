const path = require("path");
const fs = require("fs")

/*Import JSON's*/
const datausersJSON = path.join(__dirname, '../model/data/users.json');
const datausers = JSON.parse(fs.readFileSync(datausersJSON, 'utf-8'));

function recordameMiddleware(req,res,next) {

    if(req.cookies && req.cookies.recordame){
        let userOrEmail = req.cookies.recordame;
        let filtraUsuario = datausers.find(user => user.email == userOrEmail || user.nombreArtista == userOrEmail);
        
        if(userOrEmail){
            req.session.user_data=filtraUsuario;
        }

        if(req.session.user_data){
            res.locals.user_data = req.session.user_data;
        }
        
    }
    next();
}

module.exports = recordameMiddleware