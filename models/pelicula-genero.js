'use strict';
module.exports = function(sequelize, DataTypes) {
  const PeliculaGenero = sequelize.define('PeliculaGenero', {
    idPelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_PELICULA',
    },
    idGenero: {
      type: DataTypes.STRING,
      field: 'ID_GENERO',
      allowNull: false
    }
  }, {
    timestamps: false,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'PELICULAS_GENEROS'
  });

  return PeliculaGenero;
};
