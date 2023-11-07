import React from 'react'
import PropTypes from 'prop-types'

import css from './Connect.module.scss'

const Connect = ({ onClick }) => {
  return (
    <a
      title='Connect Wallet'
      className={css.connectButton}
      onClick={onClick}
    >
      Connect
    </a>
  )
}

Connect.propTypes = {
  onClick: PropTypes.func
}

export default Connect