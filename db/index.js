const Sequelize = require("sequelize");
const conf = config.dbOptions;

db = new Sequelize(conf.database, conf.username, conf.password, {
  host: conf.host,
  dialect: conf.dialect,
  logging: false,
  dialectOptions: { multipleStatements: true }
});

require("./models/users.js");
require("./models/payments.js");

db["User"].hasMany(db["Payment"], {
  as: "payments",
  foreignKey: "user_id"
});

db["Payment"].belongsTo(db["User"], {
  as: "user",
  foreignKey: "user_id"
});