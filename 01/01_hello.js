let arr1 = [1, 2, 44, 42, 21, 11]

arr1.sort((a, b) => b - a)
console.log(arr1)

// forEach，遍历数组
// 需要一个回调函数作为参数，这个回调函数会被调用多次
// element，当前元素
// index，当前元素的索引
// array，被遍历数组
arr1.forEach((element, index, array) => {
    console.log(element, index, array)
})

// filter()，将数组中符合条件元素保存到一个新数组中返回
// 非破坏性方法，不会影响原数组
arr2 = [1, 2, 44, 42, 21, 11]
arr2.filter((element) => {
    if (element % 2 === 0) {
        console.log(element)
    }
})

// map
// 根据当前数组生成一个新数组
// 非破坏性方法，不会影响原数组
arr3 = [1, 2, 44, 42, 21, 11]
result1 = arr3.map((element) => {
    return element * 2
})
console.log(result1)

// reduce
// 可以将一个数组中的所有元素整合为一个值
arr4 = [1, 2, 44, 42, 21, 11]
result2 = arr4.reduce((element1, element2) => {
    return element1 + element2
})
console.log(result2)
