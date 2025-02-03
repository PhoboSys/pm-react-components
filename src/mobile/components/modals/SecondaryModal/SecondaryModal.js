import { mergeWith } from 'lodash'
import React, { useCallback, useMemo } from 'react'
import Modal from 'react-modal'
import cn from 'clsx'
import PropTypes from 'prop-types'

import config from '@config'
import Button from '@components/common/Button'

import css from './SecondaryModal.module.scss'

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

const SecondaryModal = ({
  className: containerClassName,
  contentClassName,
  modalClasses,
  modalOverlayClasses,
  close,
  hideClose,
  children,
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
      closeTimeoutMS={200}
      className={className}
      overlayClassName={overlayClassName}
      onRequestClose={close}
      parentSelector={parentSelector}
      {...modalProps}
    >
      <div className={cn(css.container, containerClassName)}>
        <div className={cn(css.content, contentClassName)}>{children}</div>
        <Button onClick={close} className={css.close}>
          Close
        </Button>
      </div>
    </Modal>
  )
}

SecondaryModal.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  close: PropTypes.func,
  hideClose: PropTypes.bool,
  modalClasses: PropTypes.object,
  modalOverlayClasses: PropTypes.object,
  children: PropTypes.node,
}

export default SecondaryModal
