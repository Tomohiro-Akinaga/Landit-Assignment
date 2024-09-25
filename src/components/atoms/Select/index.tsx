import React, { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'select'> {
  options: string[]
}

const Select = ({ options, onChange }: Props) => {
  return (
    <select onChange={onChange}>
      {options.map((v, i) => (
        <option value={v} key={i}>
          {v}
        </option>
      ))}
    </select>
  )
}

export default Select
