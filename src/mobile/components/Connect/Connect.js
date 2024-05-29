import React from 'react'
import PropTypes from 'prop-types'

import Spinner from '../common/Spinner'

import css from './Connect.module.scss'

const Connect = ({ isConnecting, onClick }) => {
  return (
    <a
      title='Connect Wallet'
      className={css.connectButton}
      onClick={onClick}
    >
      {isConnecting ? <Spinner className={css.spinner} /> : <span>Connect</span>}
    </a>
  )
}

Connect.propTypes = {
  isConnecting: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Connect