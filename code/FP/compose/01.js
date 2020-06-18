/* 组合函数 */

const _ = require("lodash")

/* 函数式编程的缺点:容易写出洋葱代码 */
console.log( _.toUpper(_.first(_.reverse(["kljklo", "pgg"]))))
