import React, { ComponentPropsWithoutRef } from 'react'

const RadioButton = ({ name, onChange, value, checked }: ComponentPropsWithoutRef<'input'>) => {
  return (
    <label className='flex items-center gap-2 text-[13px]'>
      <input
        type='radio'
        name={name}
        onChange={onChange}
        value={value}
        defaultChecked={checked}
        className='w-6 h-6 leading-5'
      />
      {value}
    </label>
  )
}

export default RadioButton
