console.log('LEVEL 2 CHALLENGES')

// 1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log('There is no exercise better for the heart than reaching down and lifting people up.')

// 2 Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let teresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(teresaQuote)

// 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10') // = string
console.log(typeof(10) === 10) // false because string '10' is not equal to number 10
console.log(typeof(parseInt('10')) === 10) // false because string 'number' is not equal to number 10
console.log(typeof(parseInt('10'))) // returns 'number'

let stringNumber = '10'
let numberNumber = Number(stringNumber)
console.log(numberNumber) // 10
console.log(numberNumber === 10) // true

// 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10) // false
let floatToInt = Math.ceil(parseFloat('9.8'))
console.log(floatToInt) // 10
console.log(floatToInt === 10) // true

// 5 Check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'
console.log(python.includes("on") && jargon.includes("on")) // true

let checking = python.includes("on") && jargon.includes("on")
console.log(checking) // true

let checkingWrong = python.includes("thon") && jargon.includes("thon")
console.log(checkingWrong) // false

// 5b using array, arrow function and .every() method that checks all items in the array meet the condition
let result = ['python', 'jargon'].every(word => word.includes('on'))
console.log(result) // true

// 5c using reusable function
function bothIncludes(common, word1, word2) {
    return word1.includes(common) && word2.includes(common);
}

let resultFunction = bothIncludes('on', 'python', 'jargon')
console.log(resultFunction) // true

// 6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let checkSentence = 'I hope this course is not full of jargon'
console.log(checkSentence.includes('jargon')) // true

// 7 Generate a random number between 0 and 100 inclusively.
