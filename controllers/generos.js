'use strict';
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    const where = {};
    if(req.params.idGenero) {
      where.idGenero = req.params.idGenero;
    }

    const Generos = await models.Genero.findAll({
      include: [models.Pelicula],
      where: where
    });
    return res.status(200).send(Generos);
  },
  post: async (req, res) => {
    try {
      const genero = await models.Genero.create(req.body);

      return res.status(201).send(genero);
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible insertar el registro.'});
    }
  },
  put: async (req, res) => {
    try {
      let genero = await models.Genero.findById(req.params.idGenero);

      if(!genero) {
        return res.status(404).send({msg: 'Registro no encontrado.'});
      }

      genero = await genero.update(req.body);
      return res.status(200).send(genero);
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible actualizar el registro.'});
    }
  },
  delete: async (req, res) => {
    try {
      let genero = await models.Genero.findById(req.params.idGenero);

      if(!genero) {
        return res.status(404).send({msg: 'Registro no encontrado.'});
      }

      genero = await genero.destroy();
      return res.status(200).send({msg: 'Registro eliminado con exito.'});
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible eliminar el registro.'});
    }
  }
};
