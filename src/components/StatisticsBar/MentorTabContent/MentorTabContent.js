import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { TokenCurrencyCell, DateCell } from '../cells'
import { FormattedCurrencyCell } from '../cells'
import TabContent from '../TabContent'

const cellRenderers = {
  stats: (row) => {
    if (row.name === 'proteges') {
      return `${row.value.account} / ${row.value.total}`
    }
    if (row.name === 'earned') {
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
  earned: (row) => (
    <TokenCurrencyCell
      amount={row.value.earned.amount}
      currency={row.value.earned.currency}
    />
  ),
}

const MentorTabContent = ({ achievements, stats, tokenStats }) => {
  const statsColumns = useMemo(() => [
    { dataKey: 'name' },
    { cellRenderer: cellRenderers.stats },
  ], [])
  const tokenStatsColumns = useMemo(() => [
    { label: 'Name', dataKey: 'name' },
    { label: 'Earned', cellRenderer: cellRenderers.earned },
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

MentorTabContent.propTypes = {
  achievements: PropTypes.array,
  stats: PropTypes.object,
  tokenStats: PropTypes.object,
}

export default MentorTabContent