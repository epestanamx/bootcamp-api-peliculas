'use strict';
const router = require('express').Router();
const directoresController = require('../controllers/directores.js');

router.route('/')
  .get(directoresController.get)
  .post(directoresController.post);

router.route('/:idDirector')
  .get(directoresController.get)
  .put(directoresController.put)
  .delete(directoresController.delete);

module.exports = router;
