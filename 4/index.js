function sortDescending(numbers) {
  var digits = numbers.toString().split('')
  numArray = digits.sort(function (a, b) {
    return b - a
  })
  return numArray
}

console.log(sortDescending(123))
console.log(sortDescending(1254859723))
console.log(sortDescending(73065))
