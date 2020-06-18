// Either 函子  用来做异常处理

class Left {
  static of(value) {
    return new Left(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return this
  }

}

class Right {
  static of(value) {
    return new Right(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return Right.of(fn(this._value))
  }

}

let r1 = Right.of(12).map(x => x + 2)

let r2= Left.of(12).map(x => x + 2) 

// console.log(r1) //Right { _value: 14 }

// console.log(r2) //Left { _value: 12 }

//实例


function parseJson (str) {
  try{
    return Right.of(JSON.parse(str))
  } catch (e) {
    return Left.of({ error: e.message })
  }
}

console.log(parseJson("asfhjkdkljashjkd")) //Left { _value: { error: 'Unexpected token a in JSON at position 0' } }
console.log(parseJson('{"name":"pgg"}').map(x => x.name.toUpperCase()))  //