import UNKNOWN_DARK from './UNKNOWN.DARK'
import ETH_DARK from './ETH.DARK'
import BTC_DARK from './BTC.DARK'
import USDC_DARK from './USDC.DARK'
import DEMO_DARK from './DEMO.DARK'
import ORCY_DARK from './ORCY.DARK'
import MATIC_DARK from './MATIC.DARK'
import LINK_DARK from './LINK.DARK'
import DAI_DARK from './DAI.DARK'

const FUNDS = {
  UNKNOWN_DARK,

  ETH_DARK,
  WETH_DARK: ETH_DARK,

  BTC_DARK,
  WBTC_DARK: BTC_DARK,

  USDC_DARK,
  'USDC.e_DARK': USDC_DARK,
  USDT_DARK: USDC_DARK,

  MATIC_DARK,
  WMATIC_DARK: MATIC_DARK,

  LINK_DARK: LINK_DARK,
  DAI_DARK: DAI_DARK,

  DEMO_DARK,
  ORCY_DARK,
}

export function factoryFunds(currency, theme = 'DARK') {
  const key = [currency, theme].join('_')
  return FUNDS[key] || UNKNOWN_DARK
}
