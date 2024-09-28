'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import Form from '@/components/organisms/Form'
import React, { useState } from 'react'
import Graph from '@/components/organisms/Graph'

export type RealEstateDataType = {
  prefCode: string
  prefName: string
  displayType: string
  years: {
    year: number
    value: number
  }[]
}

export default function Home() {
  const [realEstateData, setRealEstateData] = useState<RealEstateDataType | undefined>(undefined)
  const [averageRealEstatePrice, setAverageRealEstatePrice] = useState<number>(0)

  return (
    <main className='relative flex-1 before:content-[""] before:block before:h-full before:bg-[url("/assets/img/bg.png")]'>
      <div className='absolute p-10 inset-0 bg-black bg-opacity-80 grid grid-cols-subgrid'>
        <h2 className='flex gap-2 items-center border-b-[1px] border-white-20 pb-[16px] text-white font-normal text-[32px]'>
          <FontAwesomeIcon icon={faSquarePollVertical} color='white' className='w-[27px]' />
          取引価格 <span className='pl-[8px] text-[13.71px] h-[33px] flex items-end'>※取引面積1㎡あたり</span>
        </h2>
        <div className='flex pt-10 gap-6'>
          <Graph realEstateData={realEstateData} averageRealEstatePrice={averageRealEstatePrice} />
          <Form setRealEstateData={setRealEstateData} setAverageRealEstatePrice={setAverageRealEstatePrice} />
        </div>
      </div>
    </main>
  )
}
