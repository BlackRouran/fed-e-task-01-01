
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


let isLsatInStock = function(cars){
//获取最后一条数据
let last_car = fp.last(cars);
//获取最后一条的 in_stock 属性
return fp.prop("in_stock", last_car)
}