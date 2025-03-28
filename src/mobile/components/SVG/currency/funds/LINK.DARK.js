import React from 'react'

const LINK = ({ fill = '#ffffff', size = 1 }) => {
  const width = size * 15.12
  const height = size * 17.44
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.8 43.6">
      <g>
        <g>
          <path fill={fill} d="M18.9,0l-4,2.3L4,8.6,0,10.9V32.7L4,35l11,6.3,4,2.3,4-2.3L33.8,35l4-2.3V10.9l-4-2.3L22.9,2.3ZM8,28.1V15.5L18.9,9.2l10.9,6.3V28.1L18.9,34.4Z"/>
        </g>
      </g>
    </svg>
  )
}

export default React.memo(LINK)
