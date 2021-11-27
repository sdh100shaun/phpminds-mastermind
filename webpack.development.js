const path = require('path')

module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
    },
}

