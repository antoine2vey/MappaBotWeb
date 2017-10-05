const env = require('dotenv');

const initConfig = () => {
  env.config();
};

module.exports = {
  initConfig,
};
