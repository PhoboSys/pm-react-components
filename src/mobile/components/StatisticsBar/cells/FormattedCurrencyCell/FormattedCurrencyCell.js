import PropTypes from 'prop-types'

import { div } from '@lib/calc-utils'
import { htmlCurrency } from '@lib/html-utils'

const formatSymboled = (amount, currency) => {
  const formater = new Intl.NumberFormat(Intl.Locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
  return formater.format(amount)
}

function formatNumber(num = 0, currency, token) {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ]

  let formatted = num

  const found = map.find((x) => Math.abs(num) >= x.threshold)
  if (found) formatted = div(num, found.threshold)
  if (!token && currency) formatted = formatSymboled(formatted, currency)
  if (token) formatted = htmlCurrency(formatted)
  if (found) formatted = formatted + found.suffix

  return formatted
}

const FormattedCurrencyCell = ({ amount, currency, token }) => {
  return formatNumber(amount, currency, token)
}

FormattedCurrencyCell.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  token: PropTypes.bool,
}

export default FormattedCurrencyCell