function daysUntil(date) {
  var starteDate = new Date(date).getTime()
  var dateNow = new Date().getTime()

  var diff = dateNow - starteDate
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

console.log(daysUntil('10/16/2022'))
console.log(daysUntil('10/20/2022'))
