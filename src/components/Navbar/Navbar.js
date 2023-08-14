import React from 'react'
import cn from 'clsx'
import PropTypes from 'prop-types'

import ButtonProvider from '../common/Button'
import LogoIcon from '../SVG/Logo'
import TradeIcon from '../SVG/Trade'
import StakingIcon from '../SVG/Staking'
import MentoringIcon from '../SVG/Mentoring'

import css from './Navbar.module.scss'

const menuItems = [
  { name: 'trade', icon: <TradeIcon /> },
  { name: 'staking', icon: <StakingIcon /> },
  { name: 'mentoring', icon: <MentoringIcon /> },
]

const NavBar = ({ logoFill, active }) => {
  return (
    <div className={css.container}>
      <div className={css.navbar}>
        <a href="/" className={css.logo} tabIndex={-1}>
          <LogoIcon fill={logoFill} />
        </a>
        <ul className={css.menu}>
          {menuItems.map(({ name, icon }) => (
            <li key={name} className={cn(css.item, { [css.active]: active === name })}>
              <ButtonProvider className={css.button}>
                {icon}
              </ButtonProvider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  active: PropTypes.string,
}

export default React.memo(NavBar)
