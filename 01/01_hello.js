const obj1 = {name: "孙悟空", age: 18}
const obj2 = {address: "花果山", age: 28}

Object.assign(obj2, obj1)
console.log(obj2)

const obj3 = {...obj1}
console.log(obj3)