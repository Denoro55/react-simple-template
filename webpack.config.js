const path = require('path')

const conf = {
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist/'),
		publicPath: 'dist/'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					"plugins": ["@babel/plugin-transform-react-jsx"]
				}
			}
		}
		]
	}
}

module.exports = conf;