import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

const PMGlobalHeader = ({
  headerClassName,
  basepath = "/",
  account,
  activeNavigationItem,
  isConnected,
  isConnectBarOpened: isConnectBarOpenedControlled,
  isStatisticsBarOpened: isStatisticsBarOpenedControlled,
  onProfileClick,
  onConnectClick,
  children,
}) => {

  const isConnectBarContolled = isConnectBarOpenedControlled !== undefined
  const isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined

  const [isConnectBarOpened, setConnectBarOpened] = useState(false)
  const [isStatisticsBarOpened, setStatisticsBarOpened] = useState(false)
  const openConnectBar = useCallback(() => !isConnectBarContolled && setConnectBarOpened(true), [isConnectBarContolled])
  const closeConnectBar = useCallback(() => !isConnectBarContolled && setConnectBarOpened(false), [isConnectBarContolled])
  const openStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(true), [isStatisticsBarContolled])
  const closeStatisticBar = useCallback(() => !isStatisticsBarContolled && setStatisticsBarOpened(false), [isStatisticsBarContolled])

  const handleConnectClick = useCallback(() => {
    onConnectClick && onConnectClick()
    openConnectBar()
  }, [openConnectBar, onConnectClick])

  const handleProfileClick = useCallback((address) => {
    onProfileClick && onProfileClick(address)
    openStatisticBar()
  }, [openStatisticBar, onProfileClick])

  return (
    <>
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
    </>
  )
}

PMGlobalHeader.propTypes = {
  isConnected: PropTypes.bool,
}

export default PMGlobalHeader