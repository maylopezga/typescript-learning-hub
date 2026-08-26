module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "entry": {
    "index": "./index"
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  devServer: {
    static: './',
    port: 3000,
    hot: true,
    open: false
  }
};