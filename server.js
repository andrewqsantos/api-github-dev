const express = require('express');

const app = express();

app.use('/', express.static(''))

app.listen(process.env.PORT || 300, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Tudo funcionando certinho');
});
