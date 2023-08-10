import React from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { useTranslate } from '@lib/i18n-utils'

import css from './Connect.module.scss'

const Connect = ({ className, onClick }) => {
  const t = useTranslate()
  return (
    <div className={cn(css.connect, className)}>
      <a
        title={t('Connect Wallet')}
        className={css.connectButton}
        onClick={onClick}
      >
        {t('Connect')}
      </a>
   </div>
  )
}

Connect.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Connect