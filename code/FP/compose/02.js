/* 自定义 简单的组合函数 */



function compose(fun1, fun2){
  return function(value){
      return fun1(fun2(value)) //函数从右往左执行  先执行右边的函数
  }
}

const fun1 = function(val){
   return val + 1 
}

const fun2 = function (val){
    return val *2
}

const fun = compose(fun1, fun2);

console.log(fun(2))