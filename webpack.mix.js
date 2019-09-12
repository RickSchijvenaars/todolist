const path = require('path');
const mix = require('laravel-mix');
const StylelintPlugin = require('stylelint-webpack-plugin');

Mix.paths.setRootPath(process.cwd());

mix
    .copy('resources/icons', 'public/icons')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .extract()
    .options({
       extractVueStyles: true,
       globalVueStyles: 'resources/sass/global.scss',
    })
    .webpackConfig({
        devtool: mix.inProduction() ? 'source-map' : 'eval-source-map',
        module: {
            rules: [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    formatter: require('eslint-friendly-formatter'),
                },
            }],
        },
        plugins: [
            new StylelintPlugin({
                files: ['resources/**/*.?(vue|scss)'],
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
            },
            extensions: ['.js', '.vue'],
        },
    });

if (mix.inProduction()) {
    mix.version();
}