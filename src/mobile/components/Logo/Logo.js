import React from 'react'
import PropTypes from 'prop-types'

import LogoIcon from '../SVG/Logo'

import css from './Logo.module.scss'

const Logo = ({ basepath }) => {
  return (
    <a href={basepath} className={css.container} tabIndex={-1}>
      <LogoIcon />
    </a>
  )
}

Logo.propTypes = {
  basepath: PropTypes.string,
}

export default Logo