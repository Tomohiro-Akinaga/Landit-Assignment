import React, { PureComponent } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Graph = () => {
  const data = [
    {
      name: 'Page A',
      amt: 4000,
    },
    {
      name: 'Page B',
      amt: 2210,
    },
  ]
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis stroke='#fff' />
        <YAxis stroke='#fff' label={{ value: 'YAxis Label' }} />
        <Bar dataKey='amt' fill='#fff' activeBar={<Rectangle fill='pink' stroke='blue' />} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Graph
