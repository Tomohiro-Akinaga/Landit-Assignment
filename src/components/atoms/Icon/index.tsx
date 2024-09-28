import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp
  color: string
  fontSize: number
  iconSize: number
  gap: number
}

const Icon = ({ icon, children, color, fontSize, iconSize, gap }: PropsWithChildren<Props>) => {
  return (
    <span
      style={{ gap: `${gap}px`, fontSize: `${fontSize}px`, color: `var(--${color}-color)` }}
      className='flex items-center w-max leading-5'
    >
      <FontAwesomeIcon icon={icon} className={`w-[${iconSize}px]`} />
      {children}
    </span>
  )
}

export default Icon
