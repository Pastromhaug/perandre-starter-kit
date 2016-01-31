module.exports = {
  entry: {
    bundle: "./src/main.js",
    test: "./src/main.test.js"
  },
  output: {
    filename: "src/build/[name].js"
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  }
};
