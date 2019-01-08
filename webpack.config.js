const path = require('path');

module.exports = { 
  module: {    
    rules: [   
      {
        test: /\.js$/,               
        exclude: /node_modules/,     
        use: {
          loader: 'babel-loader'    
        }
      },
      {
        test: /\.css$/,                     
        use: ['style-loader','css-loader']  
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,              
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      },
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
};