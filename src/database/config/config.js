module.exports = {
  "development": {
    "username": "root",
    "password": "", // Modificar si la contraseña root es distinta
    "database": "SONATA2", //Modificar si es q lo llamamos diferente
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
