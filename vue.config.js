
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
	publicPath: './',
	devServer: {
		port: '8080',
		open: true
	},
	outputDir: resolve('doc'),
	pages: {
		index: {
			entry: resolve('home/main.ts'),
			template: 'public/index.html',
			filename: 'index.html',
			title: 'Xbb Utils Dev Tools',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
	},
	chainWebpack: config => {
		config.plugins.delete('prefetch-index')
	},
}
