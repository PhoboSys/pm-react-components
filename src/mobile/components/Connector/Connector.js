import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import MetaMask from '../SVG/MetaMask'
import WalletConnect from '../SVG/WalletConnect'
import CoinbaseWallet from '../SVG/CoinbaseWallet'

import css from './Connector.module.scss'

const supportedConnectors = {
  injected: {
    name: 'MetaMask',
    icon: <MetaMask/>,
  },
  walletconnect: {
    name: 'WalletConnect',
    icon: <WalletConnect/>,
  },
  coinbase: {
    name: 'CoinbaseWallet',
    icon: <CoinbaseWallet/>,
  }
}

const Connector = ({ id, onClick }) => {

  const handleClick = useCallback(() => {
    if (onClick) onClick(id)
  }, [id, onClick])

  const connector = supportedConnectors[id]
  if (!connector) return null

  return (
    <li className={css.container} onClick={handleClick}>
      <span className={css.icon}>{connector.icon}</span>
      <span className={css.name}>{connector.name}</span>
    </li>
  )
}

Connector.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
}

export default React.memo(Connector)
