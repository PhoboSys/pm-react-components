import React from 'react'
import PropTypes from 'prop-types'

import { factoryFunds } from '../../SVG/currency/funds'

import css from './Balance.module.scss'

const Balance = ({ currency }) => {

  const Currency = factoryFunds(currency)

  return (
    <div className={css.balance}>
      <Currency />
    </div>
  )

}

Balance.propTypes = {
  currency: PropTypes.string
}

export default React.memo(Balance)
