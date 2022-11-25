// map和数组的转换
const map = new Map()
map.set("name", "孙悟空")
map.set("age", 18)

const arr = Array.from(map)
console.log(arr)

// map遍历
for (const ele of map) {
    console.log(ele[0], ele[1])
}

console.log(map.keys())
console.log(map.values())
