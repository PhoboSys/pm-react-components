import React, { useCallback, useEffect, useRef, useState } from 'react'

import cn from 'clsx'
import PropTypes from 'prop-types'

import { htmlCurrency } from '@lib/html-utils'
import { isPositive, isNegative, sub } from '@lib/calc-utils'

import BalanceCurrency from '../common/Balance'
import Button from '../common/Button'
import Spinner from '../common/Spinner'
import AccountIcon from '../AccountIcon'
import { useGHProvider } from '../PMGlobalHeaderProvider'
import DropdownIcon from '../SVG/DropdownIcon'
import DoubleArrowsIcon from '../SVG/DoubleArrows'
import ChatIcon from '../SVG/Chat'

import css from './ProfileBar.module.scss'

const options = [
  { label: 'USD Coin', currency: 'USDC' },
  { label: 'Oracly', currency: 'PARI' },
]

const useChangeERC20 = (account, number, currency) => {
  const prevNumberRef = useRef(number)
  const prevCurrencyRef = useRef(currency)
  const prevAccountRef = useRef(account)

  const [state, setState] = useState({ diff: 0, changeid: 0 })

  useEffect(() => {
    const prevNumber = prevNumberRef.current
    const prevCurrency = prevCurrencyRef.current
    const prevAccount = prevAccountRef.current

    if (
        prevNumber !== number &&
        prevCurrency === currency &&
        prevAccount === account
    ){
      setState({ diff: sub(number, prevNumber), changeid: state.changeid+1 })
    }

    prevNumberRef.current = number
    prevCurrencyRef.current = currency
    prevAccountRef.current = account

  }, [number, currency, account])

  return [state.diff, state.changeid]
}

const ProfileBar = ({
  className,
  innerClassName,
  currency,
  payoutButton,
  balance,
  account,
  onClick,
  onCurrencyChanged,
  onIconClick,
  onChatClick,
  onParisClick
}) => {
  const { currencyFill } = useGHProvider()

  const [difference, changeid] = useChangeERC20(account, balance, currency)

  const handleClick = useCallback(() => {
    if (onClick) onClick(account.toLowerCase())
  }, [onClick, account])

  const handleIconClick = useCallback((e) => {
    e.stopPropagation()
    if (onIconClick) onIconClick(account.toLowerCase())
  }, [onIconClick, account])

  const [popoverPop, setPopoverPop] = useState(false)
  const handleBalanceClick = useCallback((e) => {
    e.stopPropagation()
    setPopoverPop(!popoverPop)
  }, [popoverPop])

  const handleCurrencyChanged = useCallback((e) => {
    e.stopPropagation()
    const newcurrency = e?.target?.dataset?.currency
    if (newcurrency !== currency && onCurrencyChanged) {
      setPopoverPop(false)
      onCurrencyChanged(newcurrency)
    }
  }, [currency, onCurrencyChanged])

  const popover = useRef(null)
  useEffect(() => {
    const handler = (e) => {
      if (popover.current && !popover.current.contains(e.target)) {
        setPopoverPop(false)
      }
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  return (
    <div className={cn(css.profilebar, className)}>
      <Button onClick={onParisClick}>
        <DoubleArrowsIcon />
      </Button>
      <div className={cn(css.inner, innerClassName)} onClick={handleClick}>
        {payoutButton}
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
          <span className={css.dropdownIcon}><DropdownIcon /></span>
          <span className={css.difference}>
            <span>+</span>
            {htmlCurrency(difference)}
          </span>
          {popoverPop &&
          <div ref={popover} className={css.popover}>
            {options.map((option, idx) => (

              <div
                key={idx}
                className={cn(css.option, { [css.active]: option.currency === currency })}
                data-currency={option.currency}
                onClick={handleCurrencyChanged}
              >
                <span className={css.optionIcon}>
                  <BalanceCurrency fill={currencyFill} currency={option.currency} className={css.optionBalance} />
                </span>
                <span className={css.optionLabel}>{option.label}</span>
                <span className={css.optionCurrency}>{`(${option.currency})`}</span>
              </div>

            ))}
          </div>
          }
        </div>
        <AccountIcon
          className={css.action}
          account={account}
          onClick={handleIconClick}
        />
      </div>
      <Button onClick={onChatClick}>
        <ChatIcon />
      </Button>
    </div>
  )
}

ProfileBar.propTypes = {
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  account: PropTypes.string,
  nickname: PropTypes.string,
  chainName: PropTypes.string,
  onClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onCurrencyChanged: PropTypes.func,
  onChatClick: PropTypes.func,
  onParisClick: PropTypes.func,
}

export default React.memo(ProfileBar)