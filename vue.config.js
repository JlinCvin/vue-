const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production' ? '/fz-union-pc/unionPc/' : '/';
module.exports = {
	// 项目部署路径
	publicPath: BASE_URL,
	outputDir: 'unionPc',
	// 如果你不需要使用eslint，把lintOnSave设为false
	lintOnSave: false,
	chainWebpack: config => {
		devtool: 'eval-source-map',
		config.resolve.alias
			.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
			.set('_c', resolve('src/components'));
		/* // 查看打包后的文件大小详细
		config.plugin('webpack-bundle-analyzer')
		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin,[{
		  analyzerMode: 'server',
		  analyzerHost: '127.0.0.1',
		  analyzerPort: 8889,
		  reportFilename: 'report.html',
		  defaultSizes: 'parsed',
		  openAnalyzer: true,
		  generateStatsFile: false,
		  statsFilename: 'stats.json',
		  statsOptions: null,
		  logLevel: 'info'
		}]);*/
		/*优化building包大小*/
		config.optimization.splitChunks({
			cacheGroups: {
				vendors: {
					name: 'vendors',
					minChunks: 2,
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
					chunks: 'initial',
					minSize: 0
				},
				utilities: {
					test: /[\\/]src[\\/]libs[\\/]/,
					minSize: 30
				},
				commons: { // 其他同步加载公共包
					chunks: 'all',
					minChunks: 2,
					name: 'commons',
					priority: 80,
				},
			}
		})
	},
	configureWebpack: {
		externals: {
			// 'vue': 'Vue',
			// 'iview':'iview',
			// 'axios': 'axios',
			// 'xlsx': 'xlsx',
			// 'vue-router': 'VueRouter'
		}
	},
	// 设为false打包时不生成.map文件
	productionSourceMap: false,
	// 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
	devServer: {
		proxy: {
			'/api': {
				// target: 'http://localhost:8080', // 后端地址
				target: 'http://demo.apiunion.ysf.mobi', // 后端地址
				// target: 'http://pre.apiunion.ysf.mobi', // 后端地址
				// target: 'http://api.union.ysf', // 本地后端测试地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/' // 替换地址
				}
			}
		},
		disableHostCheck: true
	}
}
