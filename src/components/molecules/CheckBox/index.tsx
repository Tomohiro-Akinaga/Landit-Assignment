import React from 'react'
import RadioButton from '@/components/atoms/RadioButton'
import Icon from '@/components/atoms/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  checkBoxLabels: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  iconLabel: string
  icon: IconProp
  color: string
  name: string
  size: 'small' | 'large'
}

const CheckBox = ({ checkBoxLabels, onChange, iconLabel, icon, color, size, name }: Props) => {
  return (
    <div className='flex items-start gap-6 pt-6'>
      <Icon icon={icon} color={color} size={size}>
        {iconLabel}
      </Icon>
      <div className='flex flex-col gap-3'>
        {checkBoxLabels.map((v, i) => (
          <RadioButton onChange={onChange} key={i} value={v} checked={i === 0} name={name}>
            {v}
          </RadioButton>
        ))}
      </div>
    </div>
  )
}

export default CheckBox
