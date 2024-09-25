import React from 'react'
import RadioButton from '@/components/atoms/RadioButton'

interface Props {
  labels: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

const CheckBox = ({ labels, onChange, name }: Props) => {
  return (
    <div>
      {labels.map((v, i) => (
        <RadioButton onChange={onChange} key={i} value={v} name={name} checked={i === 0}>
          {v}
        </RadioButton>
      ))}
    </div>
  )
}

export default CheckBox
