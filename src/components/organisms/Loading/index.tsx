import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className='bg-opacity-80 absolute top-0 left-0 w-full h-full'>
      <Image
        src={'/assets/img/spinner.svg'}
        className='absolute top-1/4 left-2/4'
        alt='Spinner Icon'
        width={50}
        height={50}
        priority
      />
    </div>
  )
}

export default Loading
