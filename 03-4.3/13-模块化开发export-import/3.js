// 导入的{}中定义的变量
import {name, sum} from './1.js';
console.log(name);
console.log(sum(10,40));

// 导入export的变量
import {num1} from './1.js';
console.log(num1);

// 导入函数/类
import {mul, Person} from './1.js';
console.log(mul(10,44));
const p = new Person();
p.run();

// 导入默认的值
// 不需要{} 可以自己命名
import addr from './1.js';
console.log(addr)

// 导入全部
import * as aa from './1.js';
console.log(aa.name)