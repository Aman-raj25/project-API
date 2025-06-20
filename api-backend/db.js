// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '****',
  database: 'student_db',
});

module.exports = pool.promise();
