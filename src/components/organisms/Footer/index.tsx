import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  const navItems = ['利用規約', 'プライバシーポリシー']

  return (
    <footer className='bg-black opacity-80 flex justify-between py-4 px-8 border-t-[1px] border-white-20'>
      <nav className='flex gap-6'>
        {navItems.map((v, i) => (
          <Link href='#' key={i} className='text-white font-normal text-xs gap-2 flex items-center leading-[18px]'>
            {v}
            <FontAwesomeIcon icon={faWindowRestore} className='opacity-20 h-3' />
          </Link>
        ))}
      </nav>
      <span className='text-white font-normal text-xs leading-18'>&copy; 2023 Landit Inc.</span>
    </footer>
  )
}

export default Footer
