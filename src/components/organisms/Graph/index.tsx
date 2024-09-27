import Icon from '@/components/atoms/Icon'
import React, { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Label } from 'recharts'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import getAveragePropertyPrice from '@/utils/getAveragePropertyPrice'

interface Props {
  averagePropertyPrice: number
  graphData: {
    displayType: string
    prefName: string
    years: {
      year: number
      value: number
    }[]
  }
}

const Graph = ({ graphData, averagePropertyPrice }: Props) => {
  const prefName = graphData ? graphData.prefName : '都道府県'
  const year = graphData ? graphData.years[0].year : ' - '
  const value = graphData ? graphData.years[0].value : '0'
  const displayType = useMemo(() => {
    switch (graphData?.displayType) {
      case '1':
        return '土地（住宅地）'
      case '2':
        return '土地（商業地）'
      case '3':
        return '中古マンション等'
      case '4':
        return '農地'
      case '5':
        return '林地'
      default:
        return '種類'
    }
  }, [graphData])

  const data = [
    { label: prefName, amt: value },
    { label: '全国平均', amt: averagePropertyPrice },
  ]

  return (
    <div className='w-full flex gap-20 flex-col py-28 px-[372px]'>
      <div className='w-full flex gap-12 justify-center'>
        <Icon icon={faLocationDot} color={'primary'} fontSize={24} iconSize={18} gap={12}>
          {prefName}
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
            className='[&>g>g:last-child>text]:fill-transparent'
            fontSize={12}
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
