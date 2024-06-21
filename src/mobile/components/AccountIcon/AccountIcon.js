import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { colorHash } from '@lib/hash-utils'

import css from './AccountIcon.module.scss';

const AccountIcon = ({ className, account = '', ...props }) => {
  return (
    <a
      className={cn(css.container, className)}
      style={{ background: colorHash(account) }}
      {...props}
    >
      {account.slice(2, 3).toUpperCase()}
    </a>
  )
}

AccountIcon.propTypes = {
  className: PropTypes.string,
  account: PropTypes.string,
}

export default AccountIcon