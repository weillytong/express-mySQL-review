const dbHelpers = require('../database/dbHelpers.js');

const controllers = {
  get: (req, res) => {
    res.send('Get!');
  },
  post: (req, res) => {
    res.send('Post!');
  },
  put: (req, res) => {
    res.send('Put!');
  },
  delete: (req, res) => {
    res.send('Delete!');
  }
};

module.exports = controllers;
