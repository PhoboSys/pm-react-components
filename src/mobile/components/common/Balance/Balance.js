import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { factoryFunds } from '../../SVG/currency/funds'

import css from './Balance.module.scss'

const Balance = ({ className, currency, fill, size }) => {

  const Currency = factoryFunds(currency)

  return (
    <div className={cn(css.balance, className)}>
      <Currency fill={fill} size={size} />
    </div>
  )

}

Balance.propTypes = {
  className: PropTypes.string,
  currency: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number
}

export default React.memo(Balance)
