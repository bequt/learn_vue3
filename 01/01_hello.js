function fn(){
    console.log("fn----", this)
}

const fn2 = () => {
    console.log("fn2----", this)
}

const obj = {
    name: "孙悟空",
    fn: fn,
    fn2: fn2,
}

obj.fn()
obj.fn2()