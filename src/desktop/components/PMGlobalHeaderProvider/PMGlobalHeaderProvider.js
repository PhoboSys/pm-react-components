import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProviderContext from './PMGlobalHeaderProviderContext';

const PMGlobalHeaderProvider = ({
  children,
  openAuthModal,
  closeAuthModal,
  maximumFractionDigits,
  maximumFractionDigitsPrecent,
  currencies,
  currency,
}) => {

  const value = useMemo(
    () => ({
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
      currencies,
      currency,
    }),
    [
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
      currencies,
      currency,
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
  currencies: PropTypes.object.isRequired,
  currency: PropTypes.string,
}

export default PMGlobalHeaderProvider