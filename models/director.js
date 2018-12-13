'use strict';
module.exports = function(sequelize, DataTypes) {
  const Director = sequelize.define('Director', {
    idDirector: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_DIRECTOR',
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
    tableName: 'DIRECTORES'
  });

  return Director;
};
