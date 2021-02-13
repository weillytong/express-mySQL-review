const express = require('express');
// *** bodyParser makes it convenient to handle whatever data is being sent from client ot server
const bodyParser = require('body-parser');
// *** prevents any cors error; a catch-all
// *** cors errors happen when servers don't like it if you send requests to their servers from certain urls
// *** DON'T FORGET THE COORS MESSAGE
const cors = require('cors');
// *** gives you nice logs in your server whenever you get any requests
// *** e.g) GET /api/games/ 200 3.987.ms - 358
const path = require('path');
const morgan = require('morgan');
const router = require('./router.js');
const PORT = 3000;


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


// *** Set up our routes
app.use('/api', router);

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

// *** Testing if our server is using this /pizza route
app.get('/pizza', (req, res) => {
  res.send('you have visited pizza');
})



// *** you can set the port by just using app.listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
