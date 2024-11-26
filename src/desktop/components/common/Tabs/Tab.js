import { isFunction, noop } from 'lodash'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { TabContext } from './Tabs';

import css from './Tabs.module.scss'

const Tab = ({ children, className, deferActivation, forceRender }) => {
  const [tabIndex, setTabIndex] = useState(null)
  const { activeTabClassName, tab, setTab, renderTab, registerHead } = useContext(TabContext);
  useEffect(() => setTabIndex(registerHead()), [])

  const handleTabClick = useCallback(() => setTab(tabIndex), [tabIndex])

  if (!renderTab && !forceRender) return null

  return (
    <div
      className={cn(css.container, className, { [activeTabClassName]: activeTabClassName && tabIndex === tab })}
      onClick={deferActivation ? noop : handleTabClick}
    >
      {isFunction(children) ? children({ activate: handleTabClick }) : children}
    </div>
  )
}

Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  deferActivation: PropTypes.bool,
  forceRender: PropTypes.bool,
}

export default React.memo(Tab)