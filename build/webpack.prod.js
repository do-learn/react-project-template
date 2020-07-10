const Config = require("./config");

const config = Config("production");

module.exports = {
  ...config,
};
