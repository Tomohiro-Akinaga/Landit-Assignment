import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

const Button = ({ type, children }: PropsWithChildren<ComponentPropsWithoutRef<'button'>>) => {
  return (
    <button type={type} className='text-base bg-[#0071C1] rounded-sm w-full text-white py-[14px]'>
      {children}
    </button>
  )
}

export default Button
