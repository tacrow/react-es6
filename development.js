import path from 'path'

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const js = path.resolve(__dirname, 'src/js')
const destjs = path.resolve(__dirname, 'src/js/bundle')

const scss  = path.resolve(__dirname, 'src/scss')
const destcss  = path.resolve(__dirname, 'src/css')
	
export default [
	// JS
	{
		entry: js + '/app.jsx',

		output: {
			path: destjs,
			filename: 'bundle.js'
		},
		module: {
			loaders: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					loader: 'babel'
				}
			]
		},
		resolve: {
			extensions: ['', '.js', '.jsx']
		}
	},
	// CSS
	{
		entry: scss + '/all.js',
		output: {
			path: destcss,
			filename: 'all.css'
		},
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style','css!postcss!sass')
				}
			]
		},
		resolve: {
			extensions: ['', '.css']
		},
		plugins: [
			new ExtractTextPlugin('all.css')
		],
		postcss: [
			require('autoprefixer')
		]
	}
];