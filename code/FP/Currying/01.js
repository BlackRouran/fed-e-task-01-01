/* 初识柯里化  */

const _ = require("lodash");

const  getNum = function (num1,num2) {
    return num1 + num2;
 }

 const CurryGetNum = _.curry(getNum);
 console.log(CurryGetNum(1)(2));
 