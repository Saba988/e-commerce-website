import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    // 
    <div>
        <ul className='flex justify-center gap-16 text-xl font-semibold'>
            <li className=' hover:text-yellow-500 hover:underline'>HOME</li>
            <li className=' hover:text-yellow-500 hover:underline'>CATEGORIES</li>
            <li className=' hover:text-yellow-500 hover:underline'>WOMENS</li>
            <li className=' hover:text-yellow-500 hover:underline'>MENS</li>
            <li className=' hover:text-yellow-500 hover:underline'>PERFUMES</li>
            <li className=' hover:text-yellow-500 hover:underline'>HOT OFFERS</li>
        </ul>
        
    </div>
  )
}

export default NavBar
