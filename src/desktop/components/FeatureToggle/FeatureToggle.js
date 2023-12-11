import React from 'react'

import TogglesIcon from '../SVG/Toggles'
import { useModal } from '../modals';
import Button from '../common/Button'

import FeatureTogglesModal from './FeatureTogglesModal'
import { withDevelopmentOnly } from '../../../hocs';

import css from './FeatureToggle.module.scss'

const FeatureToggle = () => {
  const { modal, open } = useModal({ Content: FeatureTogglesModal })

  return (
    <>
      <Button className={css.button} onClick={open}>
        <TogglesIcon />
      </Button>
      {modal}
    </>
  )
}

export default withDevelopmentOnly(React.memo(FeatureToggle))