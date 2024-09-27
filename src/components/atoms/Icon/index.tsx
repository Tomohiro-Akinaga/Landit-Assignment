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
      className={`flex gap-[${gap}px] items-center w-max text-[${fontSize}px] leading-5 text-[var(--${color}-color)]`}
    >
      <FontAwesomeIcon icon={icon} className={`w-[${iconSize}px]`} />
      {children}
    </span>
  )
}

export default Icon
