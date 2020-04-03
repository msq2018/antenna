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
mix.js('resources/adminhtml/src/main.js', 'backend/js/dist/')
    .webpackConfig({
        resolve: {
            alias: {
                '@': require('path').resolve(__dirname, 'resources/adminhtml/src')
            }
        },
        module:{
            rules: [
                {
                    test: /\.s(c|a)ss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            // Requires sass-loader@^7.0.0
                            options: {
                                implementation: require('sass'),
                                fiber: require('fibers'),
                                indentedSyntax: true // optional
                            },
                            // Requires sass-loader@^8.0.0
                            options: {
                                implementation: require('sass'),
                                sassOptions: {
                                    fiber: require('fibers'),
                                    indentedSyntax: true // optional
                                },
                            },
                        },
                    ],
                },
            ]
        },
        output: {
            chunkFilename: 'backend/js/dist/chunks/[name].js',
        }
    });
