import React, { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Label } from 'recharts'

interface Props {
  graphData: {
    displayType: string
    prefName: string
    years: {
      year: number
      value: number
    }[]
  }
}

const Graph = ({ graphData }: Props) => {
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
        return '表示種類'
    }
  }, [graphData])

  const data = [
    { label: prefName, amt: value },
    { label: '全国平均', amt: 34567 },
  ]

  return (
    <div className='w-full flex gap-20 flex-col py-28 '>
      <div className='w-full'>
        <p>{prefName}</p>
        <p>{`${year}年`}</p>
        <p>{displayType}</p>
      </div>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 33 }}>
          <defs>
            <linearGradient id='gradationColor' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='#ff0000' />
              <stop offset='100%' stopColor='#ffa500' />
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
              <Cell key={`cell-${i}`} fill={'gradationColor'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
