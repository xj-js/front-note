# JavaScript基础知识的简要
> 参考
- mdn: https://developer.mozilla.org/zh-CN/
- 现代 JavaScript 教程: https://zh.javascript.info/

## 变量和数据类型

在JavaScript中，变量声明使用`var`,`let`,或 `const`关键字。变量可以存储数字、字符串、布尔值和对象等不同类型的值。

JavaScript 中有 8 种数据类型，分为两类：

1. 基本类型(primitive types)：
- number（数字）: 整数或浮点数；
- boolean（布尔）: true 或 false；
- string（字符串）：表示文本；
- null: 表示一个空指针对象，只有一个值 null；
- undefined: 表示未定义的值，只有一个值 undefined；
- symbol (符号): ES6新增类型,它是唯一的且不可修改的值
- bigInt 可以表示任意大小的整数

2. 引用类型(reference types)，也称为对象(object types)：
- object（对象）：一组键值对的无序集合，比如 {name: '张三', age: 18}；
- array（数组）：一组按照一定顺序排列的值的集合，比如 [1, 2, 3]；
- function（函数）：具有特殊功能的对象，比如 function add(a,b){return a+b}。

上述基本类型都属于值类型(value type), 即当你将基本类型赋值给一个新变量时，该变量里存储的就是该基本类型的值本身。而引用类型则可以认为是指向内存中某个对象的指针，比如当你把一个对象赋值给一个新变量时，新变量里存的就是该对象的地址指针。


在 JavaScript 中，判断数据的类型有多种方式，下面介绍几种常用的判断方法：

1. typeof 运算符：可以检测变量或表达式的数据类型
```javascript
typeof 123; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof null; // "object" （注意这里返回的是 "object"，其实 null 是个基本类型）
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"

typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"
```
2. instanceof 运算符：可以检测一个对象是否是另一个对象的实例。例如 `'hello' instanceof String` 返回布尔值 `false`。
3. Object.prototype.toString.call() 方法：返回调用该方法时传入参数的数据类型，通过这种方式可以获得更为准确的类型判断结果。例如 `Object.prototype.toString.call('hello')` 返回字符串 `"[object String]"`。
4. Array.isArray() 方法：用于判断一个对象是否为数组类型。例如 `Array.isArray([])` 返回布尔值 `true`。

除此之外，还有其它一些方法可以进行类型判断，如 isNaN()、Number.isNaN() 等。

需要注意的是，在使用某些运算符或函数进行类型判断时可能会产生误判或不准确的结果，因此在特定场景下应根据具体情况选择适合的判断方式。

## 运算符

JavaScript支持大多数常见的数学运算符，如加减乘除以及余数运算符，并且还有一些特殊的运算符如一元运算符、位运算符、赋值运算符、比较运算符、逻辑运算符和条件运算符(`?`)。

```javascript
var a = 10, b = 5;
console.log(a + b); //加法运算
console.log(a - b); //减法运算
console.log(a * b); //乘法运算
console.log(a / b); //除法运算
console.log(a % b); //取余数运算
console.log(++a); //前置自增运算
console.log(b++); //后置自增运算
console.log(--a); //前置自减运算
console.log(b--); //后置自减运算
console.log(a > b); //大于比较运算
console.log(a < b); //小于比较运算
console.log(a == b); //等于比较运算
console.log(a != b); //不等于比较运算
console.log(!true); //逻辑非运算
console.log(true && false); //逻辑与运算
console.log(true || false); //逻辑或运算
console.log(a > 5 ? 'a大于5' : 'a小于等于5'); //条件判断运算
```

## 控制流语句

if/else、for、while 和 do while 等控制流语句用于执行基本条件分支、循环分支和其他分支结构。

```javascript
var a = 10, b = 5;
if (a > b) { //if/else条件分支语句
    console.log('a大于b');
} else {
    console.log('a小于等于b');
}

for (var i = 0; i < 10; i++) { //for循环语句
    console.log(i);
}

var j = 0;
while (j < 5) { //while循环语句
    console.log(j);
    j++;
}

var k = 0;
do { //do...while循环语句
    console.log(k);
    k++;
} while (k < 5);
```

## 函数

JavaScript中函数使用定义、调用、参数形参传递和返回来实现代码的复用性和灵活性。函数具有局部作用域，可以接受参数并返回值来执行某个任务。

```javascript
//定义一个函数
function greet(name) {
    return 'Hello, ' + name + '!';
}

//调用函数
console.log(greet('John'));

//函数的参数传递
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 5)); //10

//返回多个值
function squareAndCube(number) {
    return [number * number, number * number * number];
}
var results = squareAndCube(3); //数组包含两个结果
console.log(results[0]); //9
console.log(results[1]); //27
```

## 对象和数组

对象（Object）在JavaScript中非常重要，会影响到状态管理、事件捕获和处理、AJAX请求等许多应用。数组（Array）是对象的一种特殊类型，它包含了一组有序的元素。

```javascript
//对象的创建
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//使用对象的属性和方法
console.log(person.firstName);
console.log(person.age);
console.log(person.fullName());

//数组的创建和访问
var fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
```

## 作用域和闭包

JavaScript中的作用域在程序运行中起到至关重要的作用，其中函数提供了自己的内部作用域。变量声明时使用`var`,`let`,或 `const`并不会随着作用域改变而被删除,因此不能纯粹依靠垃圾收集机制来清理他们,所以还需要了解一些基础的垃圾回收机制，同时还需要在JavaScript中使用闭包技术。

```javascript
//作用域和变量生命周期
var a = 10;
function greet() {
    var b = 5;
    console.log(a); //能够读取全局变量a
    console.log(b); //能够读取局部变量b
}
greet();
console.log(a); //仍然可以读取全局变量a
console.log(b); //无法读取局部变量b，因为它仅在函数内部定义

//闭包
function generateCounter() {
    var count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

var counter1 = generateCounter(); //每次调用都会返回一个新函数，但是由于该函数总是访问相同的作用域，因此每个计数器都会以自己的方式工作
counter1(); //打印“1”
counter1(); //打印“2”
var counter2 = generateCounter();
counter2(); //打印“1”
```

## this和对象原型

this可以用来引用当前正在执行的代码上下文，在实践中经常应用于事件处理程序和方法调用。对象原型是指在当前对象有缺失属性的情况下使用其他相关对象进行扩展的机制。

```javascript
//关于this
var person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
        return this.firstName + " " + this.lastName; //这里的this指代person对象
    }
}
console.log(person.fullName()); //"John Doe"

//原型
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

var p1 = new Person('John', 'Doe');
console.log(p1.fullName()); //"John Doe"
console.log(Person.prototype); //打印出prototype对象本身
```

## Promise

Promise 是异步编程的新标准（ES6），它可以更好地控制回调函数，从而避免了由于回调函数之间相互牵连而带来的可读性复杂度。

```javascript
//promise的基本语法
let promise = new Promise(function(resolve, reject) {
    //异步操作可以放到这里
    if (异步操作成功) {
        resolve(value); //向后传递值
    } else {
        reject(error); //向后传递错误
    }
});

//promise的使用
function getData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/data',
            type: 'GET',
            success: function(response) {
                resolve(response); //成功时调用resolve
            },
            error: function(error) {
                reject(error); //失败时调用reject
            }
        })
    });
}

//使用promise的then和catch方法处理Promise实例执行状态
getData().then(function(data) {
    console.log('获取数据成功'); //成功
}).catch(function(err) {
    console.log('获取数据失败'); //失败
});
```

## ES6特性
[阮一峰 ES6 入门教程](https://es6.ruanyifeng.com/)  
ES6引入了许多新特性，如箭头函数、解构赋值、默认参数、Rest参数、展开运算符、迭代器、Symbol类型等。这些语法糖可以让JavaScript代码更加简洁易懂。


```javascript
//箭头函数
let multiply = (x, y) => x * y;
console.log(multiply(3, 4)); //12

//解构赋值
const person = {firstName: "John", lastName: "Doe"};
const {firstName, lastName} = person;
console.log(firstName); //John
console.log(lastName); //Doe

//默认参数
function greet(name="world") {
    console.log(`Hello, ${name}!`);
}
greet(); //输出“Hello, world!”

//Rest参数与展开运算符
function sum(...args) {
    return args.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4, 5)); //15

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]); //[1, 2, 3, 4, 5, 6]

//迭代器
const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); //输出“{ value: 1, done: false }”

//Symbol类型
const mySymbol = Symbol("mySymbol");
console.log(mySymbol); //输出“Symbol(mySymbol)”
```