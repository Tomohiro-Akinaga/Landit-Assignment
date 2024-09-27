import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

interface Props extends ComponentPropsWithoutRef<'input'> {}

const RadioButton = ({ children, onChange, value, name, checked }: PropsWithChildren<Props>) => {
  return (
    <label className='flex items-center gap-2 text-[13px]'>
      <input
        type='radio'
        onChange={onChange}
        value={value}
        name={name}
        defaultChecked={checked}
        className='w-6 h-6  leading-5'
      />
      {children}
    </label>
  )
}

export default RadioButton
