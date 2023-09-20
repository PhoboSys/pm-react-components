import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import Table from '../Table'
import Achievements from '../Achievements'

import css from './TabContent.module.scss'

function useToRowsArray(dataMap = {}) {
  return useMemo(() =>
    Object.entries(dataMap).map(([name, value]) => ({ name, value })),
    [dataMap]
  )
}

const TabContent = ({
  achievements,
  stats,
  statsColumns,
  tokenStats,
  tokenStatsColumns,
}) => {
  const statsRows = useToRowsArray(stats)
  const tokenStatsRows = useToRowsArray(tokenStats)

  return (
    <div className={css.container}>
      <Achievements achievements={achievements} />
      <Table
        className={css.statsTable}
        tdClassName={cn(css.tdRight, css.statsTableTd)}
        title="Stats"
        rows={statsRows}
        columns={statsColumns}
      />
      {<Table
        className={css.tokenStatsTable}
        title="Token Stats"
        rows={tokenStatsRows}
        columns={tokenStatsColumns}
      />}
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