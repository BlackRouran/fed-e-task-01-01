const fp = require("lodash/fp")

let cars = [
  {
    "name": "pgg",
    "in_stock": 12
  },
  {
    "name": "pgg1",
    "in_stock": 13
  }
]


let last = () => fp.last(cars);

// last 返回一个柯里化后的prop
const prop = fp.curry( (tagName, obj ) => fp.prop(tagName, obj) )

//函数组合 从右往左 调用
const getLast_InStock = fp.flowRight(prop("in_stock"), last)

console.log(getLast_InStock(cars)) //13
