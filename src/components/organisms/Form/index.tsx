'use client'

import React, { useState, useMemo } from 'react'
import CheckBox from '@/components/molecules/CheckBox'
import SelectBox from '@/components/molecules/SelectBox'
import Button from '@/components/atoms/Button'
import { PREF_CODE } from '@/constants/prefCode'
import { DISPLAY_TYPE } from '@/constants/displayType'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  setGraphData: (data: any) => void
}

const Form = ({ setGraphData }: Props) => {
  const [year, setYear] = useState<string>('2021')
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/townPlanning/estateTransaction/bar?year=${year}&prefCode=${prefCode}&cityCode=-&displayType=${displayType}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY || '',
        },
      }
    )

    const data = await res.json()
    setGraphData(data.result)
  }

  const options = useMemo(() => {
    const length = 2022 - 1900
    return Array.from({ length }, (_, i) => String(1900 + i)).reverse()
  }, [])

  return (
    <form className='p-6 bg-[#F0F3F5] flex flex-col' onSubmit={handleSubmit}>
      <p className='pb-6 border-b border-[#E5E5E5]'>表示内容を確認</p>
      <SelectBox label={'場所'} options={PREF_CODE.map((v) => v.name)} onChange={handlePrefCode} icon={faLocationDot} />
      <SelectBox label={'年度'} options={options} onChange={handleYear} icon={faCalendarCheck} />
      <CheckBox
        checkBoxLabels={DISPLAY_TYPE.map((v) => v.label)}
        onChange={handleType}
        name={'type'}
        iconLabel={'種類'}
        icon={faShapes}
      />
      <div className='mt-auto'>
        <Button type={'submit'}>データをダウンロード</Button>
      </div>
    </form>
  )
}

export default Form
