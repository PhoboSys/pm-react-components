import React from 'react'

const USDT = ({ fill = '#000000', size = 1 }) => {
  const width = size * 8
  const height = size * 16
  return (
    <svg width={width} height={height} viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.28302 14.1505C3.28302 14.6194 3.28302 15.0594 3.28302 15.4993C3.28302 15.9464 3.33492 15.9965 3.79495 15.9989C4.04029 16.0001 4.28564 16.0007 4.53039 15.9989C4.93262 15.9965 5.00221 15.9246 5.00339 15.5153C5.00398 15.0576 5.00339 14.6005 5.00339 14.1523C5.14788 14.1181 5.25286 14.0939 5.35725 14.068C7.24098 13.602 8.38573 11.8764 8.06607 9.98734C7.89209 8.9576 7.23744 8.28998 6.36281 7.83408C5.67101 7.47314 4.92672 7.21423 4.22253 6.87453C3.73302 6.63862 3.23053 6.39504 2.80767 6.06123C2.22026 5.59767 2.26095 4.78437 2.83539 4.30017C3.33257 3.88084 3.92647 3.78648 4.54926 3.85254C5.32187 3.93451 5.98831 4.27422 6.59518 4.74486C6.84878 4.94125 6.9744 4.91589 7.13069 4.63516C7.33594 4.26773 7.5223 3.8891 7.73934 3.52816C7.88147 3.29166 7.82662 3.12417 7.62905 2.97142C7.5052 2.87528 7.38194 2.77738 7.25396 2.68774C6.58398 2.21769 5.82258 1.98414 5.00221 1.85262C5.00221 1.36252 5.00398 0.883625 5.00162 0.40473C4.99985 0.092741 4.91492 0.0072247 4.5988 0.0030963C4.29507 -0.0010321 3.99075 -0.0010321 3.68643 0.0030963C3.36618 0.0072247 3.28538 0.0874336 3.28302 0.401782C3.28008 0.813442 3.27595 1.22569 3.28479 1.63735C3.28892 1.81664 3.26179 1.92221 3.04712 1.95642C2.81887 1.99358 2.5924 2.07791 2.37949 2.17346C1.22649 2.68951 0.415555 3.50811 0.235085 4.80148C0.0410504 6.19039 0.602513 7.25788 1.78383 7.97681C2.32406 8.3059 2.9156 8.55066 3.48886 8.8249C4.07096 9.10327 4.68019 9.33092 5.23753 9.65117C6.20357 10.2061 6.15698 11.3827 5.17324 11.91C4.75509 12.1341 4.30687 12.2061 3.83564 12.1477C2.92031 12.0344 2.14005 11.6328 1.44589 11.0407C1.16751 10.803 1.08318 10.8148 0.859062 11.1109C0.646155 11.3922 0.436786 11.6764 0.226238 11.9595C-0.0934182 12.3895 -0.0869309 12.4349 0.326499 12.7958C1.16751 13.5295 2.1483 13.9636 3.28126 14.1505H3.28302Z" fill={fill} />
    </svg>
  )
}

export default React.memo(USDT)
