## 简答题

### 一、谈谈你如何理解js异步编程的，EventLoop、消息队列都是作什么的，什么是宏任务，什么是微任务?

答：js是单线程的，也就是代码由上往下执行，当我们要执行很耗时的代码时，就会出现代码执行卡顿。于是就有了异步编程。异步编程就是当js引擎执行到我们的异步任务的时候会把我们的任务放到消息队列中暂时挂起，继续去往下执行，等主线程代码执行完了，再去消息队列中去执行第一个任务。

EventLoop 是监听调用栈 和消息队列，当消息队列发生变化时，去把消息队列中第一个函数 放入调用栈去执行

消息队列 是用来存放异步任务执行后的回调函数

js的任务队列分为同步任务和异步任务，所有的同步任务都是在主线程里执行的，异步任务可能会在macrotask或者microtask里面

宏任务 有setTimeout、setInterval 等主线程任务 以及所有微任务执行完 在执行

微任务 promise.then、process.nextTick 等主线程任务执行完 立即执行

参考 教学视频 以及 文档 ：https://blog.csdn.net/zhang44429824/article/details/84862667

##  代码题

### 一、将下面代码使用Promise进行改进



```
// 示例代码:
// setTimeout(function () {
//   var a = "hello";
//   setTimeout(function () {
//     var b = "lagou";
//     setTimeout(function () {
//       var c = "I LOVE you";
//       console.log(a + b + c)
//     }, 1000)
//   }, 1000)
// }, 1000)

let Pa = function () {
  var a = "hello";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a)
    }, 1000)
  })
}
let Pb = function (result) {
  var b = " lagou "
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result + b)
    }, 1000)
  })
}
let Pc = function (result) {
  var c = "I LOVe you";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result + c)
    }, 1000)
  })
}

Pa().then(Pb).then(Pc).then(res => {
  console.log(res)
})
```

### 二、基于以下代码完成以下四个练习题

####  练习题一

使用组合函数fp.flowRight()重新实现下面的函数

```

let isLsatInStock = function(cars){
//获取最后一条数据
let last_car = fp.last(cars);
//获取最后一条的 in_stock 属性
return fp.prop("in_stock", last_car)
}
```

```
const fp = require("lodash/fp")

let cars = [
  {
    "name": "pgg",
    "in_stock": 12
  },
  {
    "name": "pgg1",
    "in_stock": 13
  }
]


let last = () => fp.last(cars);

// last 返回一个柯里化后的prop
const prop = fp.curry( (tagName, obj ) => fp.prop(tagName, obj) )

//函数组合 从右往左 调用
const getLast_InStock = fp.flowRight(prop("in_stock"), last)

console.log(getLast_InStock(cars)) //13
```

####  练习题二

使用 fp.flowRight()、fp.prop()、fp.first() 获取第一个car的name

```
const first = (array) => fp.first(array);

const prop = fp.curry((tagname, obj) => fp.prop(tagname, obj))

const getFirstName = fp.flowRight(prop('name'), first)
```

#### 练习题三

使用帮助函数_average重构 averageDollarValue，使用组合函数方式实现

```
//暂未做答
let _average = function(xs) {
  return fp.reduce(fp.add, 0 ,xs) / xs.length
}
let averageDollarValue = function (cars){
  let dollar_values = fp.map(function(car){
    return car.dollar_value
  },cars)
  return _average(dollar_values)
}
```

#### 练习题四

使用flowRight写一个 sanitizeNames() 函数，返回一个下划线链接的小写字符，把数组中的name转换为这种形式。例如

sanitizeNames(["Hello Word"] )=》[ 'hello_word']

```
const　map =fp.curry((fun, ary ) => fp.map(fun,ary))

const list = ["Hello Word", "Pgg Niupi"]

const lower = (str) => fp.toLower(str);

const _underscore =   fp.replace(/\s+/g,"_")

const toUnderscore = (str) => _underscore(str)

const sanitizeNames =map(fp.flowRight(toUnderscore, lower))

console.log(sanitizeNames(list)) //[ 'hello_word', 'pgg_niupi' ]
```

### 三、基于以下提供的代码，完成下面四个练习

```
class Container {
  static of (value){
    return new Container(value)
  }
  constructor (value){
    this._value = value;
  }
  map(fn){
    return Container.of(fn(this._value))
  }
}

class MayBe {
  static of (x){
    return new Container(x)
  }
  isNothing (){
    return this._value === null || this._value ===undefined
  }
  constructor (x){
    this._value = x;
  }
  map(fn){
    return this.isNothing() ? this: MyBe.of(fn(this._value))
  }
}
```

####  练习题一:

 使用fp.add(x, y)和fp.map(f,x)创建一个能让functor的值增加的函数ex1:

```
//暂未作答
const fp = require("lodash/fp");

let maybe = MayBe.of([5,6,1]);

let ex1 = ()=>{

}
```

#### 练习题二

实现一个函数ex2,能够使用fp.first获取列表的第一个元素

```
let xs = Container.of(['do', 'ray'])

let ex2= () => {
 return xs.map((list)=> fp.first(list))._value
}
// console.log(ex2()) //do
```

#### 练习题三

实现一个函数ex3,使用safeProp和fp.first找到user的名字的首字母

```
let user = {id: 2, name: 'Albert'}

let ex3 = () =>{
  return fp.first(safeProp('name',user)._value.split(""))
}
console.log(ex3()) //A
```

####  练习题四

使用MayBe重写ex4,不要if语句

```
let ex4 = function(n){
  if(n){
    return parseInt(n)
  }
}
MayBe.of(n).map((n)=> parseInt(n))
```

### 四 、手写实现myPromise源码

要求：尽可能还原Promise中的每一个api,并通过注释的方式描述思路和原理

```
//未完成

/* 
 1.promise　就是一个类,执行类的时候需要传递一个执行器,执行器会立即执行
 2.Promise 有3种状态　成功　fulfill　等待 pending　失败 rejected
 　一但状态确定　就不可更改
 3. resolve 和reject 是　用来改变状态的
    resolve: fulfill
    reject:  rejected
 4. then 内部要做的　是判断状态　如果成功　就调用成功回调，如果失败就调用失败回调　then 是定义在原型上的方法
 5. then 成功　回调后　有一个回调　　表示成功后的值　,失败回调　也有一个值　表示失败后的原因
*/




const PENDING = "pending"
const FULFILL = "fulfill"
const REJECTED = "rejected";

class myPromise {
  constructor(executor) {
    //传入一个构造器，并且立即执行
    executor(this.resolve, this.reject)
  }
  // promise 状态
  status = PENDING
  //成功之后的值
  value = undefined
  //失败之后的原因
  reson = undefined
  resolve = (value) => {
    // 如果状态不是pending 阻止运行
    if (this.status !== PENDING) return
    // 将状态改为成功
    this.status = FULFILL;
    //保存成功后的值
    this.value = value
  }
  reject = (reason) => {
    // 如果状态不是pending 阻止运行
    if (this.status !== PENDING) return
    // 将状态改为失败
    this.status = REJECTED;
    //保存失败的原因
    this.reson = reson
  }
  then(successCallback, failCallback) {
    //判断状态
    if (this.status === FULFILL) {
      successCallback(this.value)
    } else if (this.status === REJECTED) {
      failCallback(this.reson)
    }
  }
}


const promise = new myPromise(resolve, reject => {
  resolve('成功了　8888')
})
promise.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})
```

