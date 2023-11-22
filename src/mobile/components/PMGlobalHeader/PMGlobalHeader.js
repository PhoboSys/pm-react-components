import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProvider from '../PMGlobalHeaderProvider'
import StatisticsBar from '../StatisticsBar'
import Header from '../Header'
import Connect from '../Connect'

const PMGlobalHeader = ({
  headerClassName,
  basepath = "/",
  currencyFill,
  account,
  statisticsAccount,
  statistics,
  activeNavigationItem,
  isConnected,
  isStatisticsBarOpened: isStatisticsBarOpenedControlled,
  onProfileClick,
  onConnectClick,
  onDisconnectClick,
  onStatisticsBarCloseClick,
  children,
}) => {

  const isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined

  const [isStatisticsBarOpened, setStatisticsBarOpened] = useState(false)
  const openStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(true), [isStatisticsBarContolled])
  const closeStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(false), [isStatisticsBarContolled])

  const handleConnectClick = useCallback(() => {
    onConnectClick && onConnectClick()
  }, [onConnectClick])

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
    <PMGlobalHeaderProvider currencyFill={currencyFill}>
      <Header
        className={headerClassName}
        basepath={basepath}
        activeNavigationItem={activeNavigationItem}
        isConnected={isConnected}
        account={account}
        onProfileClick={handleProfileClick}
        onConnectClick={handleConnectClick}
      >
        {children}
      </Header>
      {!isConnected && <Connect onClick={onConnectClick} />}
      <StatisticsBar
        account={account}
        statisticsAccount={statisticsAccount}
        isOpened={isStatisticsBarContolled ? isStatisticsBarOpenedControlled : isStatisticsBarOpened}
        statistics={statistics}
        onCloseClick={handleCloseStatisticsBar}
        onDisconnectClick={handleDisconnectClick}
      />
    </PMGlobalHeaderProvider>
  )
}

PMGlobalHeader.propTypes = {
  headerClassName: PropTypes.string,
  basepath: PropTypes.string,
  currencyFill: PropTypes.string,
  account: PropTypes.string,
  statisticsAccount: PropTypes.string,
  activeNavigationItem: PropTypes.string,
  statistics: PropTypes.object,
  isConnected: PropTypes.bool,
  isStatisticsBarOpened: PropTypes.bool,
  onProfileClick: PropTypes.func,
  onConnectClick: PropTypes.func,
  onDisconnectClick: PropTypes.func,
  onStatisticsBarCloseClick: PropTypes.func,
  children: PropTypes.node,
}

export default React.memo(PMGlobalHeader)