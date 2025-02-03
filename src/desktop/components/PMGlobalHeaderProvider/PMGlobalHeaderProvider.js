import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProviderContext from './PMGlobalHeaderProviderContext';

const PMGlobalHeaderProvider = ({
  children,
  openAuthModal,
  closeAuthModal,
  maximumFractionDigits,
  maximumFractionDigitsPrecent,
  currency,
  currencyDecimals,
}) => {

  const value = useMemo(
    () => ({
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
      currency,
      currencyDecimals,
    }),
    [
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
      currency,
      currencyDecimals,
    ]
  );

  return (
    <PMGlobalHeaderProviderContext.Provider value={value}>
      {children}
    </PMGlobalHeaderProviderContext.Provider>
  )
}

PMGlobalHeaderProvider.propTypes = {
  openAuthModal: PropTypes.func,
  closeAuthModal: PropTypes.func,
  maximumFractionDigits: PropTypes.number,
  maximumFractionDigitsPrecent: PropTypes.number,
  currency: PropTypes.string,
  currencyDecimals: PropTypes.number,
}

export default PMGlobalHeaderProvider