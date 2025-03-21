import UNKNOWN_DARK from './UNKNOWN.DARK'
import ETH_DARK from './ETH.DARK'
import BTC_DARK from './BTC.DARK'
import USDC_DARK from './USDC.DARK'
import DEMO_DARK from './DEMO.DARK'
import ORCY_DARK from './ORCY.DARK'

const FUNDS = {
  UNKNOWN_DARK,

  ETH_DARK,
  WETH_DARK: ETH_DARK,
  BTC_DARK,
  WBTC_DARK: BTC_DARK,
  DEMO_DARK,
  ORCY_DARK,
  USDC_DARK,
  'USDC.e_DARK': USDC_DARK,
  USDT_DARK: USDC_DARK,
}

export function factoryFunds(currency, theme = 'DARK') {
  const key = [currency, theme].join('_')
  return FUNDS[key] || UNKNOWN_DARK
}
