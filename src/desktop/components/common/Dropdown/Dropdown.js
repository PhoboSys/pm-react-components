import { isEmpty, map } from 'lodash'
import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { usePopper } from 'react-popper'

import DropdownIcon from '../../SVG/DropdownIcon'

import DropdownNoOptionsRenderer from './DropdownNoOptionsRenderer'
import DropdownOption from './DropdownOption'
import { getModifiers } from './Dropdown.utils'

import css from './Dropdown.module.scss'

const defaultOptionRenderer = (value) => value.label
const defaultValueRenderer = (value) => value.label
const defaultCheckOptionSelected = (value, option) => value === option
const defaultEmptyRenderer = () => <DropdownNoOptionsRenderer />

const Dropdown = ({
  containerClassName,
  headerClassName,
  iconClassName,
  bodyClassName,
  valueClassName,
  optionClassName,
  selectedOptionClassName,
  placeholder,
  iconColor,
  options,
  value,
  popperStyles,
  popperModifiers,
  showIcon = true,
  targetBody = false,
  disabled,
  outerElRef,
  onChange,
  valueRenderer = defaultValueRenderer,
  optionRenderer = defaultOptionRenderer,
  checkOptionSelected = defaultCheckOptionSelected,
  emptyRenderer = defaultEmptyRenderer,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerElement = useRef(null)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const modifiers = useMemo(() => [
    ...getModifiers({ isOpen, popperStyles }),
    ...(popperModifiers || [])
  ], [isOpen, popperStyles, popperModifiers])
  const { styles, attributes } = usePopper(referenceElement, popperElement, { modifiers, placement: 'bottom' })

  const handleClick = useCallback(() => {
    if (disabled) return
    setIsOpen((isOpen) => !isOpen)
  }, [disabled])

  const handleChange = useCallback((option) => {
    if (disabled) return
    setIsOpen(false)
    onChange && onChange(option)
  }, [disabled, onChange])

  useEffect(() => {
    const handler = (e) => {
      if (containerElement.current && !containerElement.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    const outerEl = outerElRef?.current ? outerElRef?.current : window
    outerEl.addEventListener('click', handler)
    return () => {
      outerEl.removeEventListener('click', handler)
    }
  }, [])

  const renderPopper = () => (
    <div className={cn(css.body, bodyClassName)} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {isEmpty(options) ? emptyRenderer() : map(options, (option, key) => {
        const selected = checkOptionSelected(value, option)
        return (
          <DropdownOption
            key={key}
            className={cn(optionClassName, { [selectedOptionClassName]: selected && selectedOptionClassName })}
            option={option}
            selected={selected}
            onClick={handleChange}
            renderer={optionRenderer}
          />
        )
      })}
    </div>
  )

  return (
    <div ref={containerElement} className={cn(css.container, containerClassName)}>
      <div className={cn(css.header, headerClassName)} ref={setReferenceElement} onClick={handleClick}>
        <div className={cn(css.value, valueClassName)}>{value && valueRenderer(value) || placeholder}</div>
        {showIcon && <div className={cn(css.icon, iconClassName)}><DropdownIcon fill={iconColor} /></div>}
      </div>

      {targetBody ? createPortal(renderPopper(), document.body) : renderPopper()}
    </div>
  )
}

Dropdown.propTypes = {
  containerClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  valueClassName: PropTypes.string,
  optionClassName: PropTypes.string,
  selectedOptionClassName: PropTypes.string,
  placeholder: PropTypes.node,
  iconColor: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.any,
  popperStyles: PropTypes.object,
  popperModifiers: PropTypes.array,
  showIcon: PropTypes.bool,
  targetBody: PropTypes.bool,
  disabled: PropTypes.bool,
  outerElRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onChange: PropTypes.func,
  valueRenderer: PropTypes.func,
  optionRenderer: PropTypes.func,
  checkOptionSelected: PropTypes.func,
}

export default React.memo(Dropdown)