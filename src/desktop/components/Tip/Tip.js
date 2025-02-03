import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import css from './Tip.module.scss'

import { useModal } from '../modals'
import AnimatedButton from '../common/AnimatedButton'
import CurrencyInCircle from '../SVG/CurrencyInCircle'

import TipModal from './TipModal'

const modalClasses = { base: css.base }

const Tip = (props) => {
  const {
    className,
    toaddress,
    tousername,
    balance,
    isSendConfirming,
    isSendPropagating,
    onSendTipClick,
  } = props

  const { modal, isOpen, open } = useModal({
    Content: TipModal,
    modalClasses,
  })

  const handleOpenTip = useCallback(() => {
    open({
      toaddress,
      tousername,
      balance,
      isSendConfirming,
      isSendPropagating,
      onSendTipClick,
    })
  }, [
    toaddress,
    tousername,
    balance,
    isSendConfirming,
    isSendPropagating,
    onSendTipClick,
  ])

  useEffect(() => {
    if (isOpen) handleOpenTip()
  }, [
    isOpen,
    handleOpenTip,
  ])

  return (
    <>
      <AnimatedButton
        className={cn(css.btn, className, {
          propagating: isSendPropagating,
        })}
        onClick={handleOpenTip}
        borderWidth="1px"
      >
        <div className={css.content}>
          <CurrencyInCircle />
          <span>Tip</span>
        </div>
      </AnimatedButton>
      {modal}
    </>
  )
}

Tip.propTypes = {
  className: PropTypes.string,
  toaddress: PropTypes.string,
  tousername: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSendConfirming: PropTypes.bool,
  isSendPropagating: PropTypes.bool,
  onSendTipClick: PropTypes.func,
}

export default Tip