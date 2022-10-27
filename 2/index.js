function minMax(array) {
  var max = 0
  var min = array[0]

  for (var i = 0; i < array.length; i++) {
    array[i] > max ? (max = array[i]) : (min = array[i])
  }
  return [min, max]
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log([1])
