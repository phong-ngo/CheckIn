require("@babel/register")({
    presets: ["@babel/preset-env" ],
  }
  );

  module.exports = {
    entry: ['babel-polyfill', './test.js'],
  
    output: {
      filename: 'bundle.js'       
    },
  
    module: {
      loaders: [
        { test: /\.jsx?$/, loader: 'babel', }
      ]
    }
  };
  // Import the rest of our application.
  module.exports = require('./app.js')
  module.exports = require("babel-core/register");
  module.exports = require("babel-polyfill");