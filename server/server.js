const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'To-do app'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'A',
      age: 1
    },
    {
      name: 'B',
      age: 2
    },
    {
      name: 'C',
      age: 3
    }
  ]);
});

app.listen(3000);
module.exports.app = app;
