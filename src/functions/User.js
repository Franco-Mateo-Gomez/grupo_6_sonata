// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que se quiere loguear por su mail 
// 3. Buscar a un usuario por su ID
// 4. Editar la informacion de un usuario
// 5. Eliminar a un usurio de la DB

const fs = require('fs');
const path = require('path')
const User = {
    
    fileName: path.join(__dirname,"./data/users.json"),
   
    //Función para traer a todos los usuarios de la DB y convertirlo en un objeto JS.
    getUsers: function(){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    //Función para generar un id unico a partir del ultimo usuario
    generateId:function(){
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    //Función para buscar a un usuario por su ID.
    findById: function(id){
        let allUsers = this.getUsers();

        let userFound = allUsers.find((user)=>{
            return user.id == id;
        });

        return userFound;
    },

    //Función que me permite acceder a los distintas propiedades de un usuario.
    findByField: function(field, value){
        let allUsers = this.getUsers();
        let userFound = allUsers.find((user)=>{
            return user[field] === value;
        });
        return userFound;
    },
    
    create: function(userData){
        let allUsers = this.getUsers();

        let newUser = {
            id: this.generateId(),
            ...userData
        };

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    modify: function(idUserSession, datosModificados){
        let allUsers = this.getUsers();
        let usuario = allUsers.findIndex( user => user.id == idUserSession);
        
        allUsers[usuario].nombreArtista = datosModificados.user_name;

        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    }
};

module.exports = User;