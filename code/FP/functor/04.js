//IO 函子  
//IO函子中的 _value是一个 函数 把函数当作值来处理
//IO 函子 把不纯的操作储存在_value中，
//IO 函子把不纯的操作交给调用者去处理

const fp = require("lodash/fp")

class IO {
  static of(value) {
    return new IO(function () {
      return value
    })
  }

  constructor(fn) {
    this._value = fn
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value))
  }

}

//调用 
let r = IO.of(process).map(p => p.execPath)

console.log(r) //IO { _value: [Function (anonymous)] } 返回的IO _value是一个函数

console.log(r._value())  //C:\dev\nodejs\node.exe 

//实例 

const fn1 = (val) =>{
   return val + val
}



// let r2 = IO.of(fn1)

// console.log(r2._value())// [Function: fn1] 调用了 r2._value() 才得到我们传入的 这个方法 fn1

let r3 = IO.of(fn1).map( (x)=>{
  console.log("x",x)
  return 5
})

console.log(r3._value())


 
