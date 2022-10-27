function convert(temp) {
  let arr = temp.split('°')[0]
  const CtoF = (arr * 9) / 5 + 32
  const FtoC = ((arr - 32) * 5) / 9

  if (temp.includes('C')) {
    return `${Math.round(CtoF)}°F`
  }
  if (temp.includes('F')) {
    return `${Math.round(FtoC)}°C`
  } else {
    return 'Error'
  }
}

console.log(convert('35°C'))
console.log(convert('19°F'))
console.log(convert('33'))
