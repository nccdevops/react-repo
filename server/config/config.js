module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./server/db/development_db_file.db",
  },
  test: {
    dialect: "sqlite",
    storage: "db/test_db_file.db",
  },
  production: {
    dialect: "sqlite",
    storage: "db/production_db_file.db",
  },
};
