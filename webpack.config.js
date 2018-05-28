const path = require('path');

module.exports = {
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'app.js'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
