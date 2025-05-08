console.log('LEVEL 1 CHALLENGES')

// 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var challenge = '30 Days Of JavaScript'

// 2 Print the string on the browser console using console.log()
console.log(typeof challenge)
console.log(challenge)

// 3 Print the length of the string on the browser console using console.log()
console.log(challenge.length) // 21

// 4 Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toLocaleUpperCase())

// 5 Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// 6 Cut (slice) out the first word of the string using substr() or substring() method
// substr() is deprecated nowadays
console.log(challenge.substring(1,22))
console.log(challenge.substring(1)) // also works, it will start from that index till the end

// 6b slice method - cuts out what's not in the index interval
// aparently slice is better as they work pretty similarly
console.log(challenge.slice(1,22))
console.log(challenge.slice(1)) // also works, it will start from that index till the end

// 7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0, 2))
console.log(challenge.substring(0, 2))

// 8 Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')) // true

// 9 Split the string into an array using split() method
console.log(challenge.split())

// 10 Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

// 10b split at the word "of"
console.log(challenge.split('Of'))

// 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let challengeSplit = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(challengeSplit.split(','))

// 11b to not bring the space before ' Google' '  Microsoft' etc we use the trim() method with the map() method
// trim() method removes trailling space in the beggining and end of a string
// map() method transforms each element in an array and return with the transformed value
let companies = challengeSplit.split(',').map(companies => companies.trim())
console.log(companies)

// 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

// 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15)) // S

// 14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)) // 74
console.log('J'.charCodeAt(0)) //74
console.log(String.fromCharCode(74)); // J

// 15 Use indexOf to determine the position of the first occurrence of 'a' in 30 Days Of JavaScript
console.log(challenge.indexOf('a')) // 4
console.log(challenge.indexOf('2')) // -1 (it doesn't exist)
console.log(challenge.slice(5)) // ys Of JavaScript

// 16 Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')) // 14
console.log(challenge.slice(15)) // Script

// 17 Use indexOf to find the position of the first occurrence of the word because
// in the following sentence: 'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')) // 31

// 18 Use lastIndexOf to find the position of the last occurrence of the word because
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')) // 47

// 19 Use search to find the position of the first occurrence of the word because
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')) // 31

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// check 11b

// 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('3')) // true
console.log(challenge.startsWith('2')) // false

// 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t')) // true
console.log(challenge.endsWith('y')) // false

// 23 Use match() method to find all the a’s in 30 Days Of JavaScript
let matchTest = /Days/
console.log(challenge.match('a')) // index 4
console.log(challenge.match(matchTest)) // index 3
console.log(challenge.match('x')) // null

// 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let concatTest = '30 '
console.log(concatTest.concat('Days of', ' JavaScipt'))

// 25 Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))