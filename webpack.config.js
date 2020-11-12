const HTMLWebpackPlugin = require('html-webpack-plugin')

//covierte código de desarrollo a código de producción
module.exports = {
    //Tarea de entrada
    entry: './src/main.js',
    //tarea de salida
    output: {
        path: __dirname + '/server/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
              },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        //plantilla para la vista
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}