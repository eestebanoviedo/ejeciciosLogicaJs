function replaceVowel(str) {
  var str = str.toLowerCase()
  var mapObj = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  str = str.replace(/a|e|i|o|u/g, function (matched) {
    return mapObj[matched]
  })

  return str
}

console.log(replaceVowel('karachi'))
console.log(replaceVowel('chembur'))
console.log(replaceVowel('khandbari'))
