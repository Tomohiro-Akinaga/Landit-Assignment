import Icon from '@/components/atoms/Icon'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Label } from 'recharts'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { RealEstateDataType } from '@/app/page'

interface Props {
  averageRealEstateData: RealEstateDataType | undefined
  realEstateData: RealEstateDataType | undefined
}

const Graph = ({ realEstateData, averageRealEstateData }: Props) => {
  const prefecture = realEstateData ? realEstateData.prefecture : '都道府県'
  const year = realEstateData ? realEstateData.year : ' - '
  const price = realEstateData ? realEstateData.price : '0'
  const displayType = realEstateData ? realEstateData.displayType : '種類'
  const averagePrice = averageRealEstateData ? averageRealEstateData.price : ''

  const data = [
    { label: prefecture, amt: price },
    { label: '全国平均', amt: averagePrice },
  ]

  return (
    <div className='w-full flex gap-20 flex-col py-28 px-[372px]'>
      <div className='w-full flex gap-12 justify-center'>
        <Icon icon={faLocationDot} color={'primary'} fontSize={24} iconSize={18} gap={12}>
          {prefecture}
        </Icon>
        <Icon icon={faCalendarCheck} color={'primary'} fontSize={24} iconSize={18} gap={12}>{`${year}年`}</Icon>
        <Icon icon={faShapes} color={'primary'} fontSize={24} iconSize={18} gap={12}>
          {displayType}
        </Icon>
      </div>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 33 }}>
          <defs>
            <linearGradient id='prefecture' gradientTransform='rotate(156.04)'>
              <stop offset='0%' stopColor='#706D65' stopOpacity='1' />
              <stop offset='100%' stopColor='#57544C' stopOpacity='1' />
            </linearGradient>
            <linearGradient id='average' gradientTransform='rotate(136.95)'>
              <stop offset='24.03%' stopColor='#009984' stopOpacity='1' />
              <stop offset='75.73%' stopColor='#97BF4A' stopOpacity='1' />
            </linearGradient>
          </defs>
          <XAxis
            stroke='#fff'
            dataKey={'label'}
            className='[&>g>g>line]:stroke-none [&>g>g>text:first-child]:font-bold'
            dy={8}
          />
          <YAxis
            width={100}
            dx={-8}
            stroke='#fff'
            type='number'
            domain={[0, 'auto']}
            tickCount={11}
            fontSize={12}
            tickFormatter={(v) => `${v.toLocaleString()}`}
          >
            <Label position={'top'} fill='white' dx={30} dy={-13} fontSize={12}>
              （円/㎡）
            </Label>
          </YAxis>
          <Bar dataKey='amt' barSize={200}>
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={`url(#${i === 0 ? 'average' : 'prefecture'})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
