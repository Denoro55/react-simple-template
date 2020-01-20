const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist/'),
		publicPath: 'dist/'
	},
	plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })],
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					"plugins": [
						"@babel/plugin-transform-react-jsx",
                        ["@babel/plugin-proposal-decorators", {"legacy": true}],
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
					]
				}
			}
		},
		{
			test: /\.module\.css$/i,
			exclude: /(node_modules)/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: process.env.NODE_ENV === 'development',
					},
				},
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: {
							localIdentName: '[local]__[sha1:hash:hex:7]'
						}
					}
				}
			],
		},
		{
			test: /^((?!\.module).)*css$/i,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						hmr: process.env.NODE_ENV === 'development',
					},
				},
				'css-loader'
			],
		}]
	},
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
	    historyApiFallback: true
    }
}

module.exports = conf;
