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
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
