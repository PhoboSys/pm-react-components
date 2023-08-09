import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Header from '../Header'
import ProfileBar from '../ProfileBar'
import ConnectBar from '../ConnectBar'
import Connect from '../Connect'

const PMGlobalHeader = ({
  logoFill,
  isConnected,
  isConnectBarOpened: isConnectBarOpenedControlled,
  account,
  balance,
  currency,
  chainName,
  connectors,
  activeNavigationItem,
  onDisconnectClick,
  onConnectorClick,
  onProfileClick,
  children,
}) => {
  const isContolled = isConnectBarOpenedControlled !== undefined

  const [isConnectBarOpened, setConnectBarOpened] = useState(false)
  const openConnectBar = useCallback(() => setConnectBarOpened(true), [])
  const closeConnectBar = useCallback(() => setConnectBarOpened(false), [])

  const handleConnectClick = useCallback(() => {
    if (!isContolled) openConnectBar()
  }, [isContolled, openConnectBar])

  const handleConnectorClick = useCallback((connectorId) => {
    onConnectorClick(connectorId)
    if (!isContolled) closeConnectBar()
  }, [isContolled, onConnectorClick, closeConnectBar])

  return (
    <>
      <Navbar logoFill={logoFill} active={activeNavigationItem} />
      <Header>
        {children}
        {isConnected ? (
          <ProfileBar
            balance={balance}
            currency={currency}
            account={account}
            chainName={chainName}
            onDisconnectClick={onDisconnectClick}
            onProfileClick={onProfileClick}
          />
        ) : (
          <Connect onClick={handleConnectClick} />
        )}
      </Header>
      <ConnectBar
        isOpened={isContolled ? isConnectBarOpenedControlled : isConnectBarOpened}
        connectors={connectors}
        onCloseIconClick={closeConnectBar}
        onConnectorClick={handleConnectorClick}
      />
    </>
  )
}

PMGlobalHeader.propTypes = {
  logoFill: PropTypes.string,
  isConnected: PropTypes.bool,
  isConnectBarOpened: PropTypes.bool,
  account: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  chainName: PropTypes.string,
  connectors: PropTypes.array,
  activeNavigationItem: PropTypes.string,
  onDisconnectClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
  children: PropTypes.node,
}

export default React.memo(PMGlobalHeader)