let db = require('../database/models')

async function recordameMiddleware(req,res,next) {

    if(req.cookies && req.cookies.recordame){
        let userOrEmail = req.cookies.recordame;
        
        const filtraUsuario = await db.Users.findOne({where:{userName:userOrEmail}}) || 
        await db.Users.findOne({where:{email:userOrEmail}});
        
        if(filtraUsuario){
            req.session.user_data=userOrEmail;
        }

        if(req.session.user_data){
            res.locals.user_data = req.session.user_data;
        }
        
    }
    next();
}

module.exports = recordameMiddleware