'use strict';
const express = require('express');
const bodyParser = require('body-parser');

// Instancia de express
const app = express();

// application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// application/json parser
app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.status(200).send({msg: 'Servicio iniciado.'});
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
