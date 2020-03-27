const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/adminhtml/src/main.js', 'public/js/admin/')
    .webpackConfig({
    resolve: {
        alias: {
            '@': require('path').resolve(__dirname, 'resources/adminhtml/src')
        }
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "sass-loader",
                }
            ]
        }]
    }

}).sass('resources/adminhtml/sass/app.scss', 'public/css/admin/');
