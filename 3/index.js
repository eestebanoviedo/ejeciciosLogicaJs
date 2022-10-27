function highestDigit(numbers) {
  var digits = numbers.toString().split('')
  var high = digits[0]

  for (var i = 0; i < digits.length; i++) {
    if (high < digits[i]) {
      high = digits[i]
    }
  }
  return high
}

console.log(highestDigit(512721))
console.log(highestDigit(19340942))
