/* 
  Promise.finally() 
  1.此方法不接受任何参数，方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
  2.此方法会在then 或 catch 执行后执行，如果不执行then或catch 此方法不会执行
 */

function CatchNum(num) {
  return new Promise((resolve, reject) => {
    if (num > 5) resolve(num)
    else if (num < 5) {
      reject(new Error("您输入的数字小于5"))
    }
  })
}

//此时finally不会执行
CatchNum(5).then(res => {  
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("不管promise状态如何,我还是要执行")
})

CatchNum(6).then(res => {  
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log("不管promise状态如何,我还是要执行")
})