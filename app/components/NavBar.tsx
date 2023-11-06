import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLaptop } from "react-icons/fa"

export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link href={"/"} className='text-white/90 no-underline hover:text-white'>
            Rob
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle
          gap-4 text-white text-4xl lg:text-5xl'> 
          <Link href={"https://github.com/AgentRoberto"} className='text-white/90 hover:text-white'>
            <FaGithub />
          </Link>
          <Link href={"https://twitter.com/TheBobbyBolo"} className='text-white/90 hover:text-white'>
            <FaTwitter />
          </Link>
          <Link href={"/"} className='text-white/90 hover:text-white'>
            <FaLaptop />
          </Link>
        </div>

      </div>
    
    </nav>
  )
}
