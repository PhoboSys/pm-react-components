import { mergeWith } from 'lodash'
import React, { useCallback, useMemo } from 'react'
import Modal from 'react-modal'
import cn from 'clsx'

import config from '../../../../config'
import CloseIcon from '../../SVG/CloseIcon'
import Button from '../../common/Button'

import css from './PrimaryModal.module.scss'

const classes = {
  modalClasses: {
    base: css.base,
    afterOpen: css.afterOpen,
    beforeClose: css.beforeClose,
  },
  modalOverlayClasses: {
    base: css.overlayBase,
    afterOpen: css.afterOpenOverlay,
    beforeClose: css.beforeCloseOverlay,
  },
}

const mergeClasses = (c1, c2) => mergeWith({}, c1, c2, (objValue, srcValue) => cn(objValue, srcValue))

const PrimaryModal = ({
  children,
  close,
  hideClose,
  modalClasses,
  modalOverlayClasses,
  ...modalProps
}) => {
  const parentSelector = useCallback(() => document.getElementById(config.modal_id), [])
  const appEl = useMemo(() => document.getElementById(config.react_mount_element_id), [])

  const className = useMemo(
    () => mergeClasses(classes.modalClasses, modalClasses),
    [modalClasses]
  )

  const overlayClassName = useMemo(
    () => mergeClasses(classes.modalOverlayClasses, modalOverlayClasses),
    [modalOverlayClasses]
  )

  return (
    <Modal
      appElement={appEl}
      closeTimeoutMS={300}
      className={className}
      overlayClassName={overlayClassName}
      onRequestClose={close}
      parentSelector={parentSelector}
      {...modalProps}
    >
      {!hideClose && (
        <Button
          onClick={close}
          className={css.close}
        >
          <CloseIcon />
        </Button>
      )}
      {children}
    </Modal>
  )
}

export default PrimaryModal
