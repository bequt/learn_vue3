class Person {
    #name // 实例使用#开头就变成私有属性
    #age

    constructor(name, age) {
        this.#name = name // 赋值也要加#
        this.#age = age
    }

    sayHello() {
        console.log(this.#name)
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    get age() {
        return this.#age
    }
}

const p1 = new Person("张三", 18)
p1.sayHello()
p1.setName("李四")
console.log(p1.getName())
console.log(p1.getName())