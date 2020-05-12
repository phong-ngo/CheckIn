const mongoose = require('mongoose');
// const session = require('express-session');
const db = (app) => {

      var connectOptions = {
        useNewUrlParser: true, 
        useUnifiedTopology: true,  
        useCreateIndex: true,
        useFindAndModify: false
      };
      mongoose.Promise = global.Promise;
      
      mongoose.connect(process.env.DATABASE_URL, connectOptions)
        .then(
        () => { 
          console.log('Connected to database');
        },
        err => { 
          console.log('Can\'t connect to database: '+err);
        }
      );
}
module.exports = db;