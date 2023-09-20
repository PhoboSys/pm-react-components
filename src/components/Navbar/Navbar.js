import React, { useCallback, useState } from 'react'
import cn from 'clsx'
import PropTypes from 'prop-types'

import { useTransition } from '../../hooks/useTransition'
import LogoIcon from '../SVG/Logo'
import TradeIcon from '../SVG/Trade'
import StakingIcon from '../SVG/Staking'
import MentoringIcon from '../SVG/Mentoring'
import LogoLabel from '../SVG/LogoLabel'

import css from './Navbar.module.scss'

const menuItems = [
  { name: 'trade', icon: <TradeIcon />, label: 'Trading' },
  { name: 'staking', icon: <StakingIcon />, label: 'Staking' },
  { name: 'mentoring', icon: <MentoringIcon />, label: 'Mentoring' },
]

const localStorageSelector = 'pm-global-header-menu-expanded'

const NavBar = ({ logoFill, logoLabelFill, active }) => {

  const [expanded, setExpanded] = useState(localStorage.getItem(localStorageSelector) === 'true')

  const timeout = 100 //ms
  const [mount, opening] = useTransition(expanded, timeout)

  const toggleNavbar = useCallback(() => {
    setExpanded((expanded) => {
      localStorage.setItem(localStorageSelector, !expanded)
      return !expanded
    })
  }, [])

  const handleMenuItemClick = useCallback((e) => {
    if (e.currentTarget.hasAttribute('data-active')) {
      toggleNavbar()
    }
  }, [toggleNavbar])

  return (
    <div className={cn(css.container, { [css.expanded]: mount && opening })}>
      <div className={css.navbar}>
        <a href="/" className={css.logo} tabIndex={-1}>
          <LogoIcon fill={logoFill} />
          <LogoLabel fill={logoLabelFill} />
        </a>
        <ul className={css.menu}>
          {menuItems.map(({ name, label, icon }) => (
            <li
              key={name}
              className={css.menuItem}
              onClick={handleMenuItemClick}
              {...(active === name ? {'data-active': ''} : {})}
            >
              <span className={css.icon}>{icon}</span>
              <span className={css.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  active: PropTypes.string,
  logoFill: PropTypes.string,
  logoLabelFill: PropTypes.string,
}

export default React.memo(NavBar)
