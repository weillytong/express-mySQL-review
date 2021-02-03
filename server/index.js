const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');
const PORT = 3000;
const app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});