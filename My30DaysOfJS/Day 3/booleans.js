// booleans

let isLightOn = true
let isRaining = false
let trueValue = 4 > 3
let falseValue = 3 > 4
console.log(trueValue) // true
console.log(falseValue) // false

// Undefined
let undVariable
console.log(undVariable) // not defined, not assigned any value to variable

// Null
let emptyVariable = null
console.log(emptyVariable) // null, means no value

// Assignment operators and Arithmetic Operators
let x = 2
let y = 5 
let assignA = x = y // equal
let assignB = x += y // Addition
let assignC = x -= y // substraction
let assignD = x *= y // multiplication
let assignF = x /= y // division
let assignG = x %= y // modulus
let assignH = x **= y // exponential

// physics baby!
let distance = 300 // kilometers
let time = 30 // seconds
let velocity = distance / time
console.log(velocity) // 10 Km/s

// string interpolation needs to use `` it can break line and use direct ${variables}
console.log(`He ran ${distance}km in about
${time} seconds, ` + 'that`s about ' + velocity + "km/s" )

// Comparison operators
let a = 10
let b = 5
let c = 10
console.log(a > b) // true
console.log(a < b) // false
console.log(a < c) // false
console.log(a <= c) // true
console.log(a >= b) // true
console.log(a != b) // true
console.log(a != c) // false

// more advanced
console.log(1 == true) // true equivalent
console.log(1 == false) // false
console.log(1 === true) // false, not same data type not exacly equivalent
console.log(0 == true) // false
console.log(0 == false) // true equivalent
console.log(0 === false) // false, not same data type not exacly equivalent

console.log(3 == '3') // true equivalent, compare only value
console.log(3 === '3') // false not exactly, compare value and data type
console.log(3 != 3) // false, compare only value
console.log(3 !== 3) // false, compare value and data type
console.log(3 != '3') // false, comparing only value it's the same
console.log(3 !== '3') // true, compares value and data type

console.log(0 == '') // true, equivalent
console.log(0 === '') // false, not exactly the same
console.log(0 == ' ') // true, equivalent

console.log(undefined == null) // true, equivalent
console.log(undefined === null) // false, not exactly the same

console.log('mango'.length == 'rapaz'.length) // true, same number index
console.log('gigantic'.length != 'small'.length) // true
console.log('gigantic'.length < 'small'.length) // false

// Logical operator

// ampersand operator && - true only when all operands are true
const check = 4 > 3 && 3 > 2 // true true = true
const checkB = 4 > 3 && 3 > 4 // true false = false
const checkC = 4 > 5 && 3 > 4 // false false = false

// pipe operator || - true if either of operands are true
const checkD = 4 > 3 || 3 > 2 // true true = true
const checkE = 4 > 3 || 3 > 4 // true false = true
const checkF = 4 > 5 || 3 > 4 // false false = false

// negation operator ! - negates true to false and false to true
const checkG = !(4 > 3) // becomes false
let isLightsOn = true // true
let isLightOff = !isLightOn // false

// Increment Operator
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
let countInscrement = ++count
console.log(countInscrement) // 2

let countb = 0
console.log(++countb)        // 1
console.log(countb)          // 1

// Decrement Operator
let countC = 0
console.log(countC--) // 0
console.log(countC) // -1

let countD = 0
console.log(--countD) // -1
console.log(countD) // -1

// Ternary (conditional) operator
let height = 150
const canGo = height >= 170 ? "can ride" : "can't ride"
console.log(canGo) // can't ride

// still need to learn but cool!
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
}
console.log(greeting({ name: "Alice"})) // Howdy Alice
console.log(greeting(null)) // Howdy Stranger