const arrayOfNumbers = process.argv.slice(2)
const lastUnit = arrayOfNumbers[arrayOfNumbers.length - 1]
let finalNumber = ''
 
for (number in arrayOfNumbers) {
    const numbers = arrayOfNumbers[number].toString()
    let numberStringified = ''
    
    for (let i = 0; i < numbers.length; i++) {
        switch (parseInt(numbers.charAt(i))) {
            case 0:
                numberStringified = numberStringified + 'Zero'
                break;
            case 1:
                numberStringified = numberStringified + 'One'
                break;
            case 2:
                numberStringified = numberStringified + 'Two'
                break;
            case 3:
                numberStringified = numberStringified + 'Three'
                break;
            case 4:
                numberStringified = numberStringified + 'Four'
                break;
            case 5:
                numberStringified = numberStringified + 'Five'
                break;
            case 6:
                numberStringified = numberStringified + 'Six'
                break;
            case 7:
                numberStringified = numberStringified + 'Seven'
                break;
            case 8:
                numberStringified = numberStringified + 'Eight'
                break;
            case 9:
                numberStringified = numberStringified + 'Nine'
                break;
        }
    }
 
    finalNumber = finalNumber + numberStringified + (arrayOfNumbers[number] === lastUnit ? '' : ',')
}
 
console.log(finalNumber)