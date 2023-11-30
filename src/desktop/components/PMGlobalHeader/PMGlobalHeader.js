import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import config from '../../../config'
import PMGlobalHeaderProvider from '../PMGlobalHeaderProvider'
import Navbar from '../Navbar'
import Header from '../Header'
import ProfileBar from '../ProfileBar'
import ConnectBar from '../ConnectBar'
import StatisticsBar from '../StatisticsBar'
import Connect from '../Connect'
import AuthModal from '../AuthModal'
import { useModal } from '../modals';

const PMGlobalHeader = ({
  headerClassName,
  connectClassName,
  profileBarClassName,
  profileBarInnerClassName,
  basepath = "/",
  logoFill,
  logoLabelFill,
  currencyFill,
  mustUserLogin,
  isConnected,
  isConnectBarOpened: isConnectBarOpenedControlled,
  isStatisticsBarOpened: isStatisticsBarOpenedControlled,
  account,
  statisticsAccount,
  balance,
  currency,
  chainName,
  connectors,
  activeNavigationItem,
  statistics,
  onConnectClick,
  onDisconnectClick,
  onConnectorClick,
  onProfileClick,
  onProfileIconClick,
  onStatisticsBarCloseClick,
  onConnectBarCloseClick,
  content,
  children,
}) => {
  const isConnectBarContolled = isConnectBarOpenedControlled !== undefined
  const isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined

  const [isConnectBarOpened, setConnectBarOpened] = useState(false)
  const [isStatisticsBarOpened, setStatisticsBarOpened] = useState(false)
  
  const openConnectBar = useCallback(() => setConnectBarOpened(true), [])
  const closeConnectBar = useCallback(() => setConnectBarOpened(false), [])

  const handleConnectClick = useCallback(() => {
    if (onConnectClick) onConnectClick()
    if (!isConnectBarContolled) openConnectBar()
  }, [isConnectBarContolled, openConnectBar, onConnectClick])

  const handleConnectorClick = useCallback((connectorId) => {
    if (onConnectorClick) onConnectorClick(connectorId)
    if (!isConnectBarContolled) closeConnectBar()
  }, [isConnectBarContolled, onConnectorClick, closeConnectBar])

  const handleConnectBarCloseClick = useCallback(() => {
    if (onConnectBarCloseClick) onConnectBarCloseClick()
    if (!isConnectBarContolled) closeConnectBar()
  }, [isConnectBarContolled, onConnectBarCloseClick, closeConnectBar])

  const handleCloseStatisticsBar = useCallback(() => {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(false)
    if (onStatisticsBarCloseClick) onStatisticsBarCloseClick()
  }, [isStatisticsBarContolled, onStatisticsBarCloseClick])

  const handleProfileIconClick = useCallback(() => {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(true)
    if (onProfileIconClick) onProfileIconClick()
  }, [isStatisticsBarContolled, onProfileIconClick])

  const handleDisconnectClick = useCallback(() => {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(false)
    if (onDisconnectClick) onDisconnectClick()
  }, [isStatisticsBarContolled, onDisconnectClick])

  const { modal, open: openAuthModal, close: closeAuthModal } = useModal({
    Content: AuthModal,
    hideClose: true,
    shouldCloseOnOverlayClick: false,
    openOnMount: mustUserLogin,
    onConnectorClick,
    connectors,
    isConnected,
  })

  return (
    <>
      <PMGlobalHeaderProvider
        currencyFill={currencyFill}
        openAuthModal={openAuthModal}
        closeAuthModal={closeAuthModal}
      >
        <Navbar
          basepath={basepath}
          logoFill={logoFill}
          logoLabelFill={logoLabelFill}
          active={activeNavigationItem}
        />
        <Header className={headerClassName}>
          {content}
          {isConnected ? (
            <ProfileBar
              className={profileBarClassName}
              innerClassName={profileBarInnerClassName}
              balance={balance}
              currency={currency}
              account={account}
              chainName={chainName}
              onDisconnectClick={onDisconnectClick}
              onClick={onProfileClick}
              onIconClick={handleProfileIconClick}
            />
          ) : (
            <Connect
              className={connectClassName}
              onClick={handleConnectClick}
            />
          )}
        </Header>
        <ConnectBar
          isOpened={isConnectBarContolled ? isConnectBarOpenedControlled : isConnectBarOpened}
          connectors={connectors}
          onCloseClick={handleConnectBarCloseClick}
          onConnectorClick={handleConnectorClick}
        />
        <StatisticsBar
          account={account}
          statisticsAccount={statisticsAccount}
          isOpened={isStatisticsBarContolled ? isStatisticsBarOpenedControlled : isStatisticsBarOpened}
          statistics={statistics}
          onCloseClick={handleCloseStatisticsBar}
          onDisconnectClick={handleDisconnectClick}
        />
        {children}
        {modal}
      </PMGlobalHeaderProvider>
      <div id={config.modal_id} />
    </>
  )
}

PMGlobalHeader.propTypes = {
  headerClassName: PropTypes.string,
  connectClassName: PropTypes.string,
  profileBarClassName: PropTypes.string,
  profileBarInnerClassName: PropTypes.string,
  basepath: PropTypes.string,
  logoFill: PropTypes.string,
  logoLabelFill: PropTypes.string,
  currencyFill: PropTypes.string,
  mustUserLogin: PropTypes.bool,
  isConnected: PropTypes.bool,
  isConnectBarOpened: PropTypes.bool,
  isStatisticsBarOpened: PropTypes.bool,
  account: PropTypes.string,
  statisticsAccount: PropTypes.string,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
  chainName: PropTypes.string,
  connectors: PropTypes.array,
  activeNavigationItem: PropTypes.string,
  statistics: PropTypes.object,
  onConnectClick: PropTypes.func,
  onDisconnectClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
  onProfileClick: PropTypes.func,
  onProfileIconClick: PropTypes.func,
  onConnectBarCloseClick: PropTypes.func,
  onStatisticsBarCloseClick: PropTypes.func,
  content: PropTypes.node,
  children: PropTypes.node,
}

export default React.memo(PMGlobalHeader)