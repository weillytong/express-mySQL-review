const mysql = require('mysql');
const database = 'gamesDB';

const connection = mysql.createConnection({
  username: 'root',
  password: 'mysql',
  database: database
});

connection.connect((err) => {
  if (err) {
    console.log('line 11', err);
  }
});

// *** Use the test provided by the docs
connection.query('SELECT 1+1 as solution', function (err, results, fields) {
  if (err) {
    console.log(err);
  };
  console.log('The solution is:', results[0].solution);
})

module.exports = connection;
