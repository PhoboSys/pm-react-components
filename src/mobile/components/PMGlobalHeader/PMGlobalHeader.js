import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import config from "../../../config";
import PMGlobalHeaderProvider from "../PMGlobalHeaderProvider";
import StatisticsBar from "../StatisticsBar";
import Header from "../Header";
import ProfileBar from "../ProfileBar";
import Connect from "../Connect";
import AuthModal from "../AuthModal";
import { useModal } from "../modals";
import FeatureTogglesProvider from "../../../features/FeatureTogglesProvider";

const PMGlobalHeader = ({
  headerClassName,
  connectClassName,
  profileBarClassName,
  profileBarInnerClassName,
  basepath = "/",
  currencyFill,
  mustUserLogin,
  account,
  nickname,
  balance,
  currency,
  chainName,
  featureToggles,
  statisticsAccount,
  statistics,
  connectors,
  activeNavigationItem,
  isConnecting,
  isConnected,
  isStatisticsBarOpened: isStatisticsBarOpenedControlled,
  onProfileClick,
  onProfileIconClick,
  onConnectClick,
  onConnectorClick,
  onDisconnectClick,
  onStatisticsBarCloseClick,
  onCurrencyChanged,
  onChatClick,
  onParisClick,
  content,
  children,
}) => {
  const {
    modal,
    open: openAuthModal,
    close: closeAuthModal,
  } = useModal({
    Content: AuthModal,
    hideClose: true,
    shouldCloseOnOverlayClick: false,
    openOnMount: mustUserLogin,
    onConnectorClick,
    connectors,
    isConnected,
  });

  const isStatisticsBarContolled =
    isStatisticsBarOpenedControlled !== undefined;

  const [isStatisticsBarOpened, setStatisticsBarOpened] = useState(false);
  const openStatisticBar = useCallback(
    () => !isStatisticsBarContolled && setStatisticsBarOpened(true),
    [isStatisticsBarContolled]
  );
  const closeStatisticBar = useCallback(
    () => !isStatisticsBarContolled && setStatisticsBarOpened(false),
    [isStatisticsBarContolled]
  );

  const handleConnectClick = useCallback(() => {
    onConnectClick && onConnectClick();
    openAuthModal({ hideClose: false, shouldCloseOnOverlayClick: true });
  }, [onConnectClick, openAuthModal]);

  const handleProfileClick = useCallback(
    (address) => {
      onProfileClick && onProfileClick(address);
      openStatisticBar();
    },
    [openStatisticBar, onProfileClick]
  );

  const handleCloseStatisticsBar = useCallback(() => {
    if (onStatisticsBarCloseClick) onStatisticsBarCloseClick();
    closeStatisticBar();
  }, [closeStatisticBar, onStatisticsBarCloseClick]);

  const handleDisconnectClick = useCallback(() => {
    if (onDisconnectClick) onDisconnectClick();
    closeStatisticBar();
  }, [closeStatisticBar, onDisconnectClick]);

  const handleProfileIconClick = useCallback(() => {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(true);
    if (onProfileIconClick) onProfileIconClick();
  }, [isStatisticsBarContolled, onProfileIconClick]);

  return (
    <>
    <FeatureTogglesProvider toggles={featureToggles}>
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
          {isConnected ? (
            <ProfileBar
              className={profileBarClassName}
              innerClassName={profileBarInnerClassName}
              balance={balance}
              currency={currency}
              account={account}
              nickname={nickname}
              chainName={chainName}
              onDisconnectClick={onDisconnectClick}
              onClick={onProfileClick}
              onIconClick={handleProfileIconClick}
              onCurrencyChanged={onCurrencyChanged}
              onChatClick={onChatClick}
              onParisClick={onParisClick}
            />
          ) : (
            <Connect
              className={connectClassName}
              isConnecting={isConnecting}
              onClick={handleConnectClick}
            />
          )}
          {content}
        </Header>

        <StatisticsBar
          account={account}
          statisticsAccount={statisticsAccount}
          isOpened={
            isStatisticsBarContolled
              ? isStatisticsBarOpenedControlled
              : isStatisticsBarOpened
          }
          statistics={statistics}
          onCloseClick={handleCloseStatisticsBar}
          onDisconnectClick={handleDisconnectClick}
        />
        {children}
        {modal}
      </PMGlobalHeaderProvider>
      <div id={config.modal_id} />
      </FeatureTogglesProvider>
    </>
  );
};

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
  isConnecting: PropTypes.bool,
  isConnected: PropTypes.bool,
  isStatisticsBarOpened: PropTypes.bool,
  onConnectorClick: PropTypes.func,
  onProfileClick: PropTypes.func,
  onProfileIconClick: PropTypes.func,
  onConnectClick: PropTypes.func,
  onDisconnectClick: PropTypes.func,
  onStatisticsBarCloseClick: PropTypes.func,
  onChatClick: PropTypes.func,
  onParisClick: PropTypes.func,
  content: PropTypes.node,
  children: PropTypes.node,
};

export default React.memo(PMGlobalHeader);
