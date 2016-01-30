module.exports = {
  entry: {
    bundle: "./src/main.js",
    test: "./src/main.test.js"
  },
  output: {
    filename: "src/build/[name].js"
  }
}
