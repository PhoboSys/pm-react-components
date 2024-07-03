import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import config from '@config'
import { numericHash } from '@lib/hash-utils'

import css from './AccountIcon.module.scss';

const AccountIcon = ({ className, account = '', ...props }) => {
  return (
    <a
      className={cn(css.container, className)}
      style={{
        backgroundImage: `url(${config.avatars_path + numericHash(account) % config.avatars_amount}.png)`,
        backgroundSize: 'cover'
      }}
      {...props}
    />
  )
}

AccountIcon.propTypes = {
  className: PropTypes.string,
  account: PropTypes.string,
}

export default AccountIcon
