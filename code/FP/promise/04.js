/* 
  promise.all()
  1.此方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
  2.只有所有实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
  3.如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
*/

function p(num) {
  return new Promise((resolve, reject) => {
    if (num >= 5) resolve(num)
    reject(new Error(`此数字为${num}`))
  })
}
// 生成一个promise 对象数组
const list = [7, 8, 3, 4, 5, 6]
const pAll = list.map((item) => {
  return p(item)
})

//执行到第三个promise的时候,触发了reject()
Promise.all(pAll).then((res) => {
  console.log(res)
}).catch(err => {console.log(err)}) //Error: 此数字为3

const p1 = new Promise((resolve, reject) => {
 resolve()
})
const p2 = new Promise((resolve, reject) => {
  reject(new Error('这是p1的错误'))
}).then(res =>{}).catch(err => {console.log(err)})


/* 上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指
   向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会
   resolved，因此会调用then方法指定的回调函数而不会调用catch方法指定的回调函数。
 */

Promise.all([p1, p2]).then().catch(err => {console.log("我报错啊")}) //Error: 这是p1的错误
