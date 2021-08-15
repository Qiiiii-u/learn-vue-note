// 1.npm init 生成package.json
// 2.npm install 生成package-lock.json
// node 包里导入path
const path = require('path')
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'), // dirname当前路径
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		// css-loader只负责加载、style-loader渲染
		// 使用多个则右向左顺序执行
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
				]
			},
			{
				test: /\.less$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader'
					},
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
						loader: 'url-loader',
						// 小于limit 编译为base64，大于则使用file-loader打包图片至dist
						options: {
							limit: 8196,
							// 重命名：图片原名.哈希8位.拓展名
							name: 'img/[name].[hash:8].[ext]'
						},
						
					},
				]
			},
			// 配置App.vue
			{
				test: /\.vue$/,
				use: [{
						loader: 'vue-loader',
					},
				]
			},
		]
	},
	// 使用vue的配置
	resolve: {
		// 取别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}
