import React from 'react'
import PropTypes from 'prop-types'

import TokenCurrencyCell from '../TokenCurrencyCell'
import FormattedCurrencyCell from '../FormattedCurrencyCell'

import css from './CurrencyCell.module.scss'

const CurrencyCell = ({ amount, currency, convertedAmount, convertedCurrency }) => {
  return (
    <div className={css.container}>
      <TokenCurrencyCell amount={amount} currency={currency} />
      <span className={css.converted}>
        &#40;
        <FormattedCurrencyCell
          amount={convertedAmount}
          currency={convertedCurrency}
        />
        &#41;  
      </span>
    </div>
  )
}

CurrencyCell.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  convertedAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  convertedCurrency: PropTypes.string,
}

export default CurrencyCell