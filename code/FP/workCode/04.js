class Container {
  static of (value){
    return new Container(value)
  }
  constructor (value){
    this._value = value;
  }
  map(fn){
    return Container.of(fn(this._value))
  }
}

class MayBe {
  static of (x){
    return new Container(x)
  }
  isNothing (){
    return this._value === null || this._value ===undefined
  }
  constructor (x){
    this._value = x;
  }
  map(fn){
    return this.isNothing() ? this: MyBe.of(fn(this._value))
  }
}


const fp = require("lodash/fp");

let maybe = MayBe.of([5,6,1]);

let ex1 = ()=>{

}

let xs = Container.of(['do', 'ray'])

let ex2= () => {
 return xs.map((list)=> fp.first(list))._value
}
// console.log(ex2()) //do

let safeProp = fp.curry(function(x, o){
  return MayBe.of(o[x])
})

let user = {id: 2, name: 'Albert'}

let ex3 = () =>{
  return fp.first(safeProp('name',user)._value.split(""))
}
console.log(ex3()) //A

let ex4 = function(n){
  if(n){
    return parseInt(n)
  }
}
MayBe.of(n).map((n)=> parseInt(n))