import React from 'react'
import PropTypes from 'prop-types'

import css from './Header.module.scss'

const Header = ({ children }) => {
  return (
    <div className={css.header}>{children}</div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header