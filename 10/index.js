function calculator(n1, operator, n2) {
  const result = n1 + operator + n2
  return new Function('return ' + result)()
}

console.log(calculator(2, '+', 2))
console.log(calculator(2, '*', 2))
console.log(calculator(4, '/', 2))
