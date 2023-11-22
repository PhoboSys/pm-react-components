import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { TokenCurrencyCell, DateCell } from '../cells'
import { WinCell, FormattedCurrencyCell } from '../cells'
import TabContent from '../TabContent'

const cellRenderers = {
  stats: (row) => {
    if (row.name === 'wins') {
      return <WinCell count={row.value?.count} percent={row.value?.percent} />
    }
    if (row.name === 'wagered') {
      return (
        <FormattedCurrencyCell
          amount={row.value.convertedAmount}
          currency={row.value.convertedCurrency}
        />
      )
    }
    if (row.name === 'joined') {
      return <DateCell date={row.value} />
    }
  },
  wins: (row) => (
    <WinCell
      count={row.value?.wins?.count}
      percent={row.value?.wins?.percent}
    />
  ),
  wagered: (row) => (
    <TokenCurrencyCell
      amount={row.value?.wagered?.amount}
      currency={row.value?.wagered?.currency}
    />
  ),
}

const PredictorTabContent = ({ achievements, stats, tokenStats }) => {
  const statsColumns = useMemo(() => [
    { dataKey: 'name' },
    { cellRenderer: cellRenderers.stats },
  ], [])
  const tokenStatsColumns = useMemo(() => [
    { label: 'Name', dataKey: 'name' },
    { label: 'Wins', cellRenderer: cellRenderers.wins },
    { label: 'Wagered', cellRenderer: cellRenderers.wagered },
  ], [])

  return (
    <TabContent
      achievements={achievements}
      stats={stats}
      statsColumns={statsColumns}
      tokenStats={tokenStats}
      tokenStatsColumns={tokenStatsColumns}
    />
  )
}

PredictorTabContent.propTypes = {
  achievements: PropTypes.array,
  stats: PropTypes.object,
  tokenStats: PropTypes.object,
}

export default PredictorTabContent