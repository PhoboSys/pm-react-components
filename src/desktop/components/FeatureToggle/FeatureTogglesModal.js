import React from 'react'
import { map } from 'lodash'

import FeatureToggleButton from './FeatureToggleButton'
import useFeatureToggles from '../../../features/useFeatureToggles'

import css from './FeatureTogglesModal.module.scss'

const FeatureTogglesModal = () => {
  const { toggles = [] } = useFeatureToggles()

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

export default React.memo(FeatureTogglesModal)