const config = require('./config.json');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 2020;
const connection = process.env.MONGODB_URI || 'mongodb://localhost/uapp';

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

mongoose.Promise = require('bluebird');

mongoose.connect(
  connection,
  { useNewUrlParser: true },
  err => {
    if (err) console.log(err);
    else {
      console.log('Successfully connected to DB');
      app.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });
    }
  }
);
