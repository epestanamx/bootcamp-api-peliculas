'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const peliculasRoutes = require('./routes/peliculas');
const directoresRoutes = require('./routes/directores');
const generosRoutes = require('./routes/generos');

// Instancia de express
const app = express();

// application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// application/json parser
app.use(bodyParser.json());

app.use('/peliculas', peliculasRoutes);
app.use('/directores', directoresRoutes);
app.use('/generos', generosRoutes);

app.get('/', (req, res) => {
  res.status(200).send({msg: 'Servicio iniciado.'});
});

app.use((req, res, next) => {
  return res.status(404).send({msg: 'Ruta no encontrada.'});
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000.');
});
