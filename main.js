// let arr = [`Behruz`, `ali`, `mushtariy`, `asil`]
// let promt = prompt('ism yozing!')
// arr.push(promt)
// alert(arr)

// let arr = [5, 1, 90, 34, 27, 23, 11, 55, 77]
// let result = arr.filter((v, i, a) => v % 2 == 0)
// console.log(result);

let arr = [`Ananas`, `Shaftoli`, `Kivi`, `Olma`]
let erorr = arr.shift()
let result = arr.length
console.log(arr);

if (confirm(`Ma'lumotlarni o'chirishni hohlaysizmi`)) {
    error = `Boshlanishida Arrayni uzunligi: ${result}`
    alert(error)
    console.log(arr);
}
else {
    result = `Boshlanishida Arrayni uzunligi: ${result}`
    alert(result)
    console.log(arr);
}

