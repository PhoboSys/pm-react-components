import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { isEmpty } from 'lodash'

import Table from '../Table'
import Achievements from '../Achievements'

import css from './TabContent.module.scss'

function useToRowsArray(dataMap = {}, order) {
  return useMemo(() => {
    let rows = Object.entries(dataMap)

    rows = rows.map(([name, value]) => ({ name, value }))

    if (order) {
      rows = rows.sort((s1, s2) => order.indexOf(s1.name) - order.indexOf(s2.name))
    }

    return rows
  }, [dataMap, order])
}

const TabContent = ({
  achievements,
  stats,
  statsOrder,
  statsColumns,
  tokenStats,
  tokenStatsColumns,
}) => {
  const statsRows = useToRowsArray(stats, statsOrder)
  const tokenStatsRows = useToRowsArray(tokenStats)

  return (
    <div className={css.container}>
      <Achievements achievements={achievements} />
      {!isEmpty(statsRows) && (
        <Table
          className={css.statsTable}
          tdClassName={cn(css.tdRight, css.statsTableTd)}
          title="Stats"
          rows={statsRows}
          columns={statsColumns}
        />
      )}
      {!isEmpty(tokenStatsRows) && (
        <Table
          className={css.tokenStatsTable}
          title="Token Stats"
          rows={tokenStatsRows}
          columns={tokenStatsColumns}
        />
      )}
    </div>
  )
}

TabContent.propTypes = {
  achievements: PropTypes.array,
  stats: PropTypes.object,
  tokenStats: PropTypes.object,
  statsColumns: PropTypes.array,
  tokenStatsColumns: PropTypes.array,
}

export default TabContent