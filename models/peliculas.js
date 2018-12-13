'use strict';
module.exports = function(sequelize, DataTypes) {
  const Pelicula = sequelize.define('Pelicula', {
    Pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_consultorio',
    },
    nombre: {
      type: DataTypes.STRING,
      field: 'nombre',
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      field: 'direccion',
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      field: 'telefono',
      allowNull: false
    },
    correoElectronico: {
      type: DataTypes.STRING,
      field: 'correo_electronico',
      allowNull: false
    },
    paginaWeb: {
      type: DataTypes.STRING,
      field: 'pagina_web',
      allowNull: false
    },
    fechaCreacion: {
      type: DataTypes.STRING,
      field: 'fecha_creacion'
    },
    fechaActualizacion: {
      type: DataTypes.STRING,
      field: 'fecha_actualizacion'
    },
    fechaEliminacion: {
      type: DataTypes.STRING,
      field: 'fecha_eliminacion'
    }
  }, {
    timestamps: false,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'peliculas'
  });

  return Pelicula;
};
