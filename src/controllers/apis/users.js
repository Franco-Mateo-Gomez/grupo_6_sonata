
let db = require ("../../database/models")

const apiUsersController = {
    loadUsers: async (req,res) => {

        let Users = await db.Users.findAll()
        let Contador = Users.length;
        let infoUsers = Users.map(user =>{
            let data = {
                id: user.id,
                name: user.userName,
                email: user.email,
                image: user.image,
                isComposer: user.isComposer,
                detail: "/api/users/" + user.id,
            }

            return data;

        })
        let addDetailInUser = Users.map(user => {
            const userData = user.toJSON(); // Convert to JSON version
            userData.detail = "/api/users/" + user.id; // Add new property [detail]
            return userData;
        }) 
        
        
        let data = {
            count: Contador,
            Users: infoUsers,
        }
        res.json(data)
    },
    loadUser: async (req, res) => {
        let idUser = req.params.id 
        let User = await db.Users.findByPk (idUser)
        let data;
        if(User){
            data = {
                id: User.id,
                name: User.userName,
                email: User.email,
                image: User.image,
                description: User.description,
                isComposer: User.isComposer,
            }
        }
        else{
            data = {
                id: "0",
                name: "No Existe",
                email: "No Existe",
                image: "No Tiene",
                description: "No Tiene",
                isComposer: null,
            }
        }
        res.json(data)
    }
}


module.exports = apiUsersController;