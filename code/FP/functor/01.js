//  functor 函子 
//函子 是一个包含了 一个值的盒子 这个盒子有一个 map方法 供外界调用 并返回一个新的函子
class functor {
    
    // 创建一个静态方法，用与返回一个新的函子
    static of(value){
        return new functor(value)
    }

    constructor(value) {
        this._value = value
    }
    //会返回一个新的函子 把我当前的函子 的value 传给fn ,处理后返回一个值，并把这个值当作 map return 的新函子 的 value 
    map(fn) {
        return functor.of((fn(this._value)))
    }
}

functor.of(2)
    .map(x => x + 1)

console.log(functor.of(2)
.map(x => x + 1).map(y => y * y))

