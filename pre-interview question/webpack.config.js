const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },
    ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    }
};