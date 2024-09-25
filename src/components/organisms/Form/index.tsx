'use client'

import CheckBox from '@/components/molecules/CheckBox'
import SelectBox from '@/components/molecules/SelectBox'
import React, { useState, useMemo } from 'react'
import { PREF_CODE } from '@/constants/prefCode'
import { DISPLAY_TYPE } from '@/constants/displayType'

const Form = () => {
  const [year, setYear] = useState<string>('1900')
  const [prefCode, setPrefCode] = useState<number>(1)
  const [displayType, setDisplayType] = useState<number>(1)

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = DISPLAY_TYPE.find((v) => v.label === e.target.value)?.value
    setDisplayType(value as number)
  }

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  const handlePrefCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = PREF_CODE.find((v) => v.name === e.target.value)?.code
    setPrefCode(value as number)
  }

  const options = useMemo(() => {
    const thisYear = new Date().getFullYear()
    const length = thisYear - 1900 + 1
    return Array.from({ length }, (_, i) => String(1900 + i))
  }, [])

  console.log(year, prefCode, displayType)

  return (
    <form className='p-6 w-fit bg-[#F0F3F5]'>
      <p className='pb-6'>表示内容を確認</p>
      <SelectBox label={'場所'} options={PREF_CODE.map((v) => v.name)} onChange={handlePrefCode} />
      <SelectBox label={'年度'} options={options} onChange={handleYear} />
      <CheckBox labels={DISPLAY_TYPE.map((v) => v.label)} onChange={handleType} name={'type'} />
    </form>
  )
}

export default Form
