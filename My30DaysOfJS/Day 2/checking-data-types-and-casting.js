// Declaring different javascript data types

let dataString = 'String data type'
let dataStringTwo = '20'
let dataNumber = 20
let dataNumberTwo = 10
let dataUndefined // undefined, because a value was not assigned
let dataBooleanTrue = dataNumber > dataNumberTwo
let dataBooleanFalse = dataNumber < dataNumberTwo

console.log(typeof 'String data type') // string
console.log(typeof dataStringTwo) //string
console.log(typeof 20) // number
console.log(typeof dataNumber) // number
console.log(typeof dataUndefined) // undefined
console.log(typeof undefined) // undefined
console.log(typeof dataBooleanTrue) // boolean
console.log(typeof dataBooleanFalse) // boolean
console.log(typeof null) // object

// Casting = converting one data type to another
// when doing arithmetic operations, 'string numbers' must be converted to integer or float

// string to int

let num = '10' // 10 string data type
let numInt = parseInt(num)
console.log(numInt) // 10 (integer number data type)

let otherNum = '20' // 20 string data type
let otherNumInt = Number(otherNum)
console.log(otherNumInt) // 20 (integer number data type)

let yetAnotherNum = '30' // 30 string data type
let yetAnotherNumInt = +yetAnotherNum
console.log(yetAnotherNumInt) // 30 integer number data type

// string to float

let oneMoreNum = '12.9' // 12.9 string data type
let oneMoreNumFloat = parseFloat(oneMoreNum)
console.log(oneMoreNumFloat) // 12.9 float number data type

// floeat to int

let floatToNum = parseInt(oneMoreNumFloat)
console.log(floatToNum) // 12.9 turned to 12