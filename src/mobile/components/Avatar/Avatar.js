import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import config from '@config'
import { numericHash } from '@lib/hash-utils'

import css from './Avatar.module.scss'

const Avatar = ({ className, account = '', ...props }) => {
  console.log('account', account)
  return (
    <a
      className={cn(css.container, className)}
      style={{
        backgroundImage: `url(${
          config.avatars_path + (numericHash(account) % config.avatars_amount)
        }.png)`,
        backgroundSize: 'cover',
      }}
      {...props}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  account: PropTypes.string,
}

export default Avatar
