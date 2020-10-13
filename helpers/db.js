const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  mongoose.connection.on('open', () => {
    console.log('MONGODB: Connected successfully');
  });
  mongoose.connection.on('error', (err) => {
    console.log(`MONGODB: Connected unsuccessfull ${err}`);
  });

  mongoose.Promise = global.Promise;
}
