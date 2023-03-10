import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  HomeIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
// import { HeroIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between bg-white max-w-6xl auto-fit mx-5 lg:mx-auto'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid mt-4 h-10 w-24 cursor-pointer'>
          <Image
            src="https://links.papareact.com/ocw" fill="auto" />
        </div>

        <div className='relative mt-4 h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src="https://links.papareact.com/jjm" fill='auto' />
        </div>



        {/* Middle Search Field */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type="text" placeholder="Search" />
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4 '>
          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex item-center justify-center animate-pulse text-white'>3</div>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          <img src="https://links.papareact.com/ocw" className='h-10 rounded-full cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Header;
