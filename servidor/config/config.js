const mysql = require('mysql');
const db    =   mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   'root',
    database:   'insurance_db',
});

db.connect((err) => {
    if(err) throw err;
    console.log('La base de datos se conectó con éxito.');
});

module.exports  =   db;