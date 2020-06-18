// 使用柯里化 处理函数 方便组合函数调用

// ABC DEF GHI =>> abc-def-ghi

const _ = require("lodash");

const split = _.curry((se, str )=> _.split( str, se));

const join = _.curry((se, array)=> _.join(array, se));

console.log(_.lowerCase("ADBFF")); //adbff

console.log(_.join([1, 2, 3], "-")); // 1-2-3

console.log(join("_")([1, 2, 34]));

console.log(split(" ")("asd asd asd ")); //[ 'asd', 'asd', 'asd', '' ]

