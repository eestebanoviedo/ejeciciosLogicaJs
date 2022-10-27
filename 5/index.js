function isValid(numbers) {
  var contentLetters = /[a-zA-Z]/.test(numbers)
  if (!contentLetters && numbers.length === 4) {
    return true
  } else {
    return false
  }
}

console.log(isValid('1714'))
console.log(isValid('12424'))
console.log(isValid('732 2'))
console.log(isValid('A323'))
