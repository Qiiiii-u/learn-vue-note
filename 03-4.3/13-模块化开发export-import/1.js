var name = '小明';
var age = 10;
function sum(num1, num2){
	return num1 + num2
}
console.log(sum(20, 19));

// 导出方式1
export {
	name,
	sum
}

// 导出方式2
export var num1 = 1000;

// 导出函数/类
export function mul(num1, num2){
	return num1 + num2
}

export class Person{
	run(){
		console.log('run');
	}
}

// 导出方式4
const address = 'beijing';
// default 默认只能有一个
export default address;

