import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import css from './AccountIcon.module.scss';

const AccountIcon = ({ className, account = '', ...props }) => {
  return (
    <a
      className={cn(css.container, className)}
      {...props}
    >
      {account.slice(2, 4).toUpperCase()}
    </a>
  )
}

AccountIcon.propTypes = {
  className: PropTypes.string,
  account: PropTypes.string,
}

export default AccountIcon