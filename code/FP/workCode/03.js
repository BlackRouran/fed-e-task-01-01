
const fp = require("lodash/fp")

const cars = [{
  "name": "Hello Word",
  "horsePower": 602,
  "dollar_value": 231,
  "in_stock": true
},
{
  "name": "Bao Ma",
  "horsePower": 602,
  "dollar_value": 231,
  "in_stock": true
},
{
  "name": "Pgg Niupi",
  "horsePower": 602,
  "dollar_value": 231,
  "in_stock": true
},
{
  "name": "baoma3",
  "horsePower": 602,
  "dollar_value": 231,
  "in_stock": true
}]


const first = (array) => fp.first(array);

const prop = fp.curry((tagname, obj) => fp.prop(tagname, obj))

const getFirstName = fp.flowRight(prop('name'), first)

// console.log(getFirstName(cars))

let _average = function(xs) {
  return fp.reduce(fp.add, 0 ,xs) / xs.length
}
let averageDollarValue = function (cars){
  let dollar_values = fp.map(function(car){
    return car.dollar_value
  },cars)
  return _average(dollar_values)
}


const　map =fp.curry((fun, ary ) => fp.map(fun,ary))

const list = ["Hello Word", "Pgg Niupi"]

const lower = (str) => fp.toLower(str);

const _underscore =   fp.replace(/\s+/g,"_")

const toUnderscore = (str) => _underscore(str)

const sanitizeNames =map(fp.flowRight(toUnderscore, lower))

console.log(sanitizeNames(list)) //[ 'hello_word', 'pgg_niupi' ]


console.log('－－－－－－－－')

console.log(fp.add(2,3))