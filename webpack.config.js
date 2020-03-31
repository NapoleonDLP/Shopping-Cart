module.exports = {
  entry: __dirname + '/src/index.jsx',
  // mode: "development",
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  },
  output:{
    filename: 'bundle.js',
    path: __dirname + "/dist"
  }
  // devServer: {
  //   contentBase: path.join(__dirname, "public/"),
  //   port: 3000,
  //   publicPath: "http://localhost:3000/dist/",
  //   hotOnly: true
  // },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
};
