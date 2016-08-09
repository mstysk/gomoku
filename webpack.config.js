const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + "/public/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.js$/,   loader: "babel-loader", exclude: /node_modules/ },
          { test: /\.sass$/, 
            loaders: ["style", "css?modules&importLoaders=2", "sass", "bulma?theme=node_modules/bulma/bulma.sass"]
          }
        ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".sass"]
    },
    devtool: "source-map",
}
