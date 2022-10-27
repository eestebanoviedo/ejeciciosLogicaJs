function sumTwoSmallestNums(array) {
  if (array.length < 2) return 0

  let first = Number.MAX_VALUE
  let second = Number.MAX_VALUE

  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (current < first && Math.sign(current) !== -1) {
      second = first
      first = current
    } else if (
      current < second &&
      current !== first &&
      Math.sign(current) !== -1
    ) {
      second = current
    }
  }
  return first + second
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(
  sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
)
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))
