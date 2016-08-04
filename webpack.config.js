module.exports = {
    entry: [
      "./src/js/index.js",
    ],
    output: {
        path: __dirname + "/public/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.js$/,   loader: "babel-loader", exclude: /node_modules/ },
        ]
    }
};
