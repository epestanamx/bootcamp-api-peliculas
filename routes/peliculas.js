'use strict';
const router = require('express').Router();
const peliculasController = require('../controllers/peliculas.js');

router.route('/')
  .get(peliculasController.get);

module.exports = router;
