import Icon from '@/components/atoms/Icon'
import Select from '@/components/atoms/Select'
import React, { PropsWithChildren } from 'react'

interface Props {
  label: string
  options: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox = ({ label, options, onChange }: Props) => {
  return (
    <div>
      <Icon>{label}</Icon>
      <Select options={options} onChange={onChange} />
    </div>
  )
}

export default SelectBox
