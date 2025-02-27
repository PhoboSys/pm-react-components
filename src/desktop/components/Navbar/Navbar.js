import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import config from '../../../config'
import { FeatureToggle } from '../FeatureToggle';
import NetworkStatus from '../NetworkStatus'
import Button from '../common/Button'
import LogoIcon from '../SVG/Logo'
import TradeIcon from '../SVG/Trade'
import StakingIcon from '../SVG/Staking'
import SupportIcon from '../SVG/SupportIcon'
import MentoringIcon from '../SVG/Mentoring'
import LogoLabel from '../SVG/LogoLabel'
import LeaderboardIcon from '../SVG/LeaderboardIcon'

import css from './Navbar.module.scss'

const menuItems = [
  { name: 'trade', icon: <TradeIcon />, label: 'Trading', path: config.pm_base_path },
  { name: 'staking', icon: <StakingIcon />, label: 'Staking', path: config.st_base_path },
  { name: 'mentoring', icon: <MentoringIcon />, label: 'Mentoring', path: config.mt_base_path },
]

const NavBar = ({
  basepath,
  active,
  featureTogglesTitle,
  networkStatus,
  onNetworkStatusClick,
  onSupportClick,
  onLeaderboardClick,
}) => {

  const handleMenuItemClick = useCallback((e) => {
    if (e.currentTarget.hasAttribute('data-active')) e.preventDefault()
  }, [])

  return (
    <div className={css.container}>
      <div className={css.navbar}>
        <a href={basepath} className={css.logo} tabIndex={-1}>
          <span className={css.logoIcon}>
            <LogoIcon />
          </span>
          <LogoLabel />
        </a>
        <div className={css.menu}>
          {menuItems.map(({ name, label, icon, path }) => (
            <a
              key={name}
              href={path}
              className={css.menuItem}
              onClick={handleMenuItemClick}
              {...(active === name ? {'data-active': ''} : {})}
            >
              <span className={css.icon}>{icon}</span>
              <span className={css.label}>{label}</span>
            </a>
          ))}
          <div className={css.bottomMenu}>
            {onLeaderboardClick && (
              <Button className={css.bottomMenuItem} onClick={onLeaderboardClick}>
                <LeaderboardIcon />
              </Button>
            )}
            <Button className={css.bottomMenuItem} onClick={onSupportClick}>
              <SupportIcon />
            </Button>
            {networkStatus && (
              <NetworkStatus
                headerClassName={css.bottomMenuItem}
                statusClassName={css.networkStatusIcon}
                onClick={onNetworkStatusClick}
                networkStatus={networkStatus}
              />
            )}
            <FeatureToggle className={css.bottomMenuItem} title={featureTogglesTitle} />
          </div>
        </div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  basepath: PropTypes.string,
  active: PropTypes.string,
  featureTogglesTitle: PropTypes.string,
  networkStatus: PropTypes.string,
  onNetworkStatusClick: PropTypes.func,
  onSupportClick: PropTypes.func,
  onLeaderboardClick: PropTypes.func,
}

export default React.memo(NavBar)
