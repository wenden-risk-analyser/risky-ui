var paths = {
    scripts: {
        vendor: [],
        app: [
            'Scripts/src/**/*.{js,jsx}'
        ],
        tests: [
            'Scripts/src/**/*.test.{js,jsx}'
        ],
        concat: 'Scripts/dist/app.js',
        dist: 'Scripts/dist/app.min.js',
        rev: 'Scripts/dist/rev/app.min-*.js'
    },
    styles: {
        less: {
            vendor: ['./bower_components/commbank-bootstrap/dist/css/commbank.css'],
            app: [
                'Styles/src/**/*.less'
            ]
        },
        src: [
            'Styles/css/vendor/**/*.css',
            'Styles/css/app/**/*.css'
        ],
        concat: 'Styles/dist/app.css',
        dist: 'Styles/dist/app.min.css',
        rev: 'Styles/dist/rev/app.min-*.css'
    },
    resources: {
        vendor: {
            fonts: ['./bower_components/commbank-bootstrap/dist/fonts/**']
        }
    }
};

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
