const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/game')
  .get(controllers.get)
  .post(controllers.post)

router
  .route('/game/:id')
  .delete(controllers.delete)

module.exports = router;