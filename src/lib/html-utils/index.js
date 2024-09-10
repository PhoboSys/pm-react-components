import { floor, toLower } from 'lodash'
import Big from 'big.js'

import { CurrencyFormatter } from './currency'
import { eq, lt, gt, mul } from '../calc-utils'

export function htmlPercent(percent, precision = 2) {
  return (floor(mul(percent,100), precision) || 0) + '%'
}

export function htmlCurrency(amount, maximumFractionDigits = 3) {
  if (isNaN(+amount)) return ''

  const HTML_LOWEST_AMOUNT = Math.pow(10, -(maximumFractionDigits))

  if (!eq(amount, 0) && lt(Big(amount).abs().toString(), HTML_LOWEST_AMOUNT)) {
    if (gt(amount, 0)) return `<${HTML_LOWEST_AMOUNT}`
    else return `<-${HTML_LOWEST_AMOUNT}`
  }

  return CurrencyFormatter.formatDefault(amount, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  })
}

export function htmlAddress(address) {
  return toLower(address?.replace(/(0x.{3}).*(.{5})$/, '$1...$2'))
}
