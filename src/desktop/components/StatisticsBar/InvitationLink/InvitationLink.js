import React, { useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { getInvitationLink } from '@utils'

import AnimatedButton from '../../common/AnimatedButton'
import NewUser from '../../SVG/NewUser'
import Copy from '../../common/Copy'

import css from './InvitationLink.module.scss'

const InvitationLink = ({ address }) => {

  const link = getInvitationLink(address)

  const containerRef = useRef()
  const timeoutRef = useRef()
  const [showPopper, setShowPopper] = useState()

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(link)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setShowPopper(false), 1000)
    setShowPopper(true)
  }, [link])

  return (
    <div ref={containerRef} className={css.container}>
      <div className={cn(css.popper, { [css.show]: showPopper })}>
        The link is copied to the clipboard
      </div>
      <AnimatedButton
        className={css.btn}
        onClick={handleClick}
        borderWidth="1px"
      >
        <span className={css.icon}><NewUser /></span>
        <span className={css.title}>Invitation link</span>
        <Copy
          text={link}
          className={css.copy}
          iconClassName={css.copyIcon}
          target={containerRef.current}
        >
          <span className={css.link}>
            {link.replace(/(.{25}).*(.{5})$/, '$1...$2')}
          </span>
        </Copy>
      </AnimatedButton>
    </div>
  )
}

InvitationLink.propTypes = {
  address: PropTypes.string.isRequired,
}

export default InvitationLink