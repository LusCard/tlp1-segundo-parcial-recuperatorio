// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require("../database");

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
    date: { 
      type: DataTypes.DATE,
      allowNull: false
    },
    flight_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flight_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
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
