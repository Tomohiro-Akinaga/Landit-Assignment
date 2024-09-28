import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp
  color: string
  size: 'small' | 'large'
}

const Icon = ({ icon, children, color, size }: PropsWithChildren<Props>) => {
  const fontSize = size === 'small' ? '14px' : '24px'
  const iconSize = size === 'small' ? '14px' : '18px'
  const gap = size === 'small' ? '6px' : '12px'

  return (
    <span
      style={{ gap: gap, fontSize: fontSize, color: `var(--${color}-color)` }}
      className={`flex items-center w-max leading-5`}
    >
      <FontAwesomeIcon icon={icon} className={`w-[${iconSize}px]`} />
      {children}
    </span>
  )
}

export default Icon
