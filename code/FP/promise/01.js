// 复习promise 基础语法
/* 
 简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
*/
function getNumber (value) {
  return new Promise((resolve,reject) => {
    if(value > 5){
      resolve(value)
    }else{
      reject(new Error(`您输入的数字小于5:${value}`))
    }
  })
}

getNumber(4).then((result)=>{
  console.log(result)
}).catch((err)=>{
  console.log(err)
});