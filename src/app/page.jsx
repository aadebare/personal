import { historicalData } from "./blog/page"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



export default function page() {


  // const camping = historicalData.filter(camp => camp.category == 'camping').slice(0,2)
  const camping = historicalData.find(camp => camp.category == 'camping')
  const cultural = historicalData.find(camp => camp.category == 'cultural')
  const historical = historicalData.find(camp => camp.category == 'historical')
  const wildlife = historicalData.find(camp => camp.category == 'wildlife')
  const adventure = historicalData.find(camp => camp.category == 'adventure')
  return (
    <page >
      <div>
      <h1 className='flex text-7xl ml-[150px] font-bold mt-11 capitalize'>roaming the globe: adventures beyond borders</h1>
      </div>

    <div className="flex  gap-6  ml-5 pt-10">
      <div className="bg-slate-900 h-[330px] w-[340px] text-white grid grid-cols-2 ">
        <span ></span>
        <p></p>
      </div>
      <div className=" col-span-5 ">
      <div style={{backgroundImage: 'url(/image/patagoniaArgentina.jpg)',height: '330px', width: '600px', backgroundRepeat:'no-repeat',  }}>
      </div>
      </div>
      
        <div className="bg-purple-100 h-[330px] w-[350px] border-2 border-black ">
        <p className="text-xl justify-items-center text-start p-6 m-2">Awaits your exploration immerse yourself in captivating narratives and thought-provoking content as you delve into the pages that await you. Welcome to a world of imagination and knowledge—begin your reading adventure now.</p>
          <span className="bg-purple-700 text-white py-4 px-8 text-2xl m-8"> Start Reading</span>
         
        </div>

        
        </div>

        
        

      
        <div className=" grid grid-cols-4 grid-rows-[repeat(8,_350px)] mt-10 w-[1330px] ml-6 border-t-2 border-black ">

        {/* {camping.map(camping => ( */}
        <div  className=" col-span-1 row-span-1  pt-10 px-4 border-2 border-black border-l-0 border-t-0" key={camping.id}>
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[25%] flex justify-start items-center pl-1 hover:bg-purple-500 hover:transition-all '><Link href='/'>{camping.category}</Link></span>
          <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'><Link href='/'>{camping.title} </Link></p>
          <p className='text-xl'>{camping.description[0]}</p>
          <p className=' mt-[2px] text-2xl'>{new Date(camping.date).toLocaleDateString('en',{weekday: 'long',year: 'numeric',month: 'long',day: 'numeric' })}</p>
          
        </div>
        <div  className=" col-span-1 row-span-1  pt-10 px-4 border-2 border-black border-l-0 border-t-0" key={wildlife.id}>
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[25%] flex justify-start items-center pl-1 hover:bg-purple-500 hover:transition-all '><Link href='/'>{wildlife.category}</Link></span>
          <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'><Link href='/'>{wildlife.title} </Link></p>
          <p className='text-xl'>{wildlife.description[0]}</p>
          <p className=' mt-[2px] text-2xl'>{new Date(wildlife.date).toLocaleDateString('en',{weekday: 'long',year: 'numeric',month: 'long',day: 'numeric' })}</p>
          
        </div>
        {/* ))

} */}
        <div className=" col-span-2 row-span-2">
          <img src="/image/travelerAirport.jpg" className="h-[700px] border-b-2 border-black"  />
        </div>
        {
        <div  className="col-span-1 row-span-1   p-4 border-2 border-black border-l-0 border-t-0">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[25%] pl-1  flex justify-start text-center hover:bg-purple-500 hover:transition-all '><Link href='/'>{cultural.category}</Link></span>
          <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'><Link href='/'>{cultural.title} </Link></p>
          <p className='text-xl'>{cultural.description[1]}</p>
          <p className='mt-[2px] text-2xl'>{new Date(cultural.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
        </div>

}
        {
        <div  className="col-span-1 row-span-1   p-4 border-2 border-black border-l-0 border-t-0 ">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[30%] pl-2 flex justify-start text-center hover:bg-purple-500 hover:transition-all '><Link href='/'>{historical.category}</Link></span>
          <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'><Link href='/'>{historical.title}</Link></p>
          <p className='text-xl'>{historical.description[1]}</p>
          <p className=' mt-[2px] text-2xl'>{new Date(historical.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
          
        </div>

}
        
        

 

  <div  className="mt-20 w-[980px] ml-[185px]" >

<div >
  <h2 className=" bg-black text-white text-4xl font-bold py-3 pl-12  capitalize">latest posts</h2>
</div>

<div  className="w-[980px] ml-[0px] grid grid-cols-2  mt-20 ">
  <main className="w-[550px] pr-4">
  <div className="" key={wildlife.id}>
  <img src={`/image/${wildlife.title.split(' ').join('-')}.jpg`} height='400' alt={wildlife.title}
            className='h-[250px] w-[550px]  '/>

          </div>
          <div className="flex space-x-4">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[15%] pl-3 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all'><Link href=''>{wildlife.category}</Link></span>
          <p className=' text-3xl mt-6'>{new Date(wildlife.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
          </div>
          <p className='text-4xl font-bold hover:text-purple-600 hover:transition-all'><Link href=''>{wildlife.title}</Link> </p>
          <p className='text-xl'>{wildlife.description[1]}</p>
          
  


<div className="" key={cultural.id}>
  <img src={`/image/${cultural.title.split(' ').join('-')}.jpg`} height='400' alt={cultural.title}
            className='h-[250px] w-[550px]  mt-16 '/>

          </div>
          <div className="flex space-x-4">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[15%] pl-3 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all'><Link href=''>{cultural.category}</Link></span>
          <p className=' text-3xl mt-6'>{new Date(cultural.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
          </div>
          <p className='text-4xl font-bold hover:text-purple-600 hover:transition-all'><Link href=''>{cultural.title}</Link> </p>
          <p className='text-xl'>{cultural.description[1]}</p>
          

<div className="" key={historical.id}>
  <img src={`/image/${historical.title.split(' ').join('-')}.jpg`} height='400' alt={historical.title}
            className='h-[250px] w-[550px]  mt-16 '/>

          </div>
          <div className="flex space-x-4">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[18%] pl-3 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all '><Link href=''>{historical.category}</Link></span>
          <p className=' text-3xl mt-6'>{new Date(historical.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
          </div>
          <p className='text-4xl font-bold hover:text-purple-600 hover:transition-all'><Link href=''>{historical.title}</Link> </p>
          <p className='text-xl'>{historical.description[1]}</p>
         

<div className="" key={adventure.id}>
  <img src={`/image/${adventure.title.split(' ').join('-')}.jpg`} height='400' alt={adventure.title}
            className='h-[250px] w-[550px]  mt-16 '/>

          </div>
          <div className="flex space-x-4">
          <span className='text-2xl font-bold capitalize bg-black text-white  w-[15%] pl-1 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all '><Link href=''>{adventure.category}</Link></span>
          <p className=' text-3xl mt-6'>{new Date(adventure.date).toLocaleDateString('en',{weekday: 'long', year: 'numeric', month: 'long',day: 'numeric' })}</p>
          </div>
          <p className='text-4xl font-bold hover:text-purple-600 hover:transition-all'><Link href=''>{adventure.title}</Link> </p>
          <p className='text-xl'>{adventure.description[1]}</p>
          </main> 
          
          <aside className="  ml-20 w-[430px] border-l-2 border-black ">
            <div className="border-b-2 border-black">
              <h3 className="text-3xl font-semibold capitalize pl-12">welcome</h3>
              <div className="flex pl-12  ">
                <img src="/image/adebare3.jpg" alt="adebare3" className="h-[150px] w-[150px] rounded-full mt-10"/>
              </div>
              <p className="text-2xl font-semibold capitalize mt-4 pl-12">hello, I'am Adebare</p>
              <p className="text-xl font-medium pl-12 pb-12 mr-12">I am your go-to source for everything this dynamic city has to offer. From hidden gems in historic neighbourhoods to the trendiest eateries in town, I am passionate about uncovering the pulse of Atlanta's culture and sharing it with you.</p>
            </div>
            <div className="capitalize border-b-2 border-black ">
              <h2 className="pl-12 text-3xl font-bold mt-10">categories</h2>
              <form typeof="radio" className=" pl-12 text-2xl pt-6 mb-12 space-y-4">
                  <input type="radio" name="historical" id="historical" />
                  <label className="pl-3"><Link href=''>historical</Link></label><br />
                  <input type="radio" name="wildlife" id="wildlife" />
                  <label className="pl-3"><Link href=''>wildlife</Link></label><br />
                  <input type="radio" name="adventure" id="adventure" />
                  <label className="pl-3"><Link href=''>adventure</Link></label><br />
                  <input type="radio" name="cultural" id="cultural" />
                  <label className="pl-3"><Link href=''>cultural</Link></label><br />
                  <input type="radio" name="camping" id="camping" />
                  <label className="pl-3"><Link href=''>camping</Link></label>
                  
                
              </form>
            </div>
            <div className="border-b-2 border-black ">
              <h2 className="text-3xl font-bold mt-10 ml-8 capitalize">featured</h2>
              <div className="flex mt-5 ml-8 space-x-4">
                     <div className="  ">
                       <img src={`/image/${adventure.title.split(' ').join('-')}.jpg`} height='400' alt={adventure.title} className="h-[100px] w-[100px] rounded-full"/>
                      </div>
                      <div>
                      <span className='text-2xl font-medium capitalize bg-black text-white  w-[35%] pl-3 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all'><Link href=''>{adventure.category}</Link></span>
                      <p className='text-2xl font-semibold hover:text-purple-600 hover:transition-all'><Link href=''>{adventure.title}</Link> </p>
                      </div>
              </div>
              <div className="flex mt-5 ml-8 space-x-4">
                     <div className="  ">
                       <img src={`/image/${wildlife.title.split(' ').join('-')}.jpg`} height='400' alt={wildlife.title} className="h-[100px] w-[100px] rounded-full"/>
                      </div>
                      <div>
                      <span className='text-2xl font-medium capitalize bg-black text-white  w-[30%] pl-4 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all'><Link href=''>{wildlife.category}</Link></span>
                      <p className='text-2xl font-semibold hover:text-purple-600 hover:transition-all'><Link href=''>{wildlife.title}</Link> </p>
                      </div>
              </div>
              <div className="flex mt-5 ml-8 space-x-4 mb-8">
                     <div className="  ">
                       <img src={`/image/${cultural.title.split(' ').join('-')}.jpg`} height='400' alt={cultural.title} className="h-[100px] w-[100px] rounded-full"/>
                      </div>
                      <div>
                      <span className='text-2xl font-medium capitalize bg-black text-white  w-[30%] pl-4 mt-6 flex justify-start text-center hover:bg-purple-700  hover:transition-all'><Link href=''>{cultural.category}</Link></span>
                      <p className='text-2xl font-semibold hover:text-purple-600 hover:transition-all'><Link href=''>{cultural.title} </Link></p>
                      </div>
              </div>
            </div>
            <div className="capitalize border-b-2 border-black">
              <div className="ml-8 mt-7" >
              <h2 className="text-3xl font-bold">tags</h2>
              </div>
             <div className="ml-8 mt-4 flex flex-col text-2xl ">
              <ul className="flex flex-row">
                <li className="p-2 border-2 border-black border-b-0 border-r-0 hover:bg-black hover:text-white hover:transition-all"><Link href=''>historical</Link></li>
                <li className="p-2 border-2 border-black border-b-0 hover:bg-black hover:text-white hover:transition-all"><Link href=''>adventure</Link></li>
                
              </ul>
              <ul className="flex flex-row mb-10">
              <li className="p-2 border-2 border-black border-r-0 hover:bg-black hover:text-white hover:transition-all"><Link href=''>wildlife</Link></li>
                <li className="p-2 border-2 border-black border-r-0 hover:bg-black hover:text-white hover:transition-all"><Link href=''>cultural</Link></li>
                <li className="p-2 border-2 border-black hover:bg-black hover:text-white hover:transition-all"><Link href=''>camping</Link></li>
              </ul>
             </div>

            </div>

            <div>
              <h2 className="text-3xl font-semibold capitalize mt-10 ml-8">follow</h2>
              <div className="ml-8 space-y-10 text-xl mt-7">
                <div className="flex space-x-2 ">
                  <span className="hover:text-purple-600 hover:transition-all" ><Link href='https://www.instagram.com/adebareoye?igsh=YXB1MDR5c2F0MXo3&utm_source=qr'><FaInstagram /></Link></span>
                  <p>@adebareoye</p>
                </div>
                <div className="flex space-x-2">
                  <span className="hover:text-purple-600 hover:transition-all"><Link href='https://www.linkedin.com/in/adebowale-adebare-a189812b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><CiLinkedin /></Link></span>
                  <p>@adebowale adebare</p>
                </div>
                <div className="flex space-x-2">
                  <span className="hover:text-purple-600 hover:transition-all"><Link href='https://x.com/omoadebare?s=11'><FaXTwitter /></Link></span>
                  <p>@OmoAdebare</p>
                </div>
                <div className="flex space-x-2">
                  <span className="hover:text-purple-600 hover:transition-all"><Link href='http://Wa.me/+2347038213144'><FaWhatsapp /></Link></span>
                  <p>+234 703 821 3144</p>
                 
                </div>
              </div>
            </div>
          </aside>
          </div>
          <div className="mt-20 space-x-3">
          <div className='w-[980px] ml-[185x]  absolute '>
                <img src='/image/navyBlue.jpg' alt='bluebackground' className='h-[350px] w-[1000px] absolute '/>
                </div>

              <div className='flex justify-start items-center relative mt-16'>
              <div className='text-5xl font-bold text-white  w-[35%]  p-16 ml-2'>
                  <h3 >Enjoy premium content in your inbox on a monthly basis.</h3>
             </div>

              <div className='px-[70px] py-[55px] m-o mr-[60px] space-x-6 border-2 border-white flex text-3xl'>
              <input type="email" placeholder='Enter your email address' className=' text-white outline-none bg-transparent text-2xl' />
              <span className='  text-white px-8 py-2 text-xl bg-purple-600 '>start reading</span>
              </div>
              </div>
            </div>

            <div>
              <h2>all posts</h2>
            </div>
            <div className="mt-32 grid grid-cols-3 grid-rows-3 gap-4 text-start  ">
              <div className="border-2 border-black pl-4" key={wildlife.id}>
              <img src={`/image/${wildlife.title.split(' ').join('-')}.jpg`} height='400' alt={wildlife.title}
               className='h-[200px] w-[285px] absolute mt-8 border-2 border-black hover:scale-125 duration-500 transition-transform '/>
               <span className='text-2xl font-bold capitalize bg-black text-white w-[30%] relative  flex justify-end text-center pr-5 ml-[195px] mt-8 hover:bg-purple-500 hover:transition-all'>{wildlife.category}</span>
               <p className=' mt-[200px] text-2xl'>{wildlife.date}</p>
               <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'>{wildlife.title}</p>
               <p className='text-xl'>{wildlife.description[1]}</p>
              </div>
              <div className="border-2 border-black pl-4"  key={adventure.id}>
              <img src={`/image/${adventure.title.split(' ').join('-')}.jpg`} height='400' alt={adventure.title}
               className='h-[200px] w-[285px] absolute mt-8 border-2 border-black hover:scale-125 duration-500 transition-transform '/>
               <span className='text-2xl font-bold capitalize bg-black text-white w-[30%] relative  flex justify-end text-center pr-2 ml-[195px] mt-8 hover:bg-purple-500 hover:transition-all'>{adventure.category}</span>
               <p className=' mt-[200px] text-2xl'>{adventure.date}</p>
               <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'>{adventure.title}</p>
               <p className='text-xl'>{adventure.description[1]}</p>
              </div>
              <div className="border-2 border-black pl-4"  key={camping.id}>
              <img src={`/image/${camping.title.split(' ').join('-')}.jpg`} height='400' alt={camping.title}
               className='h-[200px] w-[285px] absolute mt-8 border-2 border-black hover:scale-125 duration-500 transition-transform '/>
               <span className='text-2xl font-bold capitalize bg-black text-white w-[30%] relative  flex justify-end text-center pr-3 ml-[195px] mt-8 hover:bg-purple-500 hover:transition-all'>{camping.category}</span>
               <p className=' mt-[200px] text-2xl'>{camping.date}</p>
               <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'>{camping.title}</p>
               <p className='text-xl'>{camping.description[1]}</p>
              </div>
              <div className="border-2 border-black pl-4"  key={historical.id}>
              <img src={`/image/${historical.title.split(' ').join('-')}.jpg`} height='400' alt={historical.title}
               className='h-[200px] w-[285px] absolute mt-8 border-2 border-black hover:scale-125 duration-500 transition-transform '/>
               <span className='text-2xl font-bold capitalize bg-black text-white w-[30%] relative  flex justify-end text-center pr-3 ml-[195px] mt-8 hover:bg-purple-500 hover:transition-all'>{historical.category}</span>
               <p className=' mt-[200px] text-2xl'>{historical.date}</p>
               <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'>{historical.title}</p>
               <p className='text-xl'>{historical.description[1]}</p>
              </div>
              
              <div className="border-2 border-black pl-4 overflow-hidden"  key={cultural.id}>
              
              <img src={`/image/${cultural.title.split(' ').join('-')}.jpg`} height='400' alt={cultural.title[0]}
               className='h-[200px] w-[285px] absolute mt-8 border-2 border-black hover:scale-125 duration-250 transition-transform '/>
               
               <span className='text-2xl font-bold capitalize bg-black text-white w-[30%] relative  flex justify-end text-center pr-3 ml-[195px] mt-8 hover:bg-purple-500 hover:transition-all'>{cultural.category}</span>
               <p className=' mt-[200px] text-2xl'>{cultural.date}</p>
               <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all'>{cultural.title}</p>
               <p className='text-xl'>{cultural.description[1]}</p>
              </div>
              

            </div>
          </div>
          
          
            

          </div>
       





     



       

       
         
   
    
  















    </page>
  )
}


