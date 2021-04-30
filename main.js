const arrayOfNumbers = process.argv.slice(2)
const lastItem = arrayOfNumbers[arrayOfNumbers.length - 1]
let finalNumber = ''
 
for (number in arrayOfNumbers) {
    const numbers = arrayOfNumbers[number].toString()
    let numberStringified = ''
 
