import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { isPositive, isNegative, sub } from '@oracly/pm-libs/calc-utils'
import { htmlCurrency } from '@oracly/pm-libs/html-utils'

import Spinner from '../../common/Spinner'
import Dropdown from '../../common/Dropdown'
import BalanceCurrency from '../../common/BalanceCurrency'
import { useGHProvider } from '../../PMGlobalHeaderProvider'

import css from './CashDropdown.module.scss'

const options = [
  { label: 'Oracly', currency: 'DEMO' },
  { label: 'USD Coin', currency: 'USDC' },
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

const OptionRenderer = ({ option }) => {
  return (
    <>
      <span className={css.optionIcon}>
        <BalanceCurrency className={css.optionBalance} currency={option.currency} />
      </span>
      <span className={css.optionLabel}>{option.label}</span>
      <span className={css.optionCurrency}>{`(${option.currency})`}</span>
    </>
  )
}

const ValueRenderer = ({
  currency,
  balance,
  difference,
  maximumFractionDigits,
}) => {

  let htmldifference = htmlCurrency(difference, maximumFractionDigits)
  if (htmldifference.includes('<-')) htmldifference = `-<${htmldifference.slice(2)}`

  return (
    <>
      <BalanceCurrency className={css.currency} currency={currency} />
      {balance || balance === 0 ? (
        <span className={css.value}>{htmlCurrency(balance, maximumFractionDigits)}</span>
      ) : (
        <Spinner className={css.spinner} />
      )}
      <span className={css.difference}>
        <span>+</span>
        {htmldifference}
      </span>
    </>
  )
}

const CashDropdown = ({
  currency,
  balance,
  account,
  dropdownPopperStyles,
  onCurrencyChanged,
}) => {

  const { maximumFractionDigits } = useGHProvider()

  const [difference, changeid] = useChangeERC20(account, balance, currency)

  const option = options.find((option) => option.currency === currency)

  const valueRenderer = useCallback((value = {}) => (
    <ValueRenderer
      key={changeid}
      currency={value.currency}
      balance={balance}
      difference={difference}
      maximumFractionDigits={maximumFractionDigits}
    />
  ), [difference, balance, changeid, maximumFractionDigits])

  const optionRenderer = useCallback((option) => <OptionRenderer option={option} />, [])

  const handleChange = useCallback(({ currency }) => {
    onCurrencyChanged(currency)
  }, [onCurrencyChanged])

  return (
    <Dropdown
      headerClassName={css.header}
      iconClassName={css.icon}
      valueClassName={cn(css.cash, {
        [css.increase]: difference && isPositive(difference),
        [css.decrease]: difference && isNegative(difference),
      })}
      bodyClassName={css.body}
      selectedOptionClassName={css.selectedOption}
      optionClassName={css.option}
      value={option}
      options={options}
      popperStyles={dropdownPopperStyles}
      onChange={handleChange}
      valueRenderer={valueRenderer}
      optionRenderer={optionRenderer}
    />
  )
}

CashDropdown.propTypes = {
  currency: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  account: PropTypes.string,
  dropdownPopperStyles: PropTypes.object,
  onCurrencyChanged: PropTypes.func,
}

export default CashDropdown