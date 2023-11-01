import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import Connect from '../Connect'
import AccountIcon from '../AccountIcon'
import Navbar from '../Navbar'
import Logo from '../Logo'

import css from './Header.module.scss'

const Header = ({
  className,
  isConnected,
  basepath,
  logoFill,
  account,
  onProfileClick,
  onConnectClick,
  children,
}) => {
  const handleAccountIconClick = useCallback((e) => {
    e.stopPropagation()
    onProfileClick(account.toLowerCase())
  }, [account, onProfileClick])

  return (
    <div className={cn(css.header, className)}>
      <div className={css.left}>
        <Navbar />
        <Logo basepath={basepath} logoFill={logoFill} />
      </div>

      {children}

      <div className={css.right}>
        {isConnected ? (
          <AccountIcon account={account} onClick={handleAccountIconClick}/>
        ) : (
          <Connect onClick={onConnectClick} />
        )}
      </div>
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Header