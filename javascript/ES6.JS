//1. 变量和常量
{
  let count = 0;
  count++;
  const BASE_URL = "https://api.github.com";
}

// 2.模板字符串
const str1 = "abc" + "efg";
const str2 = `abc${str1}
这也是字符串的内容`;

// 3.解构赋值
const [a, b, c] = [1, 2, 3]; //这个时候a=1,b=2,c=3
//这里的...是结构赋值
const { name, age, ...otherInfo } = {
  name: "张三",
  age: 18,
  hobbby: "睡觉",
  eating_habbit: "吃吃吃",
};

// 4.数组和对象的扩展
// 这里的... 是扩展运算符
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { name: "张三", ...obj1, ...obj2 };

// 5.数组方法
// arguments: 装着调用时传入的所有实参;
// Array.from(...) —— 把类数组转成真数组
function fn() {
  Array.from(arguments).forEach(function (item) {
    console.log(item);
  });
}
fn(1, 2, 3, 4);

//6.对象的方法 Object.assign()
const objA = {
  name: "dai",
  age: 12,
};

const objB = { gender: "male" };
const objC = Object.assign({}, objA, objB);
console.log(objA, objB, objC);

//7. Class的初始化和继承  和其他的语言有细节上的不同
class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intrudoce() {
    console.log(`你好我是${this.name},我的年龄是${this.age}`);
  }
}

const a1 = new A("代", 18); // ***
a1.intrudoce();

class B extends A {
  constructor(name, age, gender) {
    super(name, age); // ***
    this.gender = gender;
  }
  sayHello() {
    console.log("你好我的座右铭是宁静致远");
  }
}

// 8.箭头函数
const getSum1 = (n) => n + 3;
const getSum2 = (n1, n2) => n1 + n2;

const getResult = (arr) => {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
};

console.log(getResult([1, 2, 3, 4, 5]));
// ******************************************************************************************

// Promise： 处理异步

const p1 = new Promise((resolve, reject) => {
  //resolve('任务1：成功得到的数据‘)
  reject("任务1:失败的数据");
});
p1.then(
  (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      resolve("任务2：成功得到的数据");
      // reject('任务2:失败的数据')
    });
  },
  (err) => {
    console.log("任务1失败了");
    throw new Error("任务1失败了");
  },
).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log("任务2失败了");
  },
);
// 上面的这种错误处理，是对每一步的错误进行处理，当然也可以按照下面的方式对全局的错误进行处理

// .catch((err) => {
//   console.log(err);
// });

// Async await  处理异步
//步骤一：返回一个Promise 对象
function asyncTask() {
  return new Promise((resole, reject) => {
    //假装有一个执行业务的代码
    const istrue = true;
    if (istrue) {
      resole("任务2成功");
    } else {
      reject("任务2失败");
    }
  });
}

// 步骤2：为使用await的函数添加async
async function main() {
  console.log("任务1 ");
  const data = await asyncTask();
  console.log(data);
  console.log("任务3");
  await asyncTask();
  await asyncTask();
  await asyncTask();
  await asyncTask();
}

main();

// Proxy 代理
const obj = { name: "why", age: 18 };
const container = document.getElementById("container");
container.textContent = obj.name;
const p2 = new Proxy(obj, {
  get(target, property) {
    return obj[property];
  },
  set(target, property, value) {
    obj[property] = value;
    container.textContent = value;
  },
});
// 这个时候我们可以通过这种方式，来直接修改对象的属性,而不是每次都要重新输入一下console.log(...) /  或则去textContent=...

// Module : ESM CommonJS(Node.js)
// 1.ESM
// //    我们创建一个  .a/js 里面有
// export const a=1 ;
// export function b() {
//   return 2;
// }

// export default {
//   name: 'c'
// }

// 然后导入
import moduleA from "./a/js";

import { a } from "./a/js";

// 2.CommonJ(Node.js)
// 创建一个 .b/js
// modoule.exports = {
//   a: 1,
//   b: function () {
//     return 2;
//   },
// };

const moduleB = require("./b/js");

// fetch 前端请求
const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
if (!res.ok) throw new Error("请求失败 " + res.status); // fetch 不会因 404/500 自动报错，要自己查
const data = await res.json();
document.querySelector("#out").textContent = data.title;

// try catch
try {
  const data = await load();
} catch (err) {
  console.error("出错了：", err.message);
}

// ?.运算符
const user = { name: "小明", address: null };
user.address.city; // ❌ TypeError: Cannot read properties of null (reading 'city')
user?.address?.city; // ✅ undefined，不报错

// 数组魔法
const nums = [1, 2, 3, 4];
nums.map((n) => n * 2); // [2,4,6,8]  每个都变
nums.filter((n) => n % 2 === 0); // [2,4]      筛选
nums.find((n) => n > 2); // 3          找第一个
nums.reduce((sum, n) => sum + n, 0); // 10       累计

// json和对象的转换
JSON.stringify({ a: 1 }); // '{"a":1}' 对象→字符串
JSON.parse('{"a":1}'); // { a: 1 }  字符串→对象
