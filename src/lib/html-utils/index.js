import { floor, toLower } from 'lodash'

import { CurrencyFormatter } from './currency'
import { mul } from '../calc-utils'

export function htmlPercent(percent, precision = 2) {
  return (floor(mul(percent,100), precision) || 0) + '%'
}

export function htmlCurrency(amount) {
  if (isNaN(+amount)) return ''

  return CurrencyFormatter.formatDefault(amount, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  })
}

export function htmlAddress(address) {
  return toLower(address?.replace(/(0x.{3}).*(.{5})$/, '$1...$2'))
}
