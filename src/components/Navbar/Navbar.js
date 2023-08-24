import React, { useCallback, useState } from 'react'
import cn from 'clsx'
import PropTypes from 'prop-types'

import ButtonProvider from '../common/Button'
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
    <div className={cn(css.container, { [css.expanded]: opening })}>
      <div className={css.navbar}>

        <div className={css.icons}>
          <a href="/" className={css.logo} tabIndex={-1}>
            <LogoIcon fill={logoFill} />
          </a>
          <ul className={css.menuIcons}>
            {menuItems.map(({ name, icon }) => (
              <li
                key={name}
                className={cn(css.menuIcon, { [css.active]: active === name })}
                onClick={handleMenuItemClick}
                {...(active === name ? {'data-active': '1'} : {})}
              >
                <ButtonProvider className={css.button}>
                  {icon}
                </ButtonProvider>
              </li>
            ))}
          </ul>
        </div>

        {mount && (
          <div className={css.labels}>
            <a href="/" className={css.logoLabel} tabIndex={-1}>
              <LogoLabel fill={logoLabelFill} />
            </a>
            <ul className={css.menuLabels}>
              {menuItems.map(({ name, label }) => (
                <li
                  key={name}
                  className={cn(css.menuLabel, { [css.active]: active === name })}
                  onClick={handleMenuItemClick}
                  {...(active === name ? {'data-active': '1'} : {})}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
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
