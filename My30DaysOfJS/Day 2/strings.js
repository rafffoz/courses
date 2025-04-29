// String examples

let firstName = 'Rafael'
let lastName = "Martini"
let job = `front end developer`

console.log('I am', firstName, lastName, "and I am a", job)

// String Concatenation
// Connect two or more strings already declared into a new declared one

let space = " "
let fullName = firstName + space + lastName
console.log(fullName)

// breaking line on long strings

const paragraph = "Testing that there will be \
a new line"
console.log(paragraph)

// escape sequences

console.log('testing a line break \n right here') // line break
console.log('testing a tab spacing\t\there') // tab, means 8 spaces
console.log('this is a backslash symbol: \\') // backslash symbol
console.log("using 'quotes' with actual single quotes, and now \"inside escape symbol\".\nDouble quotes won't work on it's own.")

// Template Literals `templease strings` and injecting data as ${expressions}

console.log(`statically writing the data: the sum of 2 and 3 is 5`)

let a = 2
let b = 3
let word = "adding"
console.log(`dynamically injecting the data: the ${word} of ${a} and ${b} is ${a + b}`)
console.log(`that makes the data as expressiong/word inside string, different from getting a number data type:`, b + a)

// String methods

// string length method - returns number of characters including empty space

let newWord = "intermission"
console.log(newWord.length) // 12

// accessing characters in a string - using [index] - starts at zero, finishes at length number minus one

let otherWord = "photography"
console.log(otherWord.length) // 11
let firstLetter = otherWord[0] // p
console.log(firstLetter)
let lastLetterWrong = otherWord[11] // undefinied, because there's no 11 index on that string
console.log(lastLetterWrong)
let lastLetterManual = otherWord[10] // y
console.log(lastLetterManual)
let lastLetterMethod = otherWord.length - 1 // 10
console.log(otherWord[lastLetterMethod]) // y

// toUpperCase() - method changes string to uppercase letters
// toLowerCase() - method changes string to lowercase letters

let country = "Brazil"
console.log(country.toUpperCase()) // BRAZIL
console.log(country.toLowerCase()) // brazil

// substr() - takes two arguments, starting index and number of characters os slice
//substring() - takes two arguments, starting index and stopping index, doesn't include the stopping one
console.log(country.substr(2, 4)) // azil
console.log(country.substring(1,5)) // razi
console.log(country.substring(4)) // il

// split() - split method splits a string at a specified place
let longWord = "another word, ok? allright!"
console.log(longWord.split() ) // changes to an array ["another word"]
console.log(longWord.split(' ')) // split to an array at space
console.log(longWord.split('')) // split to an array at each letter
console.log(longWord.split(',')) // split to an array at comma
console.log(longWord.split(', ')) // split to an array at comma and space (together)
console.log(longWord.split('?')) // split to an array at question mark
console.log(longWord.split('w')) // split to an array at w

// trim() - removes trailing space in the beggining and end of a string
let notTrimmingPhrase = "    space here      "
let trimmingPhrase = "    no space here      "
console.log(notTrimmingPhrase)
console.log(trimmingPhrase.trim())
console.log(trimmingPhrase.trim(' '))

// includes() - takes a substring arguments and checks if it exists in the string.
// returns a boolean
let includeExample = "This is Sparta"
console.log(includeExample.includes('This')) // true
console.log(includeExample.includes('sparta')) // false - it's case sensitive
console.log(includeExample.includes('This is')) // true

// replace() - takes as a parameter the old substring and a new substring
// string.replace(oldsubstring, newsubstring)

let replaceExample = 'I live on earth'
console.log(replaceExample.replace('earth', 'mars')) // I live on mars

// charAt() - takes index and it returns the value at that index
// string.charAt(index)

console.log(replaceExample.charAt(2)) // l
let replaceExampleLastWord = replaceExample.length - 1 // 14
console.log(replaceExampleLastWord) // 14
console.log(replaceExample.charAt(replaceExampleLastWord)) // h

//charCodeAt() - takes index and it returns char code (ASCII number) of the value at that index
// string.charCodeAt(index)

console.log(replaceExample.charCodeAt(0)) // I - ASCII number is 73

// indexOf() - takes a substring and if it exists in a string, returns the first position of the substring
// if it doesn't exists, returns -1
// string.indexOf(substring)

console.log(replaceExample.indexOf('earth')) // 10
console.log(replaceExample.indexOf('Live')) // -1 it's case sensitive

// lastIndexOf() - takes a substring and if it exists in a string, returns the last position of the substring
// if it doesn't exists, returns -1
// string.lastIndexOf(substring)

console.log(replaceExample.lastIndexOf('live')) // 2
console.log(replaceExample.lastIndexOf('Earth')) // -1

// concat() - it takes many substrings and joins them
// string.concat(substring, substring, substring)

let concatExample = '500'
console.log(concatExample.concat('miles', 10, 'more'))

// startsWith() - takes a substring as an argument and checks if string starts with that substring
// returns a boolean true or false
// string.startsWith(substring)

let newPhrase = "All you need is love"
console.log(newPhrase.startsWith('All')) // true
console.log(newPhrase.startsWith('all')) // false
console.log(newPhrase.startsWith('love')) // false

// endsWith() - takes a substring as an argument and checks if string ends with that substring
// returns a boolean true or false
// string.endsWith(substring)

console.log(newPhrase.endsWith('love')) // true
console.log(newPhrase.endsWith('Love')) // false
console.log(newPhrase.endsWith('all')) // false

// search() - takes a substring as an argument and it returns the index of the first match
// the seatch value can be a string or a regular expression pattern
// string.search(substring)

console.log(newPhrase.search('love')) // 16

// match() - takes a substring or regular expression pattern as an argument and returns an array if there's a match
// if there's no match, returns null
// string.match(substring)

let patternOne = /love/
let patternTwo = /love/gi
let patternThree = /\d+/

let matchExample = 'I love JavaScript. If you do not love JavaScript what else can you love.'
let matchExampleTwo = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
console.log(matchExample.match('love'))
console.log(matchExample.match(patternOne))
console.log(matchExample.match(patternTwo))
console.log(matchExampleTwo.match(patternThree))
console.log(matchExampleTwo.match(/\d+/g))

// repeat() - takes a number as argument and returns the repeated version of the string
// string.repeat(n)

let finalWord = 'Love '
console.log(finalWord.repeat(3)) // Love Love Love