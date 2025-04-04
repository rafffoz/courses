// primitive data types
let numOne = 3
let numTwo = 3
numOne[0] = 1 // doesn't change the value of numOne to 1
console.log(numOne == numTwo) //true

let js = 'JavaScript'
let py = 'Python'
console.log(js == py) // false


// non primitive data types
let red = [1, 2, 3]
red[0] = 10
console.log(red)

let blue = [10, 2, 3]
console.log(red == blue) // false

let yellow = red
console.log(red == yellow) //true