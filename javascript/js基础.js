// 1.数据类型
var num = 10;
var mystr = "wenben";
var myName = "wenben"; // string 类型
var myBool = true; // false boolean 类型
var myNull = null; // 用于清空变量内容，表示空
var myUn; // undefined 容器默认值

// 2.运算符
var resultStr = "nihao " + "javascript";
var isTrue = 2 >= 23;
var resultNum = 2 === "2"; // 注意两个比较是 ===
var resultNum2 = 2 !== "2"; // 注意两个比较是 !==

//3. 语句
if (1 < 2) {
  console.log("1<2");
} else if (1 > 2) {
  console.log("1>2");
} else {
  console.log("1=2");
}

i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

for (var i = 1; i <= 3; i++) {
  console.log(i);
}

//4. 函数
function add(index, index2) {
  return index + index2;
}
var result = add(1, 2);
console.log(result);

//5. 数组
var arr = [1, 2, 3];
var val = arr[0];
var len = arr.length;
arr.push(100);
arr.unshift(10); // 在index=0的位置放入10

arr.forEach(function (item, index) {
  console.log(item, index);
});

// 6. 对象
var obj = { name: "小兔鲜", age: 18 };
var name = obj.name;

for (var key in obj) {
  console.log(key, obj[key]);
}
