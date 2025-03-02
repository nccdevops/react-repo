import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.js")[env];

const sequelize = new Sequelize(config);

const db = {};
// const sequelize = new Sequelize(process.env[config.use_env_variable], {
//   dialect: "sqlite",
// });

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js",
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
