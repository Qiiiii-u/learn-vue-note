import {sum} from './js/math.js';
console.log(sum(10,40));

// css 依赖
require('./css/normal.css')
// less
require('./css/special.less')
document.writeln('<h3>Hello World</h3>')

// 使用vue
import Vue from 'vue'


const app = new Vue({
	el: '#app',
	template: '', // 此部分内容会替换div id=app整个整体
	data: {
		message: 'Hello webpack'
	}
})