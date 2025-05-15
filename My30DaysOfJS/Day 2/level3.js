console.log('LEVEL 3 CHALLENGES')

// 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let lovePattern = /love/gi // search (g) ignoring case sensitive (i) cases of the /love/ regular expression
let countingNumberWords = love.match(lovePattern)
console.log(countingNumberWords) // 3 ['Love', 'love' 'love']
// 1b extra to get the answer as a number
console.log (typeof countingNumberWords) // object
let turnObjectIntoNumber = countingNumberWords.length
console.log(turnObjectIntoNumber) // 3
console.log(typeof turnObjectIntoNumber) // number

// 2 Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because because is a conjunction'
let becausePattern = /because/gi
let countingBecause = because.match(becausePattern)
console.log(countingBecause.length) // 4

// 3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const advancedSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    let advancedSentenceClean = advancedSentence.replace(/[^a-zA-Z ]/g, "") // remove non-letters except space
    console.log(advancedSentenceClean)
    // the rest is functions and other things I did not learn yet

// 4 Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let textIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbersText = textIncome.match(/\d+/g) // finds the numbers
console.log(numbersText) // 3 ['5000', '10000', '15000']
console.log(typeof numbersText) // object

let monthSalary = Number(numbersText[0]) * 12
let annualBonus = Number(numbersText[1])
let onlineCouses = Number(numbersText[2])
// it could also be done above with
// let numbersText = textIncome.match(/\d+/g).map(Number) // finds the numbers and turns into data type Number

let annualIncome = monthSalary + annualBonus + (onlineCouses * 12)
console.log(annualIncome) // 250000