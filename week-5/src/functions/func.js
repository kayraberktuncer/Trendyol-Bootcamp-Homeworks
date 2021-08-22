export const divide = (dividend, divisor) => {
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error('Invalid argument!')
  }
  if (divisor === 0) {
    throw new Error('Divide by zero!')
  }
  return dividend / divisor
}

export const toPascalCase = (sentence) => {
  return sentence.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}
