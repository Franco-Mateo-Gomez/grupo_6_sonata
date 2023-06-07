const { Op } = require('sequelize');
let db = require('../database/models');

async function recordameMiddleware(req, res, next) {
  if (req.cookies && req.cookies.recordame) {
    let userOrEmail = req.cookies.recordame;

    if (req.session.user_data) {
      res.locals.user_data = req.session.user_data;
    } else {
      const filtraUsuario = await db.Users.findOne({
        where: {
          [Op.or]: [
            { userName: userOrEmail },
            { email: userOrEmail }
          ]
        }
      });

      if (filtraUsuario) {
        req.session.user_data = userOrEmail;
        res.locals.user_data = req.session.user_data;
      }
    }
  }

  next();
}

module.exports = recordameMiddleware;
