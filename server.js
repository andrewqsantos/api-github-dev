const express = require('express');
const { resolve, dirname } = require('path');

const app = express();

app.use('/', express.static(resolve(--dirname, '.build')));

app.listen(process.env.PORT || 300, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Tudo funcionando certinho');
});
