const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./models/User.model");
const ProblemModel = require("./models/Problem.model");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  console.log("Connection established with database");
}).catch((err) => {
  console.log("Unable to connect to database", err);
});

(async () => await sequelize.sync({ alter: true }))();  

const User = UserModel(sequelize, DataTypes);
const Problem = ProblemModel(sequelize, DataTypes);

User.hasMany(Problem);
Problem.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Problem,
};