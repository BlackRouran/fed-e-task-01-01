//promiose 可链式调用
//then 返回一个新的promise
//then的作用是为 Promise 实例添加状态改变时的回调函数，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数

//对一个大于5的数字 先求和 再平方 
var p = function input(num) {
  return new Promise((resolve, reject) => {
    if(num > 5){
      resolve(num)
    }
    reject(new Error("您输入的数字小于5"))
  })
}

var p1 = function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + num)
  })
}

var p2 = function square(num) {
  return new Promise((resolve, reject) => {
    if(num < 16){
      resolve(num * num)
    }
     reject(new Error('您输入的数为大于16'+num))
  })
}

// p.then()接收一个回调函数，p 中的 resolve 的结果会当作回调函数的参数  传入
p(6).then(p1).then(p2).then((result)=>{
  console.log(`你得到的结果是${result}`)
}).catch((err)=>{
console.log(err)
})
