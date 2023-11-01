import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import css from './Connect.module.scss'

const Connect = ({ className, onClick }) => {
  return (
    <div className={cn(css.connect, className)}>
      <a
        title='Connect Wallet'
        className={css.connectButton}
        onClick={onClick}
      >
        Connect
      </a>
   </div>
  )
}

Connect.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Connect