import React, { useEffect } from 'react'
import { isString } from 'lodash'
import cn from 'clsx'

import { getAccountNickname } from '@state/getters'

import { connect } from '@state'
import { SET_SHOW_STATISTICS_BAR } from '@actions'
import { RESOVLE_ADDRESS_TO_NICKNAME } from '@actions'

import { htmlAddress } from '@lib/html-utils'

import css from './nickname.module.scss'

const Nickname = ({
  address, nickname, className

, SET_SHOW_STATISTICS_BAR
, RESOVLE_ADDRESS_TO_NICKNAME

}) => {

  useEffect(() => {
    if (address && !isString(nickname)) RESOVLE_ADDRESS_TO_NICKNAME({ address })
  }, [nickname, address])

  return <span
    title={nickname}
    className={cn(className, css.nickname)}
  >
    {nickname || htmlAddress(address)}
  </span>
}

export default connect(
  (state, props) => ({
    nickname: getAccountNickname(state, props.address)
  }),
  ({ command, query }) => [
    command(SET_SHOW_STATISTICS_BAR),
    query(RESOVLE_ADDRESS_TO_NICKNAME),
  ]
)(React.memo(Nickname))

