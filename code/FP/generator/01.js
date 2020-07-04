/* 
  1.Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态
  2.调用 Generator 函数后，该函数并不执行,只有调用next 方法此函数才会往下执行，并且返回一个包含状态的对象
  3.yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
  4.next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
*/

function * hello(){
  console.log('我执行了')
  yield "word"
  yield "node"
  yield "js"
}

// 此时不会执行
const h = hello();

//value 表示此时函数内部的状态值 done 表示此时函数是否执行完

 console.log(h.next()) //我执行了 { value: 'word', done: false } 
 console.log(h.next()) //{ value: 'node', done: false }
 console.log(h.next()) //{ value: 'js', done: false }
 console.log(h.next()) // { value: undefined, done: true }

 //yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
 (function (){
  yield 1;
})()
//SyntaxError: Unexpected number


