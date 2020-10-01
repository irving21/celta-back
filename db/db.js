const mysql = require('mysql');

module.exports = connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'dbcelta'
});
