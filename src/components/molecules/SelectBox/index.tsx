import Icon from '@/components/atoms/Icon'
import Select from '@/components/atoms/Select'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

interface Props {
  label: string
  options: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  icon: IconProp
}

const SelectBox = ({ label, options, onChange, icon }: Props) => {
  return (
    <div className='py-6 border-b border-[#E5E5E5] flex gap-6'>
      <Icon icon={icon}>{label}</Icon>
      <Select options={options} onChange={onChange} />
    </div>
  )
}

export default SelectBox
