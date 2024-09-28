'use client'

import React, { useState, useMemo } from 'react'
import CheckBox from '@/components/molecules/CheckBox'
import SelectBox from '@/components/molecules/SelectBox'
import Button from '@/components/atoms/Button'
import { PREF_CODES } from '@/constants/prefCode'
import { DISPLAY_TYPE } from '@/constants/displayType'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { RealEstateDataType } from '@/app/page'

interface Props {
  setRealEstateData: (data: RealEstateDataType) => void
  setAverageRealEstateData: (data: RealEstateDataType) => void
}

const Form = ({ setRealEstateData, setAverageRealEstateData }: Props) => {
  const [year, setYear] = useState<string>('2021')
  const [prefCode, setPrefCode] = useState<string>('1')
  const [displayType, setDisplayType] = useState<string>('1')

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = DISPLAY_TYPE.find((v) => v.label === e.target.value)
    setDisplayType(value?.value as string)
  }

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  const handlePrefCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = PREF_CODES.find((v) => v.name === e.target.value)
    setPrefCode(value?.code as string)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(`/api/prefecture?year=${year}&prefCode=${prefCode}&displayType=${displayType}`)
    const data = await res.json()

    const averageRes = await fetch(`/api/average?year=${year}&displayType=${displayType}`)
    const averageData = await averageRes.json()

    setRealEstateData(data)
    setAverageRealEstateData(averageData)
  }

  const options = useMemo(() => {
    const length = 2022 - 2009
    return Array.from({ length }, (_, i) => String(2009 + i)).reverse()
  }, [])

  return (
    <form className='p-6 bg-[#F0F3F5] flex flex-col' onSubmit={handleSubmit}>
      <p className='pb-6 border-b border-[#E5E5E5]'>表示内容を確認</p>
      <SelectBox
        label={'場所'}
        options={PREF_CODES.map((v) => v.name)}
        onChange={handlePrefCode}
        icon={faLocationDot}
        color='secondary'
        size='small'
      />
      <SelectBox
        label={'年度'}
        options={options}
        onChange={handleYear}
        icon={faCalendarCheck}
        color='secondary'
        size='small'
      />
      <CheckBox
        checkBoxLabels={DISPLAY_TYPE.map((v) => v.label)}
        onChange={handleType}
        iconLabel={'種類'}
        icon={faShapes}
        color={'secondary'}
        size='small'
        name={'displayType'}
      />
      <div className='mt-auto'>
        <Button type={'submit'}>データをダウンロード</Button>
      </div>
    </form>
  )
}

export default Form
