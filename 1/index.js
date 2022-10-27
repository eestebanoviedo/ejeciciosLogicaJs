function charCount(letter, str) {
  var count = [...str].filter((x) => x === letter).length
  return count
}

console.log(charCount('a', 'edabit'))
console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('b', 'big fat bubble'))
