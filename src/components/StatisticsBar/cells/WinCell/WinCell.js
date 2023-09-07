import React from 'react'
import PropTypes from 'prop-types'

import { htmlCurrency, htmlPercent } from '@lib/html-utils'

import css from './WinCell.module.scss'

const WinCell = ({ count, percent }) => {
  return (
    <div className={css.container}>
      <span className={css.count}>{htmlCurrency(count)}</span>
      <span className={css.percent}>&#40;{htmlPercent(percent)}&#41;</span>
    </div>
  )
}

WinCell.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WinCell