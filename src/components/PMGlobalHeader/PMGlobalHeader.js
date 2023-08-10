import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Header from '../Header'
import ProfileBar from '../ProfileBar'
import ConnectBar from '../ConnectBar'
import Connect from '../Connect'

const PMGlobalHeader = ({
  headerClassName,
  connectClassName,
  profileBarClassName,
  profileBarInnerClassName,
  logoFill,
  isConnected,
  isConnectBarOpened: isConnectBarOpenedControlled,
  account,
  balance,
  currency,
  chainName,
  connectors,
  activeNavigationItem,
  onConnectClick,
  onDisconnectClick,
  onConnectorClick,
  onProfileClick,
  onCloseIconClick,
  children,
}) => {
  const isContolled = isConnectBarOpenedControlled !== undefined

  const [isConnectBarOpened, setConnectBarOpened] = useState(false)
  
  const openConnectBar = useCallback(() => setConnectBarOpened(true), [])
  const closeConnectBar = useCallback(() => setConnectBarOpened(false), [])

  const handleConnectClick = useCallback(() => {
    if (onConnectClick) onConnectClick()
    if (!isContolled) openConnectBar()
  }, [isContolled, openConnectBar, onConnectClick])

  const handleConnectorClick = useCallback((connectorId) => {
    if (onConnectorClick) onConnectorClick(connectorId)
    if (!isContolled) closeConnectBar()
  }, [isContolled, onConnectorClick, closeConnectBar])

  const handleCloseIconClick = useCallback(() => {
    if (onCloseIconClick) onCloseIconClick()
    if (!isContolled) closeConnectBar()
  }, [isContolled, onCloseIconClick, closeConnectBar])

  return (
    <>
      <Navbar logoFill={logoFill} active={activeNavigationItem} />
      <Header className={headerClassName}>
        {children}
        {isConnected ? (
          <ProfileBar
            className={profileBarClassName}
            innerClassName={profileBarInnerClassName}
            balance={balance}
            currency={currency}
            account={account}
            chainName={chainName}
            onDisconnectClick={onDisconnectClick}
            onProfileClick={onProfileClick}
          />
        ) : (
            <Connect
              className={connectClassName}
              onClick={handleConnectClick}
            />
        )}
      </Header>
      <ConnectBar
        isOpened={isContolled ? isConnectBarOpenedControlled : isConnectBarOpened}
        connectors={connectors}
        onCloseIconClick={handleCloseIconClick}
        onConnectorClick={handleConnectorClick}
      />
    </>
  )
}

PMGlobalHeader.propTypes = {
  headerClassName: PropTypes.string,
  connectClassName: PropTypes.string,
  profileBarClassName: PropTypes.string,
  profileBarInnerClassName: PropTypes.string,
  logoFill: PropTypes.string,
  isConnected: PropTypes.bool,
  isConnectBarOpened: PropTypes.bool,
  account: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  chainName: PropTypes.string,
  connectors: PropTypes.array,
  activeNavigationItem: PropTypes.string,
  onConnectClick: PropTypes.func,
  onDisconnectClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
  onProfileClick: PropTypes.func,
  onCloseIconClick: PropTypes.func,
  children: PropTypes.node,
}

export default React.memo(PMGlobalHeader)