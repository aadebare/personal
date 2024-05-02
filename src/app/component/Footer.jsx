import Link from 'next/link'
import React from 'react'
import {SiAngular} from "react-icons/si"

export default function Footer() {
  return (
    <footer className='flex justify-start h-[100vh] min-w-fit  bg-slate-950 text-white capitalize'>
      <div className='flex space-x-20 mt-20 ml-0 text-3xl '>

      <div>

      </div>
      <div className=' flex w-[20%] text-5xl '>
        <span>
        <SiAngular/>
       </span>
      <h2>adebareBlogs</h2> 
      </div>

      <div>
        <h3>pages</h3>
        <ul>
          <li className='hover:text-purple-800'><Link href='/'>home</Link></li>
          <li className='hover:text-purple-800'><Link href='/about'>about</Link></li>
          <li className='hover:text-purple-800'><Link href='/blog'>blog</Link></li>
          <li className='hover:text-purple-800'><Link href='/contact'>contact</Link></li>
        </ul>
      </div>

      <div>
        <h3>trending</h3>
        <ul>
          <li>design</li>
          <li>marketing</li>
          <li>hosting</li>
          <li>lifestyle</li>
          <li>agency</li>
        </ul>
      </div>

      <div>
        <h3>follow</h3>
        <ul>
          <li>twitter</li>
          <li>linkedIn</li>
          <li>instagram</li>
          <li>facebook</li>
        </ul>
    
      </div>

      <div>
        <h3>utility</h3>
        <ul>
          <li>style guide</li>
          <li>licenses</li>
          <li>changelog</li>
          <li>password</li>
          <li>not found</li>
        </ul>
      </div>
      <div>
        <div>we're on instagram as @adebareoye</div>
        <span>/</span><span>/</span><span>/</span>
      </div>
      </div>
    </footer>
  )
}
