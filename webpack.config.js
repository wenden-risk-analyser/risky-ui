module.exports = {
    target: 'web',
    entry: {
        app: ['./scripts/src/app.jsx']
    },
    output: {
        filename: './scripts/dist/app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
