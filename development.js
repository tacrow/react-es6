import path from 'path'
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
			extensions: ['', '.js']
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
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize')
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
				}
			]
		},
		resolve: {
			extensions: ['', '.css']
		},
		plugins: [
	        new ExtractTextPlugin("all.css")
	    ]
	}
];