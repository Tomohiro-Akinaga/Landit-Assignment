import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const Graph = () => {
  const data = [
    { name: 'Page A', amt: 3361873 },
    { name: '全国平均', amt: 1234567 },
  ]

  return (
    <div className='w-full flex gap-20 flex-col py-28 px-[372px]'>
      <div className='w-full'>
        <p>東京都</p>
        <p>2022年</p>
        <p>土地(住宅地)</p>
      </div>
      <ResponsiveContainer>
        <BarChart data={data} barCategoryGap={20}>
          <XAxis stroke='#fff' className='[&>g>g>line]:stroke-none' dataKey='name' />
          <YAxis
            width={100}
            dx={-8}
            stroke='#fff'
            type='number'
            domain={[0, 'auto']}
            tickCount={14}
            className='[&>g>g:last-child>text]:fill-transparent'
          />
          <Bar dataKey='amt' fill='#fff' barSize={200} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
