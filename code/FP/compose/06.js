// 手写 compose
const _ = require("lodash");


// const split = _.curry((se, str )=> _.split( str, se));

// const join = _.curry((se, array)=> _.join(array, se));

// const lowerCase = ( ary) =>{
//     return ary.map((item) => _.lowerCase(item))
// }
// // console.log(lowerCase(["ABD","EFB"]))
// const log = _.curry((target, v) => {
//     console.log(target,v)
//   return v
// })  

// const f = _.flowRight( join("-"),  log("lowerCase"), lowerCase , split(" "));


// console.log(f("ABC DEF GHI"));
