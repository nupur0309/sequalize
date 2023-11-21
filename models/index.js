const { Sequelize } = require('sequelize');
const {initModels} = require('../models/init-models')
// Import and synchronize your models

const sequelize = new Sequelize('emplyeedb', 'root',null, {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const models = initModels(sequelize)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  }) 
module.exports ={ sequelize,models};