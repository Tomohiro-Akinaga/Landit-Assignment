import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Icon = ({ children }: PropsWithChildren) => {
  return (
    <span className='flex gap-[6px] items-center'>
      <FontAwesomeIcon icon={faLocationDot} className='w-[11px] h-3.5' />
      {children}
    </span>
  )
}

export default Icon
