class Person{
    name = "孙悟空"
    age = 18

    sayHello() {
        console.log("1")
    }
}

const p = new Person()

console.log(p.hasOwnProperty("name")) // true
console.log(p.hasOwnProperty("sayHello")) // false

console.log(Object.hasOwn(p, "name"))
console.log(Object.hasOwn(p, "sayHello"))

