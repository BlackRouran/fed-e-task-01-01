const _ = require("lodash");

/* 现在要实现 对一个字符串去空格 然后函数柯里化*/

/* 柯里化案例 */
/* 
  1. /\s+/g) 正则 匹配全局空格
  2./\d+/g 匹配全局数字 
*/



const match = _.curry((reg, str) => {
    // console.log(str)
    return str.match(reg);
})

const matchSpace = match(/\s+/g);

const matchNumber = match(/\d+/g);

console.log(matchSpace("asd asdljkal a;sdlkj alksdjal;k j"));

// console.log(matchNumber("123123456456 j"))

//数组filter的柯里化

const ary = [ "z s d fklj ajkl"];

function odd (ary){
 return ary.filter((item)=>{
    return  item % 2 == 0
})
}

const filter = _.curry((fun, array) => {
  return  array.filter(fun)
});

console.log(filter(matchSpace,ary))

