'use strict';
module.exports = function(sequelize, DataTypes) {
  const Pelicula = sequelize.define('Pelicula', {
    idPelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_PELICULA',
    },
    titulo: {
      type: DataTypes.STRING,
      field: 'TITULO',
      allowNull: false
    },
    sinopsis: {
      type: DataTypes.STRING,
      field: 'SINOPSIS',
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING,
      field: 'IMAGEN',
      allowNull: true
    },
    anio: {
      type: DataTypes.INTEGER,
      field: 'ANIO',
      allowNull: false
    },
    idDirector: {
      type: DataTypes.STRING,
      field: 'ID_DIRECTOR',
      allowNull: false
    }
  }, {
    timestamps: false,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'PELICULAS'
  });

  return Pelicula;
};
