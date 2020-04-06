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
mix.js('resources/adminhtml/src/main.js', 'backend/dist/js')
    .sass('resources/adminhtml/src/assets/sass/app.scss','backend/dist/css')
    .webpackConfig({
        resolve: {
            alias: {
                '@': require('path').resolve(__dirname, 'resources/adminhtml/src'),
            }
        },
        module:{
            rules: [
            ]
        },
        output: {
            chunkFilename: 'backend/js/dist/chunks/[name].js',
        }
    });
