import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
        <div className='relative hidden h-24 lg:inline-grid w-24'>
        <Image 
          src='https://links.papareact.com/ocw'
          layout='fill'
          objectFit='contain'
        /> 
      </div>
      </div>
      
    </div>
  )
}

export default Header