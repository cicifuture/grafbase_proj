import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
        <div className= 'flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href= '/'> 
                    <Image 
                        src='/logo.svg'
                        width={115}
                        height={43}
                        alt='Flexibble'/>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar