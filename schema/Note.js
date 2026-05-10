const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Note = sequelize.define(
  "Note",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "judul",
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "isi",
      validate: {
        notEmpty: true,
      },
    },
    tanggalDibuat: {
      type: DataTypes.DATE,
      field: "tanggal_dibuat",
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "notes",
    timestamps: false,
  },
);

module.exports = Note;
