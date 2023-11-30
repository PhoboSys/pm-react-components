import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import config from '../../../config'
import PMGlobalHeaderProvider from '../PMGlobalHeaderProvider'
import StatisticsBar from '../StatisticsBar'
import Header from '../Header'
import Connect from '../Connect'
import AuthModal from '../AuthModal'
import { useModal } from '../modals';

const PMGlobalHeader = ({
  headerClassName,
  basepath = "/",
  currencyFill,
  mustUserLogin,
  account,
  statisticsAccount,
  statistics,
  connectors,
  activeNavigationItem,
  isConnected,
  isStatisticsBarOpened: isStatisticsBarOpenedControlled,
  onProfileClick,
  onConnectClick,
  onConnectorClick,
  onDisconnectClick,
  onStatisticsBarCloseClick,
  content,
  children,
}) => {

  const { modal, open: openAuthModal, close: closeAuthModal } = useModal({
    Content: AuthModal,
    hideClose: true,
    shouldCloseOnOverlayClick: false,
    openOnMount: mustUserLogin,
    onConnectorClick,
    connectors,
    isConnected,
  })

  const isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined

  const [isStatisticsBarOpened, setStatisticsBarOpened] = useState(false)
  const openStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(true), [isStatisticsBarContolled])
  const closeStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(false), [isStatisticsBarContolled])

  const handleConnectClick = useCallback(() => {
    onConnectClick && onConnectClick()
    openAuthModal({ hideClose: false, shouldCloseOnOverlayClick: true })
  }, [onConnectClick, openAuthModal])

  const handleProfileClick = useCallback((address) => {
    onProfileClick && onProfileClick(address)
    openStatisticBar()
  }, [openStatisticBar, onProfileClick])

  const handleCloseStatisticsBar = useCallback(() => {
    if (onStatisticsBarCloseClick) onStatisticsBarCloseClick()
    closeStatisticBar()
  }, [closeStatisticBar, onStatisticsBarCloseClick])

  const handleDisconnectClick = useCallback(() => {
    if (onDisconnectClick) onDisconnectClick()
    closeStatisticBar()
  }, [closeStatisticBar, onDisconnectClick])

  return (
    <>
      <PMGlobalHeaderProvider
        currencyFill={currencyFill}
        openAuthModal={openAuthModal}
        closeAuthModal={closeAuthModal}
      >
        <Header
          className={headerClassName}
          basepath={basepath}
          activeNavigationItem={activeNavigationItem}
          isConnected={isConnected}
          account={account}
          onProfileClick={handleProfileClick}
        >
          {content}
        </Header>
        {!isConnected && <Connect onClick={handleConnectClick} />}
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
  basepath: PropTypes.string,
  currencyFill: PropTypes.string,
  mustUserLogin: PropTypes.bool,
  account: PropTypes.string,
  statisticsAccount: PropTypes.string,
  connectors: PropTypes.array,
  activeNavigationItem: PropTypes.string,
  statistics: PropTypes.object,
  isConnected: PropTypes.bool,
  isStatisticsBarOpened: PropTypes.bool,
  onConnectorClick: PropTypes.func,
  onProfileClick: PropTypes.func,
  onConnectClick: PropTypes.func,
  onDisconnectClick: PropTypes.func,
  onStatisticsBarCloseClick: PropTypes.func,
  content: PropTypes.node,
  children: PropTypes.node,
}

export default React.memo(PMGlobalHeader)