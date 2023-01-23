const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	devServer: {
		port: '9000',
	},
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader',
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(png|jpg|gif)$/i,
				type: 'asset/resource',
			},
			// {
			// 	test: /\.svg$/i,
			// 	use: {
			// 		loader: 'url-loader',
			// 	},
			// },
			// {
			// 	test: /\.svg$/,
			// 	loader: 'svg-inline-loader',
			// },
			// {
			// 	test: /\.svg/,
			// 	use: {
			// 		loader: 'svg-url-loader',
			// 		options: {},
			// 	},
			// },
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
};