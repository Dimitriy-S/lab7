const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8087,
        open: true
    }
};
