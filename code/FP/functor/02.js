// MayBe函子 : 用于处理 null 和 undefined



class MayBe{
  
  static of (value) {
    return new MayBe(value)
  }

  constructor (value){
    this._value = value
  }

  map (fn) { 
    return  this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing () {
    return this._value === null || this._value === undefined 
  }
}

let r = MayBe.of("hello word")
          .map(x => x.toUpperCase())

// console.log(r)  //MayBe { _value: 'HELLO WORD' }

let r1 = MayBe.of(null)
          .map(x => x.toUpperCase())

console.log(r1)