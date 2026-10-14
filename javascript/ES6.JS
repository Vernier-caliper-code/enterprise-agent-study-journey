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
