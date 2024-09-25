import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='h-[74px]'>
      <Link href='/'>
        <Image src='/assets/img/logo-landit.svg' alt='Site logo' width={233} height={60} priority />
      </Link>
    </header>
  )
}

export default Header
