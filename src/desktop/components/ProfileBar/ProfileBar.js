import React, { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'clsx'
import PropTypes from 'prop-types'

import { htmlAddress, htmlCurrency } from '@lib/html-utils'
import { isPositive, isNegative, sub } from '@lib/calc-utils'

import BalanceCurrency from '../common/Balance'
import Spinner from '../common/Spinner'
import AccountIcon from '../AccountIcon'
import { useGHProvider } from '../PMGlobalHeaderProvider'

import css from './ProfileBar.module.scss'

const useChangeERC20 = (number, currency) => {
  const prevNumberRef = useRef(number)
  const prevCurrencyRef = useRef(currency)
  const [state, setState] = useState({ diff: 0, changeid: 0 })

  useEffect(() => {
    const prevNumber = prevNumberRef.current
    const prevCurrency = prevCurrencyRef.current

    if (prevNumber !== number && prevCurrency === currency){
      setState({ diff: sub(number, prevNumber), changeid: state.changeid+1 })
    }

    prevNumberRef.current = number
    prevCurrencyRef.current = currency
  }, [number, currency])

  return [state.diff, state.changeid]
}

const ProfileBar = ({
  className,
  innerClassName,
  currency,
  balance,
  account,
  chainName,
  onClick,
  onIconClick,
}) => {
  const { currencyFill } = useGHProvider()

  const [difference, changeid] = useChangeERC20(balance, currency)

  const handleClick = useCallback(() => {
    if (onClick) onClick(account.toLowerCase())
  }, [onClick, account])

  const handleIconClick = useCallback((e) => {
    e.stopPropagation()
    if (onIconClick) onIconClick(account.toLowerCase())
  }, [onIconClick, account])

  const handleBalanceClick = useCallback((e) => {
    e.stopPropagation()
  }, [])

  return (
    <div className={cn(css.profilebar, className)} onClick={handleClick}>
      <div className={cn(css.inner, innerClassName)}>
        <div
          key={changeid}
          className={cn(css.cash, {
            [css.increase]: difference && isPositive(difference),
            [css.decrease]: difference && isNegative(difference),
          })}
          onClick={handleBalanceClick}
        >
          <BalanceCurrency fill={currencyFill} currency={currency} />
          {balance && balance !== 0 ? (
            <span className={css.value}>{htmlCurrency(balance)}</span>
          ) : (
            <Spinner className={css.spinner} />
          )}
          <span className={css.difference}>
            <span>+</span>
            {htmlCurrency(difference)}
          </span>
        </div>
        <div className={css.account}>
          <div className={css.wallet}>{htmlAddress(account)}</div>
          <div className={css.name}>{chainName}</div>
        </div>
        <AccountIcon
          className={css.action}
          account={account}
          onClick={handleIconClick}
        />
      </div>
    </div>
  )
}

ProfileBar.propTypes = {
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  account: PropTypes.string,
  chainName: PropTypes.string,
  onClick: PropTypes.func,
  onIconClick: PropTypes.func,
}

export default React.memo(ProfileBar)
