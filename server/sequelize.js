const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./models/User.model");

pg.defaults.ssl = true;
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

(async () => await sequelize.sync({ alter: true }))();  

const User = UserModel(sequelize, DataTypes);

module.exports = {
  User,
};