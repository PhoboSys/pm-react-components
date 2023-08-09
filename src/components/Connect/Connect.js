import React from 'react'
import PropTypes from 'prop-types'

import { useTranslate } from '@lib/i18n-utils'

import css from './Connect.module.scss'

const Connect = ({ onClick }) => {
  const t = useTranslate()
  return (
    <div className={css.connect}>
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
  onClick: PropTypes.func
}

export default Connect