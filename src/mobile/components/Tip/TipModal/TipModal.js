import { replace } from 'lodash'
import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { htmlAddress, htmlCurrency } from '@oracly/pm-libs/html-utils'
import { gt, gte } from '@oracly/pm-libs/calc-utils'
import uuidv4 from '@oracly/pm-libs/uuidv4'
import cn from 'clsx'

import Avatar from '../../common/Avatar'
import Copy from '../../common/Copy'
import BalanceCurrency from '../../common/BalanceCurrency'
import Spinner from '../../common/Spinner'
import AnimatedButton from '../../common/AnimatedButton'
import { useGHProvider } from '../../PMGlobalHeaderProvider'

import css from './TipModal.module.scss'

const TipModal = (props) => {

  const {
    balance,
    toaddress,
    tousername,
    isSendConfirming,
    isSendPropagating,
    close,
    onSendTipClick,
  } = props
  
  const [value, setValue] = useState('')
  const id = useMemo(() => uuidv4(), [])
  const { currency, currencies } = useGHProvider()

  const balanceLoading = !balance && balance !== 0
  const inputDisabled = balanceLoading || isSendConfirming
  const sendDisabled = isSendConfirming || !value
  const currencyDecimals = currencies[currency].decimals
  const dp = (currencyDecimals || currencyDecimals === 0) ? currencyDecimals : 3

  const handleAddjust = useCallback((newvalue) => {
    const maxvalue = balance

    newvalue = replace(newvalue, ',' , '.')

    const re = new RegExp(`^\\d+\\.?\\d{0,${dp}}$`)
    if (gte(maxvalue, newvalue) && re.test(newvalue)) setValue(newvalue)
    else if (gt(newvalue, maxvalue)) setValue(maxvalue)
    else if (newvalue === '') setValue(newvalue)
  }, [balance, dp])

  useEffect(() => value && balance && handleAddjust(value), [balance])

  const prevIsSendConfirming = useRef()
  useEffect(() => {
    if (prevIsSendConfirming.current && !isSendConfirming && isSendPropagating) close()
    prevIsSendConfirming.current = isSendConfirming
  }, [isSendConfirming, isSendPropagating])

  const handleChange = useCallback((e) => handleAddjust(e.target.value), [handleAddjust])
  const handleBlur = useCallback(() => handleAddjust(value), [handleAddjust, value])
  const handleSendTip = useCallback(() => {
    onSendTipClick && onSendTipClick({ to: toaddress, amount: value, currency })
  }, [onSendTipClick, toaddress, currency, value])

  return (
    <div className={css.container}>
      <Avatar className={css.accountIcon} account={toaddress} />

      <span className={css.username} title={tousername}>{tousername}</span>

      <Copy
        text={toaddress}
        className={css.address}
        iconClassName={css.copyIcon}
      >
        {htmlAddress(toaddress)}
      </Copy>

      <label htmlFor={id} className={cn(css.content)}>

        <div className={css.left}>
          <div className={css.title}>Tip</div>
          <div className={css.amount}>
            <input
              id={id}
              className={css.input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              placeholder='0'
              disabled={inputDisabled}
            />
          </div>
        </div>

        <div className={css.right}>
          <div className={css.currency}>
            <BalanceCurrency
              className={css.icon}
              currency={currency}
            />
            <span className={css.name}>{currency}</span>
          </div>
          <div className={css.balance}>
            <span>Balance:</span>
            {balanceLoading ? (
              <Spinner className={css.spinner} />
            ) : (
              <span>{htmlCurrency(balance)}</span>
            )}
          </div>
        </div>

      </label>

      <AnimatedButton
        className={cn(css.send, {
          propagating: isSendPropagating,
        })}
        onClick={handleSendTip}
        disabled={sendDisabled}
      >
        {isSendConfirming ? <Spinner className={css.spinner} /> : 'Send'}
      </AnimatedButton>

    </div>
  )
}

TipModal.propTypes = {
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toaddress: PropTypes.string,
  tousername: PropTypes.string,
  isSendConfirming: PropTypes.bool,
  isSendPropagating: PropTypes.bool,
  onSendTipClick: PropTypes.func,
}

export default TipModal