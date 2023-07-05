// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require("../data/database");

const Reserva = sequelize.define(
  "Reserva",
  {
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: { type: DataTypes.DATE },
  },
  {
    sequelize,
    paranoid: true,
    modelName: "Reserva",
    tableName: "reservas_vuelos",
    underscored: true,
  }
);

Reserva.sync()

module.exports = Reserva;
