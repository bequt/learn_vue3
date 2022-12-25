# JavaScript手册

## 基本语法

```javascript
/*
    多行注释
*/

// 单行注释

// JS严格区本大小写
// JS中多个空格和换行会被忽视，可以加个空格让代码结构清晰
// 每条语句都要以分号号结尾，JS有自动添加分号机制
```

## 字面量和变量

- 字面量
  - 其实就是一个值，就是字面意思
  - 比如：1 2 3 4 5 "hello" true null
- 变量
  - 变量可以用来存储字面量
  - 变量存储的是内存地址，定义变量并赋值市会去内存找是否有此值，有就赋予该值的地址，没有就新增值并返回地址。
    ```javascript
    var x   
    x = 90
    x = '哈哈'
    var x1 = 12
    
    let y 
    y = 80
    y = '哈哈'
    let y1 = 12
    ```
- 常量
  - 不可变的量就是常量
  - 常量只能赋值一次，重复赋值就报错
    ```javascript
    const PI = 3.1415
    ```
    
##  数据类型

- 数值（Number）
  - 所有的整数和浮点数都是都是Number类型
  - 数值并不是无限大的，当数值超过一定范围后会显示近似值，所以不要做精度高的运算
  - NaN表示非法数值
- 大整数（Bigint）
- 进制数
  - 二进制：0b
  - 八进制：0o
  - 十六进制：0x
- 字符串（String）
  - 使用单引号或者双引号来表示字符串
  - 转义字符：\
  - \t，制表符
  - \n，换行
  - 模板字符串
    - 使用反引号`来表示模板字符串
    - 模板字符串中可以嵌入变量
- 布尔类型（Boolean），true、false
- 空值（Null）
  - 空值用来表示空对象
  - 空值只有一个null
  - typeof，返回object
- 未定义（Undefined）
  - 当声明一个变量而没有赋值时，它的值就是Undefined
  - typeof，返回undefined
- 符号（Symbol）
  - 用来创建一个唯一的标识
  - typeof，返回symbol
- 类型检查（typeof）
  - typeof a

```javascript
let a = 'hello'

// 模板字符串
let b = 10
console.log(`b = ${b}`)

// Symbol
let c = Symbol()
console.log(c)
```

## 类型转换

- 转换为字符串
  - toString()
  - String()，解决null和undefined转换问题
- 转换为数值
  - Number()
    - 字符串
      - 合法则正常转，不合法则转化为NaN
      - 字符串为空串或纯空格字符串，则转化为0
    - 布尔值，true-1，false-0
    - null-0
    - undefined-NaN
  - parseInt()
  - ParseFloat()
- 转换为布尔类型
  - 数值
    - 0和NaN转化为false，其余都是true
  - 字符串
    - 空串-false，其余都是true
  - null和undefined都转化为false
  - 对象会转换为true
- 隐式转换
  - 转换为字符串
    - + ""
  - 转换为数值
    - +
  - 转换为布尔类型
    - !!

```javascript
// 转换为字符串，toString()
let a = 10
let b = a.toString()
console.log(typeof a, a)
console.log(typeof b, b)

// 转换为字符串，String()
let c = null
let d = undefined
c = String(c)
d = String(d)
console.log(typeof c, c)
console.log(typeof d, d)

// 转换为数值，Number
let e = '123'
e = Number(e)
console.log(typeof e, e)
```

## 算数运算
## 赋值运算
## 一元的正负

## 自增自减

- ++
- --
- 有前自增减，后自增减

## 逻辑运算

- !，非
- &&，与
  - 对于非布尔运算，先转换为布尔然后运算，但是会返回原值
    - 如果第一个值为false，则直接返回第一个原值
    - 如果第一个值为true，则返回第二个原值
- ||，或
  - 对于非布尔运算，先转换为布尔然后运算，但是会返回原值
    - 如果第一个值为true，则直接返回第一个原值
    - 如果第一个值为false，则返回第二个原值

## 关系运算

- >、<
- 当对非数值进行关系运算时，会先转换数值然后再比较
- 当两端都是字符串，会逐位比较字符的Unicode编码
- 当两端都是字符串数值，一定要进行类型转换后再比较

## 相等运算符

- ==
  - 相等运算符，用来比较两个值是否相等
  - 比较两个不同类型值时，它会转换为相同类型（通常转换为数值）然后再比较
  - null == undefined - true
  - NaN不和任何值相等，包括它本身 - false
- ===
  - 全等运算符，用来比较两个值是否全等
  - 它不会进行自动类型转换，如果两个值类型不同直接返回fasle
- !=
- !==

## 条件运算符

条件表达式?表达式1:表达式2

## 代码块

- {}使用代码块对代码分组，要么一起执行，要么就一起不执行
- let和var
  - let，具有块作用域，无法在外部访问
  - var，不具有块作用域，可以在任意地方访问，变量会提升到最前面

```javascript
// 代码块
{
  let a = 10
}
```

## 三大结构

- if
- switch
- while
- do-while
- for
- break
- continue

## 对象

- 对象的属性值可以是任意值
- "name" in obj，in运算，检测对象中是否含有某个属性


```javascript
// 创建对象1
let obj = new Object()
obj.name = "孙悟空"
obj.age = 18
console.log(obj, obj.name, obj["name"])

// 创建对象2
let obj2 = {
  "name": "你", 
  age : 18,
}
console.log(obj2)
```

## 枚举

将对象中的所有属性全部获取

```javascript
let obj = {
  "name": "你", 
  age : 18,
}
console.log(obj)
for (let propName in obj){
  console.log(propName, obj[propName])
}
```

## 函数

- 函数也是对象
- 函数的声明方式
  - 函数声明，function 函数名(){}
  - 函数表达式，const
  - 箭头函数，=>
- 定义参数时，可以为参数指定默认值，(a=10, b=20, c=30)
- 函数作为参数传给函数，用于动态传递代码，函数式编程
- return
  - 可以返回对象和函数
  - 返回值为空或者不写return，那么相当于返回undefined
  - 箭头函数的返回值，如果返回值是对象，那么需要( {name: "孙悟空"} )
- 对象中属性为函数，那就称为对象的方法
- 函数会自动提升到最前面，防止调用失败

```javascript
function fn1() {
  console.log("hello")
}

// 函数表达是
const fn2 = function() {

}

// 箭头函数
const fn3 = (a, b) => {

}

// 箭头函数，单参数，单代码
const fn4 = a => console.log("箭头函数")
```

## 作用域

- 变量
- 函数
- 作用域链

## Window对象

- 在全局中使用var声明的变量，都会作为windows对象的属性保存
- 使用function声明的函数，都会作为windows的方法保存

## debugger
## 立即执行函数

- 创建一个一次性的函数作用域，避免变量冲突的问题

```javascript
// 希望可以创建一个只执行一次的匿名函数
(function () {
    let a = 10
    console.log(a)
}());

(function () {
    let a = 10
    console.log(a)
}());
```

## this

- 函数在执行时，JS解析器每次都会传递进一个隐含的参数this
- this会指向一个对象
  - this所指向的对象会根据函数调用方式的不同而不同
    1. 以函数形式调用时，this指向的是window
    2. 以方法形式调用时，this指向的是调用方法的对象
  - 通过this可以在方法中引用调用方法的对象
- 箭头函数的this
  - 箭头函数没有自己的this，它的this有外层作用域决定
  - 箭头函数的this和它的调用方式无关

```javascript
function fn(obj){
    console.log(this, this === obj)
}

const obj1 = {name: "孙悟空"}
obj1.test = fn

const obj2 = {name: "猪八戒", test: fn}

obj1.test(obj1)
obj2.test(obj2)

// 应用
const obj3 = {
  name: "沙和尚",
  sayHello: function () {
    console.log(this.name)
  },
}

const obj4 = {
  name: "唐僧",
  sayHello: function () {
    console.log(this.name)
  },
}

const obj5 = {
  name: "猪八戒",
  // 方法可以省略function
  sayHello() {
    console.log(this.name)
  },
}

obj3.sayHello()
obj4.sayHello()

// 箭头函数的this
function fn(){
  console.log("fn----", this)
}

const fn2 = () => {
  console.log("fn2----", this)
}

const obj = {
  name: "孙悟空",
  fn: fn,
  fn2: fn2,
}

fn()  // window
fn2() // window

obj.fn()  // obj，主要看调用者是谁就打印谁
obj.fn2() // window，箭头直接看外层是谁就打印谁，未来常用箭头函数
```

## 严格模式

- use strict开启严格模式

```javascript
"use strict"
let a = 10
b = 10  // 错误
```

## 对象与类

- 对象
- 类，class
  - 类是对象的模板，可以将对象中的属性和方法直接定义在类中

```javascript
"use strict"

// 对象
const man = {
  name: "王老五",
  age: 48,
  
  sleep() {
    console.log(this.name, "睡觉了")
  },

  eat() {
    console.log(this.name, "吃饭了")
  },
}


// 类
class Person {
  name: "张三"
  age: 18
  static test = "test静态属性"  // 静态属性只能通过类去访问，不在实例中，Person.test
  sleep() {
    console.log(this, "在睡觉")
  }
  static test() {
    console.log(this, "静态方法") // Person.test()
  }
}

const p1 = new Person()
p1.name = "张三"
p1.age = 12
console.log(p1)
console.log(p1 instanceof Person)
```

## 构造函数

```javascript
class Person {
    // 构造函数方法
    constructor(name, age, sex) {
        console.log("构造函数执行了...")
        // 在构造函数中，this表示当前所创建对象
        this.name = name
        this.age = age
        this.sex = sex
    }
}

const p1 = new Person("张三", 18, "男")
console.log(p1)
```

## 封装、继承、多态

- 封装
  - 对象就是一个用来存储不同属性的容器
  - 对象不仅存储属性，还要负责数据的安全
  - 私有化数据
  - 提供setter和getter方法来开放对数据的操作

```javascript
// 封装 安全性
class Person {
    #name // 实例使用#开头就变成私有属性
    #age

    constructor(name, age) {
        this.#name = name // 赋值也要加#
        this.#age = age
    }

    sayHello() {
        console.log(this.#name)
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

}

const p1 = new Person("张三", 18)
p1.sayHello()
p1.setName("李四")
console.log(p1.getName())

// 多态 扩展性
// 继承 灵活性
```

## 对象结构

- 对象存储区域有两个
  1. 对象自身
    - 直接通过对象所添加的属性
    - 在类中通过x=y的形式添加的属性
  2. 原型对象
    - 在对象中会有一个属性用来存储原型对象，`__proto__`
    - 原型对象也负责为对象存储属性
      - 当访问访问对象中的属性时，先找对象自身，然后再找原型对象
      - 会添加到原型对象中的情况
        1. 在类中通过xxx(){}
        2. 主动向原型中添加的属性或方法
- 内建对象，Object
- 宿主对象，浏览器，BOM、DOM
- 自定义对象

## 原型对象

- `对象.__proto__`的方式访问
- 原型对象也有原型
- p对象的原型链：p对象-->原型-->原型-->null
- obj对象的原型链：obj对象-->原型-->null
- 原型就相当于是一个公共区域，可以被所有该类实例访问
- JS中继承就是通过原型来实现的
- instanceof
- hasOwn

```javascript
// instanceof，用来检查一个对象是否是一个类的实例
// 只要原型链上有该类实例，就会返回true
// dog -> Animal的实例 -> Object实例 -> Object原型
class Animal{}

class Dog extends Animal{}

const dog = new Dog()
console.log(dog instanceof Animal)

// hasOwnProperty，不推荐使用
// in运算检查属性时，无论属性在对象自身还是原型中，都会返回true
// hasOwnProperty，在Object原型里
// hasOwn，推荐使用
class Person{
    name = "孙悟空"
    age = 18

    sayHello() {
        console.log("1")
    }
}

const p = new Person()

console.log(p.hasOwnProperty("name")) // true
console.log(p.hasOwnProperty("sayHello")) // false

console.log(Object.hasOwn(p, "name"))
console.log(Object.hasOwn(p, "sayHello"))
```

## 数组

- 

```javascript
// 创建数组，尽量避免非连续数组
const arr1 = new Array()
const arr2 = [1, 2] // 数组自变量

console.log(arr2.length)

arr2[arr2.length] = 33   // 总是向数组最后添加元素

// 遍历数组
// for
// for of
const names = ["张三", "李四"]

for(let i of names){
  console.log(i)
}

// concat()，用来链接两个或多个数组
// indexOf()，没有找到返回-1
// lastIndexOf()，没有找到返回-1
// join()，将数组元素连接为一个字符串
// slice(1,4)，用来截取数组，不填数字就是复制
// push()，往数组添加元素
// pop()，删除并返回数组最后一个元素
// unshift()，向数组的开头添加一个或多个元素，并返回新的长度
// shift()，删除并返回数组的第一个元素
// splice()，删除、添加、插入、替换数组中的元素
// reverse()，反转数组
// sort()

// 复制一个对象
const arr1 = [1]
const arr2 = arr1.slice()

```

## 浅拷贝和深拷贝

```javascript
// 浅拷贝
// 只会对对对象本身进行复制，不会复制对象中的属性（或元素）
const arr1 = [{name: "孙悟空"}, {name: "猪八戒"}]
const arr2 = arr.slice()  // 浅拷贝
const arr4 = [...arr1]  // 浅拷贝，...展开运算符，传参数也可以 

// 深拷贝
// 不仅复制对象本身，还复制对象中的属性和元素
const arr3 = structuredClone(arr1)

// 对象复制
const obj1 = {name: "孙悟空", age: 18}
const obj2 = {address: "花果山", age: 28}

Object.assign(obj2, obj1)
console.log(obj2)

const obj3 = {...obj1}
console.log(obj3)
```

## 高阶函数

```javascript
// 如果一个喊叔叔的参数或返回值是函数，则这个函数就称为高阶函数
// 回调函数
// 一个函数的参数也可以是函数，这种函数叫回调函数（callback）
personArr = [{name: "孙悟空", age: 18}, {name: "唐僧", age: 28}]

function filter(arr, cb) {
    const newArr = []
    for (let value of arr) {
        if (cb(value)) {
            newArr.push(value)
        }
    }
    return newArr
}

result1 = filter(personArr, a => a.name === "孙悟空")
result2 = filter(personArr, a => a.age > 18)

console.log(result1)
console.log(result2)


// 希望someFn()函数执行时，可以记录一条日志
// 在不修改原函数的基础上，为其增加记录日志功能
// 可以通过高阶函数来动态生成一个新函数
function someFn() {
    return "hello"
}

function outer(cb) {
    return () => {
        console.log("记录日志操作")
        return cb()
    }
}

let result = outer(someFn)
console.log(result())
```

## 闭包

```javascript
// 创建一个函数，第一次调用时打印1，第二次调用打印2
// 1. 函数嵌套
// 2. 内部函数要引用外部函数中的变量
// 3. 内部函数要作为返回值返回
// 需要执行次数较少时，使用闭包，优先使用闭包
// 需要执行次数较多时，使用类
function outer() {
    let num = 0

    return () => {
        num++
        console.log(num)
    }
}

const newFn = outer()
newFn()
newFn()
newFn()
```

## 递归

```javascript
// 递归的本质是把大问题拆分成小问题，解决小的问题就可以解决大的问题
function jieCheng(num) {
    // 基线条件
    if (num === 1) {
        return 1
    }

    // 递归条件
    return num * jieCheng(num - 1)
}

console.log(jieCheng(5))
```

## 数组方法

```javascript
let arr1 = [1, 2, 44, 42, 21, 11]

arr1.sort((a, b) => b - a)
console.log(arr1)

console.log("forEach")
// forEach，遍历数组
// 需要一个回调函数作为参数，这个回调函数会被调用多次
// element，当前元素
// index，当前元素的索引
// array，被遍历数组
arr1.forEach((element, index, array) => {
    console.log(index, element)
})

console.log("filter")
// filter()，将数组中符合条件元素保存到一个新数组中返回
// 非破坏性方法，不会影响原数组
arr2 = [1, 2, 44, 42, 21, 11]
arr2.filter((element) => {
    if (element % 2 === 0) {
        console.log(element)
    }
})

let result1 = arr2.filter(element => element % 2 !== 0)
console.log(result1)

console.log("map")
// map
// 根据当前数组生成一个新数组
// 非破坏性方法，不会影响原数组
arr3 = [1, 2, 44, 42, 21, 11]
result2 = arr3.map((element) => {
    return element * 2
})
console.log(result2)

// reduce
// 可以将一个数组中的所有元素整合为一个值
arr4 = [1, 2, 44, 42, 21, 11]
result3 = arr4.reduce((element1, element2) => {
    return element1 + element2
})
console.log(result3)
```

## 可变参数

```javascript
// arguments
// 是函数中有一个隐藏参数
// 是一个类数组对象（伪数组），用来存储函数的实参，但是不能调用数组的方法
function fn() {
    console.log(arguments.length)
    for (const argument of arguments) {
        console.log(argument)
    }
}

fn(1, 10, 33)

// 可变参数，建议使用
function fn2(a, b, ...args) {
    console.log(args)
}

fn2(123, 456, 11, 23)
```

## call和apply

```javascript
// call，可以调用函数
// apply，可以调用函数
// 还可以用来指定函数中的this
function fn1() {
    console.log("函数被调用了", this)
}

const obj = {
    name: "孙悟空",
    fn: () => {
    },
}

fn1.call()
fn1.apply()

fn1.call(obj)
fn1.apply(obj)

function fn2(a, b) {
    console.log(a, b, this)
}

fn2.call(obj, 1, 2)
fn2.apply(obj, [1, 2])
```

## bind

```javascript
// bind
// 返回一个新的函数，相当于创建一个函数
function fn1(...args) {
    console.log("fn执行了", this)
    console.log(args)
}

const obj = {
    name: "孙悟空"
}

const newFn = fn1.bind(obj, 1, 2, 3)
newFn()
```

## 内建对象

```javascript
// 解构赋值
const arr = [1, 2, 3]

let [a, b, c] = arr
let [n1, ...n3] = arr

console.log(a, b, c)
console.log(n1, n3)

let [a1, a2] = [12, 13]
;[a2, a1] = [a1, a2]
console.log(a1, a2)

// 对象解析
const obj = {
    name: "孙悟空",
    age: 18,
    sex: "男",
}

let {name, age, sex} = obj
let {name: a, age: b, sex: c} = obj

console.log(name, age, sex)
console.log(a, b, c)
```

## 对象序列化

```javascript
// JSON有助于在不同语言中传递
const obj = {
    name: "孙悟空",
    age: 18,
    sex: "男",
}
console.log(obj)

// 将obj转换为JSON字符串
const str = JSON.stringify(obj)
const obj2 = JSON.parse(str)
console.log(str)
console.log(obj2)

const str2 = '{"name": "猪八戒", "age": 28}'
console.log(str2)
``` 

## JSON复制

```javascript
// JSON复制
const obj = {
    name: "孙悟空",
    age: 18,
    sex: "男",
    friend: {
        name: "猪八戒",
    },
}

// obj，浅复制
const obj2 = Object.assign({}, obj)

// 利用JSON来完成深复制
const str = JSON.stringify(obj)
const obj4 = JSON.parse(str)
console.log(obj4)
```

## map

```javascript
// Map对象
// Map对象相较于Obj对象，Map可以设置键为Obj对象
const obj = {
    name: "孙悟空",
}
const map = new Map()
map.set("age", 18)
map.set(obj, "aa")

console.log(map)
console.log(map.get(obj))

map.delete("age")
console.log(map)
map.clear()

// map和数组的转换
const map = new Map()
map.set("name", "孙悟空")
map.set("age", 18)

const arr = Array.from(map)
console.log(arr)

// map遍历
for (const ele of map) {
    console.log(ele[0], ele[1])
}

console.log(map.keys())
console.log(map.values())
```

## set

```javascript
// set集合
// 不能存储重复的数据

const set = new Set()

set.add("name", "孙悟空")
set.add("age", 18)

console.log(set)
```

## math
## data

## 包装类

```javascript
/*
包装类
    - String
    - Number
    - Boolean
    - BigInt
    - Symbol
可以直接调用包装类的函数
 */
```

## 正则
## 垃圾回收
## DOM

- document，很多属性和方法
- 获取元素节点
  - document.getElementById()，id属性
  - document.getElementsByClassName()，类名
  - document.getElementsByTagName()，标签名
  - document.getElementsByName()，name属性
  - document.querySelectorAll()，根据选择器去页面中查找元素，不会实时更新
  - document.querySelector()，根据选择器去页面中查找第一个元素，不会实时更新
- 元素中的文本节点
  - element.textContent，获取或修改元素中的文本内容，不考虑css样式
  - element.innerText，获取或修改元素中的文本内容，考虑css样式
  - element.innerHTML，获取或修改元素中的html代码，有风险
- 元素中的属性节点（Attr）
  - 元素.属性名（class属性需要用className来读取）
  - 元素.getAttribute(属性名)
  - 元素.setAttribute(属性名, 属性值)
  - 元素.removeAttribute(属性名, 属性值)
- 事件
  - btn.onclick = function(){}，一个事件只能绑定一个响应函数
  - btn.addEventListener("click", function(){})，可以执行两个相同的事件

## 文档加载

- 网页上是自上而下加载的，如果将js代码编写到网页的上边，可能会出现无法获取到DOM对象的情况
  1. 将script标签代码写到body标签的最后
  2. 将代码编写到window.onload的回调函数中，window.onload = function(){ // js代码 }
  3. 将代码编写到document对象的DOMContentLoaded的回调函数中，window.addEventLIstener("load", function(){ // js代码 })
  4. 将代码编写到外部的js文件中，然后以defer的形式进行引入，<srcipt defer src=""></srcipt>
- administrator xiaodingbequthD23


项目二：
一氧化碳警报系统
智慧交通信号灯
植物盆栽自动灌溉系统
隧道洪涝水位预警系统
智能升降黑板
温度、湿度、空气质量检测系统
自个设计（可挑选硬件）
项目二我是这样考虑的，就是让学生在我7个选题中选择一个项目完成，其中第七个项目可以由学生自行考虑制作自己的作品。
这样设计缘由：
1. 设备其实不足，多个项目并行制作会减少单一元器件的配备压力
2. 通过了解博物馆环境、防盗、安全内容，可以让学生了解到项目的制作要考究传感器的选择，利用传感器传输环境数据得到信息然后进行控制
3. 通过指定网站，了解设计方案和作品
4. 学生挑选元器件，老师针对学生所挑选的元器件是否能够利用模块化编程
5. 不要求物化外形设计，但要求学生按照自己的设计理念绘制出外壳设计，并标注元器件安放位置
6. 但这样就可能需要购买新的零件，但是应该不会太多


