const router = require('express').Router();
const controllers = require('./controllers.js');

// Create get, post, put, and delete routes here
// ** router.route(<specify endpoint>, )
router
  // *** creating a /games route
  .route('/games')
  // *** after .route you specific whatever methods you want
  // *** we just pass in the controllers.get function
  .get(controllers.get)
  .post(controllers.post)

router
  .route('/games/:id')
  .put(controllers.put)
  .delete(controllers.delete)

module.exports = router;
