'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import Form from '@/components/organisms/Form'
import React, { useState } from 'react'
import Graph from '@/components/organisms/Graph'

export type RealEstateDataType = {
  year: string
  prefecture?: string
  displayType: string
  price: string
}

export default function Home() {
  const [realEstateData, setRealEstateData] = useState<RealEstateDataType>()
  const [averageRealEstateData, setAverageRealEstateData] = useState<RealEstateDataType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <main className='relative flex-1 before:content-[""] before:block before:h-full before:bg-[url("/assets/img/bg.png")]'>
      <div className='absolute p-10 inset-0 bg-black bg-opacity-80 grid grid-cols-subgrid'>
        <h2 className='flex gap-2 items-center border-b-[1px] border-white-20 pb-[16px] text-white font-normal text-[32px]'>
          <FontAwesomeIcon icon={faSquarePollVertical} color='white' className='w-[27px]' />
          取引価格 <span className='pl-[8px] text-[13.71px] h-[33px] flex items-end'>※取引面積1㎡あたり</span>
        </h2>
        <div className='flex pt-10 gap-6'>
          <Graph realEstateData={realEstateData} averageRealEstateData={averageRealEstateData} isLoading={isLoading} />
          <Form
            setRealEstateData={setRealEstateData}
            setAverageRealEstateData={setAverageRealEstateData}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </main>
  )
}
