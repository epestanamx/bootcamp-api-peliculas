'use strict';
const router = require('express').Router();
const generosController = require('../controllers/generos.js');

router.route('/')
  .get(generosController.get)
  .post(generosController.post);

router.route('/:idGenero')
  .get(generosController.get)
  .put(generosController.put)
  .delete(generosController.delete);

module.exports = router;
