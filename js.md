# JavaScript手册

## 基本语法

```javascript
/*
    多行注释
*/

// 单行注释

JS严格区本大小写
JS中多个空格和换行会被忽视，可以加个空格让代码结构清晰
每条语句都要以分号号结尾，JS有自动添加分号机制
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
  - var，不具有块作用域，可以在任意地方访问

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

```javascript
function fn1(){
  console.log("hello")
}

// 函数表达是
const fn2 = function(){

}

// 箭头函数
const fn3 = (a, b) => {

}

// 箭头函数，单参数，单代码
const fn4 = a => console.log("箭头函数")
```





