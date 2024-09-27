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
}

const CheckBox = ({ checkBoxLabels, onChange, name, iconLabel, icon }: Props) => {
  return (
    <div className='flex items-start gap-6 pt-6'>
      <Icon icon={icon}>{iconLabel}</Icon>
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
