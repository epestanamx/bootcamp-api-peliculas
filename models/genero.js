'use strict';
module.exports = function(sequelize, DataTypes) {
  const Genero = sequelize.define('Genero', {
    idGenero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_GENERO',
    },
    nombre: {
      type: DataTypes.STRING,
      field: 'NOMBRE',
      allowNull: false
    }
  }, {
    timestamps: false,
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'GENEROS'
  });

  Genero.associate = function(models) {
    Genero.hasMany(models.Pelicula, {foreignKey: 'idPelicula'});
  };
  return Genero;
};
