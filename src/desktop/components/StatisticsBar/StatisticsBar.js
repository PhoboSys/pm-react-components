import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { htmlAddress } from '../../../lib/html-utils'
import { useTransition } from '../../../hooks/useTransition'

import ArrowForward from '../SVG/ArrowForward'
import Disconnect from '../SVG/Disconnect'
import Connect from '../SVG/Connect'
import Copy from '../common/Copy'
import { Tabs, Tab, TabBody } from '../common/Tabs'
import AccountIcon from '../AccountIcon'
import PredictorTabContent from './PredictorTabContent'
import MentorTabContent from './MentorTabContent'
import StakerTabContent from './StakerTabContent'
import Edit from '../SVG/Edit'

import css from './StatisticsBar.module.scss'

const StatisticsBar = ({
  isOpened,
  account,
  nickname,
  statisticsAccount,
  statisticsNickname,
  statistics,
  isConnected,
  onCloseClick,
  onDisconnectClick,
  onNicknameChanged,
}) => {
  let address = account
  let username = nickname

  const [inputValue, setInputValue] = useState(username)
  const [editingNickname, setEditNickname] = useState(false)

  const isSelfView = isConnected && (!statisticsAccount || account === statisticsAccount)
  const isInputVisible = editingNickname || !username
  if (!isSelfView) {
    address = statisticsAccount
    username = statisticsNickname
  }
  username = username || ''

  const timeout = 100 //ms
  const [mount, opening] = useTransition(isOpened && !!address, timeout)

  const handleNicknameSave = useCallback(() => {
    if (!inputValue) return
    if (!onNicknameChanged) return

    setEditNickname(false)
    onNicknameChanged({ address, nickname: inputValue })

  }, [onNicknameChanged, inputValue, address])

  useEffect(() => {
      if (inputValue !== username) setInputValue(username)
  }, [username])

  const changingNickname = useCallback((e) => { setInputValue(e.target.value) }, [setInputValue])

  if (!mount) return null

  return (
    <div className={cn(css.container, { [css.opened]: opening } )}>

      <div className={css.top}>
        <a
          title={'Disconnect'}
          className={cn(
            css.action,
            css.disconnect,
            { [css.hidden]: !isSelfView }
          )}
          onClick={onDisconnectClick}
        >
          <Disconnect/>
          <Connect/>
        </a>
        <div className={css.account}>
          <AccountIcon className={css.icon} account={address} />
          {!isSelfView &&
            <div className={css.nickname}>
              {username}
            </div>
          }
          {isSelfView && !isInputVisible &&
            <div className={css.nickname}>
              {username}
              <a
                className={css.edit}
                onClick={setEditNickname}
              >
                <Edit className={css.editicon} />
              </a>
            </div>
          }
          {isSelfView && isInputVisible &&
            <div className={cn(css.nickname, css.editing)}>
              <input autoFocus
                className={css.input}
                value={inputValue}
                onChange={changingNickname}
                placeholder={'Nickname'}
                maxLength="35"
              />
              {!!inputValue &&
                <a
                  className={css.save}
                  onClick={handleNicknameSave}
                >
                  Save
                </a>
              }
            </div>
          }
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
          className={css.action}
          onClick={onCloseClick}
        >
          <ArrowForward />
        </a>
      </div>

      <Tabs className={css.tabs} activeTabClassName={css.activeTab}>
        <div className={css.head}>
          <Tab>Oracler</Tab>
          <Tab>Mentor</Tab>
          <Tab>Staker</Tab>
        </div>

        <TabBody>
          <PredictorTabContent
            stats={statistics?.predictor?.stats}
            tokenStats={statistics?.predictor?.tokenStats}
          />
        </TabBody>
        <TabBody>
          <MentorTabContent
            stats={statistics?.mentor?.stats}
            tokenStats={statistics?.mentor?.tokenStats}
          />
        </TabBody>
        <TabBody>
          <StakerTabContent
            stats={statistics?.staker?.stats}
            tokenStats={statistics?.staker?.tokenStats}
          />
        </TabBody>
      </Tabs>

    </div>
  )
}

StatisticsBar.propTypes = {
  isOpened: PropTypes.bool,
  account: PropTypes.string,
  statisticsAccount: PropTypes.string,
  connectors: PropTypes.array,
  statistics: PropTypes.object,
  isConnected: PropTypes.bool,
  onCloseClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
  onNicknameChanged: PropTypes.func,
}

export default React.memo(StatisticsBar)
