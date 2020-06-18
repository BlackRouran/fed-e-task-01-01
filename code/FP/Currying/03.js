/* 实现柯里化原理 */

const _ = require("lodash");
const { countBy } = require("lodash");

function getNum(a, b, c){
    return a + b +c
}

// const curryGetNum = _.curry(getNum);

// console.log(curryGetNum(1)(2)(3)) 
// console.log(curryGetNum(1, 2, 3))
// console.log(curryGetNum(1)(2, 3))


const curry = function(func) {
  return function curryFun (...args) {
     if(args.length < func.length){
       return function (){
         return curryFun( ...args.concat(Array.from(arguments)))
       }
     }else{
       return func(...args)
     }
  }
}
const curryGetNum = curry(getNum);

console.log(curryGetNum(1)(2)(3)) 
console.log(curryGetNum(1, 2, 3))
console.log(curryGetNum(1)(2, 3))





