import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { throttle } from 'lodash'

import { htmlAddress } from '../../../lib/html-utils'
import { useTransition } from '../../../hooks/useTransition'

import ArrowForward from '../SVG/ArrowForward'
import Disconnect from '../SVG/Disconnect'
import Copy from '../common/Copy'
import { Tabs, Tab, TabBody } from '../common/Tabs'
import AccountIcon from '../AccountIcon'
import PredictorTabContent from './PredictorTabContent'
import MentorTabContent from './MentorTabContent'
import StakerTabContent from './StakerTabContent'
import Nickname from './Nickname'

import css from './StatisticsBar.module.scss'

const StatisticsBar = ({
  isOpened,
  address,
  username,
  isSelfView,
  statistics,
  onCloseClick,
  onDisconnectClick,
  onNicknameChanged,
}) => {

  const timeout = 100 //ms
  const [mount, opening] = useTransition(isOpened && !!address, timeout)

  const [sticky, setSticky] = useState(false)

  const handleScroll = useCallback(throttle((e) => {
    e.target.scrollTop > 0 ? setSticky(true) : setSticky(false)
  }, 100), [])

  if (!mount) return null

  return (
    <div
      className={cn(css.container, { [css.opened]: opening } )}
      onScroll={handleScroll}
    >

      <div className={cn(css.stickyHeader, {[css.hidden]: !sticky})}>
        <AccountIcon className={css.icon} account={address} />

        <div className={css.account}>
          {username && <Nickname username={username} collapsed />}

          <Copy
            text={address}
            className={css.address}
            iconClassName={css.copyIcon}
          >
            {htmlAddress(address)}
          </Copy>
        </div>

        <a
          title={'Close bar'}
          className={cn(css.action, css.close)}
          onClick={onCloseClick}
        >
          <ArrowForward />
        </a>
      </div>

      <div className={cn(css.header, {[css.hidden]: sticky})}>
        <AccountIcon className={css.icon} account={address} />

        <Nickname
          address={address}
          username={username}
          editable={isSelfView}
          onNicknameChanged={onNicknameChanged}
        />

        <Copy
          text={address}
          className={css.address}
          iconClassName={css.copyIcon}
        >
          {htmlAddress(address)}
        </Copy>

        <a
          title={'Close bar'}
          className={cn(css.action, css.close)}
          onClick={onCloseClick}
        >
          <ArrowForward />
        </a>
      </div>

      <Tabs className={css.tabs} activeTabClassName={css.activeTab}>
        <div className={css.head}>
          {statistics?.predictor && <Tab>Oracler</Tab>}
          {statistics?.mentor && <Tab>Mentor</Tab>}
          {statistics?.staker && <Tab>Staker</Tab>}
        </div>

        {statistics?.predictor && (
          <TabBody>
            <PredictorTabContent
              stats={statistics?.predictor?.stats}
              tokenStats={statistics?.predictor?.tokenStats}
            />
          </TabBody>
        )}
        {statistics?.mentor && (
          <TabBody>
            <MentorTabContent
              stats={statistics?.mentor?.stats}
              tokenStats={statistics?.mentor?.tokenStats}
            />
          </TabBody>
        )}
        {statistics?.staker && (
          <TabBody>
            <StakerTabContent
              stats={statistics?.staker?.stats}
              tokenStats={statistics?.staker?.tokenStats}
            />
          </TabBody>
        )}
      </Tabs>

      {isSelfView && (
        <a
          title={'Disconnect'}
          className={cn(css.action, css.disconnect)}
          onClick={onDisconnectClick}
        >
          <Disconnect />
          Untie wallet
        </a>
      )}

    </div>
  )
}

StatisticsBar.propTypes = {
  isOpened: PropTypes.bool,
  address: PropTypes.string,
  username: PropTypes.string,
  isSelfView: PropTypes.bool,
  statistics: PropTypes.object,
  onCloseClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
  onNicknameChanged: PropTypes.func,
}

export default React.memo(StatisticsBar)
