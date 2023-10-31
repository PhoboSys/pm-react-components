import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import css from './DateCell.module.scss'

const DateCell = ({ date }) => {
  return (
    <span className={css.container}>
      {moment.unix(date).fromNow()}
    </span>
  )
}

DateCell.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default React.memo(DateCell)