import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp
}

const Icon = ({ icon, children }: PropsWithChildren<Props>) => {
  return (
    <span className='flex gap-[6px] items-center w-max text-[13px] leading-5'>
      <FontAwesomeIcon icon={icon} className='w-[11px] h-3.5' />
      {children}
    </span>
  )
}

export default Icon
