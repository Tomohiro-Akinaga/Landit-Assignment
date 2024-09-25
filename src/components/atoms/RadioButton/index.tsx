import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

interface Props extends ComponentPropsWithoutRef<'input'> {}

const RadioButton = ({ children, onChange, value, name, checked }: PropsWithChildren<Props>) => {
  return (
    <label>
      <input type='radio' onChange={onChange} value={value} name={name} defaultChecked={checked} />
      {children}
    </label>
  )
}

export default RadioButton
