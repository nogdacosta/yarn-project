module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    publicPath: "dist",
    filename: "bundle.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};