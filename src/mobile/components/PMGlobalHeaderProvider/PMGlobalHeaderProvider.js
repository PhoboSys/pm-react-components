import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import PMGlobalHeaderProviderContext from './PMGlobalHeaderProviderContext';

const PMGlobalHeaderProvider = ({ currencyFill, children }) => {

  const value = useMemo(
    () => ({
      currencyFill,
    }),
    [currencyFill]
  );

  return (
    <PMGlobalHeaderProviderContext.Provider value={value}>
      {children}
    </PMGlobalHeaderProviderContext.Provider>
  )
}

PMGlobalHeaderProvider.propTypes = {
  currencyFill: PropTypes.string,
}

export default PMGlobalHeaderProvider