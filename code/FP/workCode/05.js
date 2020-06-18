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