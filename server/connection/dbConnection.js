const mongoose = require('mongoose');
const config = require('./config');

class MongoDb {
  constructor() {}

  connect() {
    mongoose.connect(`${config.mongodb_url}/${config.mongo_dbname}`).then(() => {
      console.log('Successfully connected to database : ' + config.mongo_dbname);
    }).catch(err => {
      console.error('Connection error : ' + err);
    });
  }
}
module.exports = MongoDb;