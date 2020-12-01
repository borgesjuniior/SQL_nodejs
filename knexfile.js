// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'tintadrew'
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'seeds')
    }
    
  }

};
