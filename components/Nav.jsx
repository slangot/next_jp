import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='flex flex-between w-full mb-16 pt-3'>
      <Link href='/' className='gap-2 mr-4 ml-4' >Home</Link>
      <Link href='/kana' className='gap-2 mr-4 ml-4'>Kana</Link>
      <Link href='/kanji' className='gap-2 mr-4 ml-4'>Kanji</Link>
    </nav>
  )
}

export default Nav