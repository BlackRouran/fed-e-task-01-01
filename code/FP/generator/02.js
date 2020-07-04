//next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

function* add(num) {
  var x = yield num + num
  var y = yield x * (x-1)
  console.log(x + y)
}

const a = add(3);
console.log(a.next())
console.log(a.next()) //这时候 { value: NaN, done: false } 因为没有上一个 yaild 的返回值
console.log(a.next())

const b = add(4);
console.log(b.next())
console.log(b.next(8)) //64
console.log(b.next())