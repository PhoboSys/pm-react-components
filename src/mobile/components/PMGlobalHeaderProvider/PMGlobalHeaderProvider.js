import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProviderContext from './PMGlobalHeaderProviderContext';

const PMGlobalHeaderProvider = ({
  children,
  openAuthModal,
  closeAuthModal,
  maximumFractionDigits,
  maximumFractionDigitsPrecent,
}) => {

  const value = useMemo(
    () => ({
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
    }),
    [
      openAuthModal,
      closeAuthModal,
      maximumFractionDigits,
      maximumFractionDigitsPrecent,
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
}

export default PMGlobalHeaderProvider