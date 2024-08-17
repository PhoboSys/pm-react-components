import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { usePopper } from 'react-popper'

import DropdownIcon from '../../SVG/DropdownIcon'

import DropdownOption from './DropdownOption'
import { getModifiers } from './Dropdown.utils'

import css from './Dropdown.module.scss'

const Dropdown = ({
  containerClassName,
  headerClassName,
  iconClassName,
  bodyClassName,
  valueClassName,
  optionClassName,
  iconColor,
  options,
  value,
  popperStyles,
  showIcon = true,
  targetBody = false,
  onChange,
  valueRenderer = (value) => value.label,
  optionRenderer,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerElement = useRef(null)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const modifiers = useMemo(() => getModifiers({ isOpen, popperStyles }), [isOpen, popperStyles])
  const { styles, attributes } = usePopper(referenceElement, popperElement, { modifiers, placement: 'bottom' })

  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [])

  const handleChange = useCallback((option) => {
    setIsOpen(false)
    onChange && onChange(option)
  }, [onChange])

  useEffect(() => {
    const handler = (e) => {
      if (containerElement.current && !containerElement.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  const renderPopper = () => (
    <div className={cn(css.body, bodyClassName)} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      {options.map((option, index) => (
        <DropdownOption
          key={index}
          className={optionClassName}
          option={option}
          onClick={handleChange}
          renderer={optionRenderer}
        />
      ))}
    </div>
  )

  return (
    <div ref={containerElement} className={cn(css.container, containerClassName)}>
      <div className={cn(css.header, headerClassName)} ref={setReferenceElement} onClick={handleClick}>
        <div className={cn(css.value, valueClassName)}>{value && valueRenderer(value)}</div>
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
  iconColor: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.any,
  popperStyles: PropTypes.object,
  showIcon: PropTypes.bool,
  targetBody: PropTypes.bool,
  onChange: PropTypes.func,
  valueRenderer: PropTypes.func,
  optionRenderer: PropTypes.func,
}

export default React.memo(Dropdown)