const passwdSQL = '45432465' || '' || null || 'root'

module.exports = {
  "development": {
    "username": "root",
    "password": '',
    "database": "sonata", //Modificar si es q lo llamamos diferente
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
