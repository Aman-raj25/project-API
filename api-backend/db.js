// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3225',
  database: 'student_db',
});

module.exports = pool.promise();
