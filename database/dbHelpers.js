const db = require('./index.js');


// ** These dbHelpers are if there is a client request, this is how the model interacts with the database
const dbHelpers = {
  get: (callback) => {
    var getAll = 'SELECT * FROM Games';
    db.query(getAll, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  post: (req, callback) => {
    // *** body parser will condense all the req data and put it into the req.body object
    req.body = {name: 'asdfasd', rating: 123, description: 'dsdf'};
    var queryString = `INSERT INTO Games (names, rating, description) VALUES ('${req.body.name}', ${req.body.rating}, '${req.body.description}')`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  put: (req, callback) => {
    // *** syntax for UPDATE
    // *** req.params is a special object on req object that includes params; whatever you write after api/ (api is our router) is the params (in this cause params is :id)
    // *** e.g) localhost:3000/api/:id
    // *** we want to update at a specific id
    var queryString = `UPDATE Games SET name='${req.body.name}', rating=${req.body.rating}, description='${req.body.description}' WHERE id=${req.params.id}`
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  delete: (req, callback) => {
    db.query(`DELETE FROM Games WHERE id=${req.params.id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};

module.exports = dbHelpers;
