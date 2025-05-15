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
let randomNumber = Math.random() // between 0 and 0.9
console.log(randomNumber)
let roundedRandomNumber = Math.floor(randomNumber * 101) // between 0 and 100
console.log(roundedRandomNumber)
let randomSimple = Math.floor(Math.random() * 101)
console.log(randomSimple)

// 8 Generate a random number between 50 and 100 inclusively.
let otherRandomNumber = Math.floor(Math.random() * 51) + 50
console.log(otherRandomNumber)

// 9 Generate a random number between 0 and 255 inclusively.
// can be used to generate RGB colors
let anotherRandomNumber = Math.floor(Math.random() * 256)
console.log(anotherRandomNumber)

// 10 Access the 'JavaScript' string characters using a random number.
let wordJS = 'JavaScript' // get the string name
console.log(typeof wordJS) // it's a string
console.log(wordJS.length) // 10 words just checking

// this one is redundant because wordJS.length is already a number
// let wordToNumber = Number(wordJS.length) // turns string to number
// console.log(typeof wordToNumber) // it's a number [10]

let defineIndex = Math.floor(Math.random() * wordJS.length) // generates a random index from 0 to 9
console.log(defineIndex)

let wordIndex = wordJS[defineIndex] // use the index to get a random character from the string
console.log(wordIndex)

// 11 Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let escapeTesting = '1 1 1 1 1\n' + '2 1 2 4 8\n' + '3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'
console.log(escapeTesting)

// 12 Use substr to slice out the phrase
// because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let longString = 'You cannot end a sentence with because because because is a conjunction'
console.log(longString)
let stringToCut = 'because'
let stringToCutSize = stringToCut.length
console.log(stringToCutSize) // 7 letters
let begginStringIndex = longString.indexOf(stringToCut)
let endingStringIndex = longString.lastIndexOf(stringToCut) + stringToCutSize
console.log(begginStringIndex + ' and ' + endingStringIndex) // 31 and 54

let begginingString = longString.slice(0, begginStringIndex)
console.log(begginingString) // You cannot end a sentence with 
let endingString = longString.slice(endingStringIndex)
console.log(endingString) //  is a conjunction
let finalString = begginingString + endingString
console.log(finalString) // You cannot end a sentence with  is a conjunction