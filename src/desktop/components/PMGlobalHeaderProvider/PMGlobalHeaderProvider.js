import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProviderContext from './PMGlobalHeaderProviderContext';

const PMGlobalHeaderProvider = ({ currencyFill, children, openAuthModal, closeAuthModal }) => {

  const value = useMemo(
    () => ({
      currencyFill,
      openAuthModal,
      closeAuthModal,
    }),
    [currencyFill, openAuthModal, closeAuthModal]
  );

  return (
    <PMGlobalHeaderProviderContext.Provider value={value}>
      {children}
    </PMGlobalHeaderProviderContext.Provider>
  )
}

PMGlobalHeaderProvider.propTypes = {
  currencyFill: PropTypes.string,
  openAuthModal: PropTypes.func,
  closeAuthModal: PropTypes.func,
}

export default PMGlobalHeaderProvider