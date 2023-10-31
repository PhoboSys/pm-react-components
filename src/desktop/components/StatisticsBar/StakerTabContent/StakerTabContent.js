import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { htmlPercent } from '@lib/html-utils'
import { TokenCurrencyCell, DateCell, CurrencyCell } from '../cells'
import TabContent from '../TabContent'

const cellRenderers = {
  stats: (row) => {
    if (row.name === 'staked') {
      return (
        <CurrencyCell
          amount={row.value.amount}
          currency={row.value.currency}
          convertedAmount={row.value.convertedAmount}
          convertedCurrency={row.value.convertedCurrency}
        />
      )
    }
    if (row.name === 'voting') {
      return htmlPercent(row.value)
    }
    if (row.name === 'joined') {
      return <DateCell date={row.value} />
    }
  },
  claimed: (row) => (
    <TokenCurrencyCell
      amount={row.value.amount}
      currency={row.value.currency}
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
    { label: 'Claimed', cellRenderer: cellRenderers.claimed },
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