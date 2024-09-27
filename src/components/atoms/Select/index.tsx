import React, { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'select'> {
  options: string[]
}

const Select = ({ options, onChange }: Props) => {
  return (
    <div className='relative after:content-[""] after:absolute after:top-[10px] after:right-[15px] after:w-3 after:h-3 after:border-r-2 after:border-t-2 after:border-black  after:rotate-[135deg] after:pointer-events-none'>
      <select
        onChange={onChange}
        className='w-60 pt-[9px] pb-2.5 px-3 text-[12px] appearance-none outline-none rounded-sm leading-5'
      >
        {options.map((v, i) => (
          <option value={v} key={i}>
            {v}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
