import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import FeatureToggleButton from './FeatureToggleButton'

import css from './FeatureTogglesModal.module.scss'

const FeatureTogglesModal = ({ toggles }) => {
  return (
    <ul className={css.container}>
      {map(toggles, (toggle, name) => {
        return (
          <li className={css.item} key={name}>
            <span>{toggle.label}</span>
            <FeatureToggleButton
              name={name}
              toggledValue={toggle.toggledValue}
              untoggledValue={toggle.untoggledValue}
              className={css.toggleButton}
            />
          </li>
        )
      })}
    </ul>
  )
}

FeatureTogglesModal.propTypes = {
  toggles: PropTypes.object,
}

export default React.memo(FeatureTogglesModal)