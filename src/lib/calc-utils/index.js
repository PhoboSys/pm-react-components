import { isNumber } from 'lodash'
import Big from 'big.js'
Big.PE = 1e+6

function __inNumbers(...args) {
  for (let num of args) {
    if (
      num === '' ||
      isNaN(Number(num)) ||
      !isNumber(Number(num))
    ) return false
  }
  return true
}

export function mul(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0

  number1 = Big(number1)
  number2 = Big(number2)
  return number1
    .times(number2)
    .toString() || 0
}

export function sub(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0

  number1 = Big(number1)
  number2 = Big(number2)
  return number1
    .minus(number2)
    .toString() || 0
}

export function div(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0

  number1 = Big(number1)
  number2 = Big(number2)
  return number1
    .div(number2)
    .toString() || 0
}

export function isPositive(number) {
  if (!__inNumbers(number)) return undefined

  return Big(number).s === 1
}

export function isNegative(number) {
  if (!__inNumbers(number)) return undefined

  return Big(number).s === -1
}
