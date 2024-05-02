import Link from "next/link"
import {SiAngular} from "react-icons/si"
export default function Navbar() {
  return (
    <nav className="flex border-y-2 border-gray-950 w-[98%] m-auto justify-between h-14 capitalize mt-[70px] pr-4 space-x-10">
        <div className="flex items-center m-2 text-4xl font-semibold space-x-2">
        <span>
          <SiAngular/>
        </span>
        <h2><Link href='/'>adebareBlogs</Link></h2> 
        </div>

        <div className="flex space-x-20 items-center font-semibold justify-center text-2xl border-r-2 w-[750px] border-black pr-4">
           <div><Link href='/'>home</Link></div> 
           <div><Link href='/about'>about</Link></div> 
           <div> <Link href='/blog'>blog</Link></div>
           <div> <Link href='/category'>category</Link></div>
           <div> <Link href='/contact'>contact</Link></div>
        </div>
           
        
          
        
        <div className='flex justify-start items-start border-l-0 space-x-0 w-[500px] border-black mr-5 pr-0 pl-2'>
        <input className="w-[320px] text-base font-medium h-12 border-none outline-none  pr-5" type="email" name="email" id="email" placeholder="Enter your email"  />
        <span className="bg bg-black px-[10px] py-[7px]   pr-0 w-[60%] mt-1 pb-3 h-[50px] pl-1 text-lg text-center text-white  hover:text-white hover:bg-purple-600 hover:transition-all"  >subscribe now</span>
        </div>
    </nav>
  )
}
