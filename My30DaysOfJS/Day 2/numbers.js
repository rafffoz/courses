// declaring number data type
let year = 2025
const bodyTemp = 9.81

console.log('The year was', year, 'my body temperature was', bodyTemp)

// Math Object
const PI = Math.PI
console.log(PI) // 3.141592653589793

console.log(Math.round(3.12)) // 3
console.log(Math.round(3.8)) // 4

console.log(Math.floor(3.1)) // 3 rounding down
console.log(Math.floor(3.8)) // 3

console.log(Math.ceil(3.1)) // 4
console.log(Math.ceil(3.8)) // 4

console.log(Math.min(-5, 2, 20, 100)) // -5
console.log(Math.max(-5, 2, 20, 100)) // 100

const randomNum = Math.random() // random number between 0 to 0.999999...
console.log(randomNum)

const randomNumber = Math.floor(Math.random() * 11)
console.log(randomNumber)

console.log(Math.abs(-10))
console.log(Math.log(100))
console.log(Math.sqrt(100))

// Random number generator (method)
let randomGenerator = Math.random() // between 0 to 0.9999...
console.log(randomGenerator)

let numBtZeroAndTen = randomGenerator * 11
console.log(numBtZeroAndTen) // between 0 and 10.9999...

let randomRoundToFloor = Math.floor(numBtZeroAndTen)
console.log(randomRoundToFloor) // rounding to get between 0 and 10 