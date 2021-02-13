const dbHelpers = require('../database/dbHelpers.js');

const controllers = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if (err) {
        throw err;
        // *** need to res.end to end our http request. always send status if you res.end or res.send
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  post: (req, res) => {
    dbHelpers.post(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
    res.send('Post!');
  },
  put: (req, res) => {
    dbHelpers.put(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  },
  delete: (req, res) => {
    dbHelpers.delete(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    })
  }
};

module.exports = controllers;
