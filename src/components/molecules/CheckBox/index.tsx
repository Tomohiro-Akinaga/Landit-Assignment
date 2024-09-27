import React from 'react'
import RadioButton from '@/components/atoms/RadioButton'
import Icon from '@/components/atoms/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  checkBoxLabels: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  iconLabel: string
  icon: IconProp
  color: string
  fontSize: number
  iconSize: number
  gap: number
}

const CheckBox = ({ checkBoxLabels, onChange, name, iconLabel, icon, color, fontSize, iconSize, gap }: Props) => {
  return (
    <div className='flex items-start gap-6 pt-6'>
      <Icon icon={icon} color={color} fontSize={fontSize} iconSize={iconSize} gap={gap}>
        {iconLabel}
      </Icon>
      <div className='flex flex-col gap-3'>
        {checkBoxLabels.map((v, i) => (
          <RadioButton onChange={onChange} key={i} value={v} name={name} checked={i === 0}>
            {v}
          </RadioButton>
        ))}
      </div>
    </div>
  )
}

export default CheckBox
