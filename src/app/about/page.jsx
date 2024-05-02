import { historicalData } from "../blog/page"

export default function About() {
  return (
    <page>
      <div>
        <h1 className='flex text-8xl ml-[100px] font-bold mt-11'>Behind the Blog: Our Journey, Our Passion</h1>
      </div>
        

    <div>
     <img src='/image/beachView.jpg' alt='' className='h-[300px] w-[1350px] ml-5 mt-9 ' />
    </div>

    <section className='flex mt-10 border-solid border-y-slate-950 border-2 h-[440px] w-[1100px] ml-[140px] border-x-0 gap-5'>
      <h2 className='text-7xl justify-center items-center mt-8 font-[900;] w-[630px] ml-2'>About our team and continue exploring our report.</h2>
      <div className='border-l-2  border-black ml-24'>
      <img src='/image/travelerAirport2.jpg' className='h-[250px] w-[650px] ml-12 mt-10'/>
      <p className='ml-12 text-2xl mt-4'>Team-a collective of passionate minds driven by a shared commitment to excellence. Each member brings a unique set of skills and experience to the table, contributing to the rich tapestry of perspectives that shape our work.</p>
      </div>
     
    </section>

    <div className='justify-center text-center uppercase text-8xl font-[1000;] w-[1300px] m-auto mt-10 '>
    <h2>latest art scene reports & features hub</h2>
    </div>

    <section className='flex mt-10 border-y-slate-950 border-2 w-[1100px] ml-[140px] border-x-0 h-[810px]'>
    <div className='border-r-2 border-black mx-5 pr-5'>
      <h2 className='font-semibold text-6xl m-auto justify-center text-center mt-6 capitalize'>Our story</h2>
      <p className='justify-center text-center text-2xl'>The moments that have defined us. From triumphs to challenges, laughter to tears, this is a narrative woven with the threads of our past, present and aspirations for the future. Let's explore the tapestry of our story together! </p>
     
     <div className='flex gap-2 py-5 pl-6'>
      <div>
      <img src='/image/highRise2.jpg' className='h-[250px] w-[150px]'/>
      </div>
      <div>
      <img src='/image/highRise1.jpg' className='h-[250px] w-[150px]'/>
      </div >
      </div>
      

        <p className='justify-center text-center text-2xl'>Narrative transcends time, seamlessly intertwining our past, our present, and the dreams that shimmer on the horizon of our future. Each thread tells a story-a tale of perseverance, of growth, and of the relentless pursuit of our aspirations.</p>
    </div>
    
    <div className='border-r-2 border-black pr-6'>
        <div>
          <img src='/image/camera.jpg' alt='camera' className='h-[450px] w-96 pt-5'/>
        </div>
        <p className='justify-center text-center text-5xl font-bold pt-5'>Different categories or sections. A search bar also find it's place here, enabling user to quickly find specific content.</p>

    </div>
    <div className='pl-4 ml-2 w-80'>
      <h2 className='capitalize text-6xl justify-center text-center font-semibold  mt-2 pt-2 '>our story</h2>
      <p className='justify-center text-center m-auto text-2xl pt-0 pb-2 '>make a meaningful impact in the digital landscape. </p>
      <div className='bg-black h-[400px] w-[300px] pt-2 '>
      <span className='text-yellow-600   m-auto mt-8 ml-10 font-semibold text-xl'></span>
      <p className=" text-white text-3xl">{historicalData.date}</p>
      <p className='text-white text-5xl mt-6 mx-8 font-bold justify-center text-start'>Exploring the Unique Container Home Design</p>
      <p className='text-white text-xl font-semibold mx-8 mt-0 pt-6'>Integrates sustainable features, smart technology, and minimalist aesthetics for a truly mordern lifestyle.</p>
      </div>
      <p className='text-2xl m-auto mr-3 justify-center text-center pl-2 pt-2'>Prompting users to dive deeper into the highlighted post. The content section follows, presenting blog posts either in a chronological order or organized into categorized grids, each post accompanied by titles, images and brief descriptions to entice further exploration.</p>
      

    </div>
   





    </section>

<div className='flex justify-between capitalize pt-32 w-[1100px] ml-[140px] '>

  <div>
    <h2 className='font-extrabold text-4xl'>our authors</h2>
  </div>
  <div className=''>
  <span className='bg-slate-950 text-white font-semibold text-2xl px-12 py-4 hover:bg-purple-500 hover:transition-all'>view blog</span>
  </div>
</div>

<section className='flex w-[1100px] ml-[140px] justify-between mt-10'>

<section className='text-center border-2 border-black hover:bg-purple-200 mr-5  '>
 <div className='inline-block overflow-hidden hover:scale-105 duration-500 transition-transform'>
  <img src='/image/adebare6.jpg' alt='adebare' className=' h-[320px] w-[600px] px-8 py-2 mt-4  '/>
  </div>
<h3 className='text-3xl font-semibold pt-3'>Adebare</h3>
<h4 className='text-2xl text-pretty pb-3'>Digital Engineer</h4>
<p className='text-xl text-center mx-10'>The vibrant tapestry of this dynamic city. As a devoted local with an insatiable curiosity for Jacksonville's hidden gems and bustling scenes, I'm here to unravel its stories, share its secrets, and explore its nooks and crannies with you.</p>
</section>

<section className='text-center border-2 border-black hover:bg-purple-200 mr-5 ml-3 hover:transition-all'>
  <img src='/image/adebare3.jpg' alt='adebare' className='h-[320px] w-[600px] px-8 py-2 mt-4 hover:scale-105 duration-500'/>
<h3 className='text-3xl font-semibold pt-3'>Adebare</h3>
<h4 className='text-2xl text-pretty pb-3'>Digital Creator</h4>
<p className='text-xl text-center mx-10'>I am your go-to source for everything this dynamic city has to offer. From hidden gems in historic neighbourhoods to the trendiest eateries in town, I am passionate about uncovering the pulse of Atlanta's culture and sharing it with you.</p>
</section>

<section className='text-center border-2 border-black ml-3 hover:bg-purple-200 hover:transition-all'>
<img src='/image/adebare7.jpg' alt='adebare' className='h-[320px] w-[600px] px-8 py-2 mt-4 hover:scale-105 duration-500'/>
<h3 className='text-3xl font-semibold pt-3'>Adebare</h3>
<h4 className='text-2xl text-pretty pb-3'>Web Designer</h4>
<p className='text-xl text-center mx-10'>The heart of artistic expression, offering readers a kaleidoscopic view of the world through her words. From gallery openings to obscure street art, Charlotte's keen eye and articulate prose promise to captivate and inspire.</p>
</section>

</section>

<section className='flex w-[740px] ml-[130px] pt-10 gap-5'>
<section className='text-center border-2 border-black ml-3  hover:bg-purple-200 hover:transition-all'>
<img src='/image/adebare7.jpg' alt='adebare' className='h-[320px] w-[650px] px-8 py-2 mt-4 hover:scale-105 duration-500'/>
<h3 className='text-3xl font-semibold pt-3'>Adebare</h3>
<h4 className='text-2xl text-pretty pb-3'>Developer</h4>
<p className='text-xl text-center mx-10'>Capture the essence of Louisville. Let's embark on a journey together, delving into the heart of Derby City and discovering its unique charm, history, and everything that makes Louisville an extraordinary place to explore and call home.</p>
</section>

<section className='text-center border-2 border-black ml-3 hover:bg-purple-200 hover:transition-all'>
<img src='/image/adebare3.jpg' alt='adebare' className='h-[320px] w-[650px] px-8 py-2 mt-4 hover:scale-105 duration-500'/>
<h3 className='text-3xl font-semibold pt-3'>Adebare</h3>
<h4 className='text-2xl text-pretty pb-3'>Marketing Specialist</h4>
<p className='text-xl text-center mx-10'>I am your go-to source for everything this dynamic city has to offer. From hidden gems in historic neighbourhoods to the trendiest eateries in town, I am passionate about uncovering the pulse of Atlanta's culture and sharing it with you.</p>
</section>
  
</section >

<div className='pt-40'>
  <img src="/image/painting.jpg" alt="painting" className='h-[300px] w-[1500px]' />
</div>

<div className='ml-[140px] mt-28 capitalize'>
  <h2 className='text-4xl font-extrabold'>All posts</h2>
</div>

<div>

<div className='grid grid-cols-3 grid-rows-3 gap-4 text-start ml-[160px] w-[1000px] mt-10'>
  {historicalData.map(historicalData=>(

  <section key={historicalData.id}>

  

  <div  className=" grid grid-rows-2  hover:bg-purple-200  p-4 border-2 border-black">

    <div>
      <img src={`/image/${historicalData.title.split(' ').join('-')}.jpg`} height='400' alt={historicalData.title}
      className='h-[200px] w-[285px] absolute mt-8 border-2 border-black'/>

    </div>
    <span className='text-2xl font-bold capitalize bg-black text-white w-[50%] relative  flex justify-end text-center pr-5 ml-[140px]'>{historicalData.category}</span>
    <p className=' mt-[200px] text-2xl'>{historicalData.date}</p>
    <p className='text-3xl font-bold'>{historicalData.title} </p>
    <p className='text-xl'>{historicalData.description[1]}</p>
    
  </div>

  <div>
    
  </div>

</section>

))}
</div>
</div>


{/* <section className='flex w-[1100px] ml-[140px] mt-6'>

<div className='border-2 border-black py-7 px-4 text-start pt-10 w-[950px]' >
  <div className='border-2 border-black flex justify-end text-end  mx-6'>
    <span className='absolute bg-black text-white z-10 px-5 text-2xl py-1'>Agency</span>
    <img src='/image/adebare3.jpg'alt='adebare' className='h-[220px] w-[450px] relative '/>
  </div>
  <p className='text-2xl pl-6 py-4'>February 16, 2024 · 45 min</p>
  <h2 className='text-3xl font-bold pl-6 mr-2 pb-4'>Eploring the Unique Container Home Design</h2>
  <p className='text-2xl pl-6 mr-6'>Integrates sustainable features, smart technology, and minimalist aesthetics for a truly modern lifestyle.</p>
</div>

<div className='border-2 border-black p-7 pt-10 ml-5 text-start w-[950px]' >
  <div className=' flex justify-end text-end mx-2'>
    <span  className='absolute bg-black text-white z-10 px-5 py-1 text-2xl'>Agency</span>
    <img src='/image/adebare6.jpg' alt='adebare'className='h-[220px] w-[440px] border-2 border-black relative' />
  </div>
  <p className='text-2xl pl-2 py-4'>February 19, 2024 · 45 min</p>
  <h2 className='text-4xl pl-3 font-bold'>Mastering Modern Market Strategies</h2>
  <p className='text-2xl pl-2 mr-6 pt-3'>Marketing strategies, providing key insights to excel in the competitive business sphere.</p>
</div>

<div className='border-2 border-black  p-7 ml-6 text-start pt-10 '>
  <div className='flex justify-end text-end mx-6'>
    <span className='absolute bg-black text-white z-10 px-5 text-2xl py-1'>Lifestyle</span>
    <img src='/image/adebare7.jpg' alt='adebare' className='h-[220px] w-[300px] border-2 border-black relative'/>
  </div>
  <p className='text-2xl pl-6 py-4'>February 16, 2024 · 25 min</p>
  <h2 className='text-4xl pl-6 font-bold'>Tips for Crafting Compelling Email letters</h2>
  <p className='text-2xl pl-6 mr-6 pt-3'>Elevate your email game with strategies tailored to resonate with your audience and achieve your communication goals.</p>
</div>

</section>

<section className='flex w-[1100px] ml-[140px] mt-6'>
<div className='border-2 border-black py-7 px-4 text-start pt-10 w-[950px]' >
  <div className='border-2 border-black flex justify-end text-end  mx-6'>
    <span className='absolute bg-black text-white z-10 px-5 text-2xl py-1'>Hosting</span>
    <img src='/image/adebare3.jpg'alt='adebare' className='h-[220px] w-[450px] relative '/>
  </div>
  <p className='text-2xl pl-6 py-4'>February 16, 2024·12 min</p>
  <h2 className='text-3xl font-bold pl-6 mr-2 pb-4'>Commercial Interior Design Studios on the Rise</h2>
  <p className='text-2xl pl-6 mr-6'>These studios represent the vanguard of innovation, seamlessly blending functionality and aesthetics to redefine space.</p>
</div>

<div className='border-2 border-black p-7 pt-10 ml-5 text-start w-[950px]' >
  <div className=' flex justify-end text-end mx-2'>
    <span  className='absolute bg-black text-white z-10 px-5 py-1 text-2xl'>Lifestyle</span>
    <img src='/image/adebare6.jpg' alt='adebare'className='h-[220px] w-[440px] border-2 border-black relative' />
  </div>
  <p className='text-2xl pl-2 py-4'>February 19, 2024·12 min</p>
  <h2 className='text-4xl pl-3 font-bold'>Contrasting the Leading Blog Hosting Services</h2>
  <p className='text-2xl pl-2 mr-6 pt-3'>Blogging is an exciting endeavor, especially with the leading hosting services at your fingertips.</p>
</div>

<div className='border-2 border-black  p-7 ml-6 text-start pt-10 w-[950px]'>
  <div className='flex justify-end text-end mx-6'>
    <span className='absolute bg-black text-white z-10 px-5 text-2xl py-1'>Design</span>
    <img src='/image/adebare7.jpg' alt='adebare' className='h-[220px] w-[300px] border-2 border-black relative'/>
  </div>
  <p className='text-2xl pl-6 py-4'>February 16, 2024·12 min</p>
  <h2 className='text-4xl pl-6 font-bold'>Memorable Experiences: Event Marketing Strategies</h2>
  <p className='text-2xl pl-6 mr-6 pt-3'>Driving lasting connections and engagement with audiences.</p>
</div>


</section>

<section  className='flex w-[700px] ml-[115px] mt-6'>
<div className='border-2 border-black  p-7 ml-6 text-start pt-10 w-[950px]'>
  <div className='flex justify-end text-end mx-6'>
    <span className='absolute bg-black text-white z-10 px-5 text-2xl py-1'>Marketing</span>
    <img src='/image/adebare7.jpg' alt='adebare' className='h-[220px] w-[300px] border-2 border-black relative'/>
  </div>
  <p className='text-2xl pl-6 py-4'>February 19, 2024·12 min</p>
  <h2 className='text-4xl pl-6 font-bold'>Strategies for Successful business Campaigns</h2>
  <p className='text-2xl pl-6 mr-6 pt-3'>Desired outcomes, whether it's brand awareness, lead generation, or customer retention.</p>
</div>
<div className='mt-32 pl-20 w-[850px] flex justify-center' >
  <div className=' h-[200px] w-[200px] bg-slate-900 rounded-full p-7 text-white text-center justify-center text-3xl capitalize relative '>
  <span className='flex pt-10 absolute'>read all articles</span>
  <span></span>
  </div>
</div>

</section> */}

<div className='w-[1100px] ml-[140px] mt-20 absolute '>
  <img src='/image/navyBlue.jpg' alt='bluebackground' className='h-[350px] w-[1000px] absolute '/>

   
    
</div>
<div className='flex justify-start items-center relative'>
<div className='text-5xl font-bold text-white  w-[45%]  p-40 ml-16'>
    <h3 >Enjoy premium content in your inbox on a monthly basis</h3>
    </div>
    <div className='px-[70px] py-[45px] m-o mr-[320px] space-x-4 border-2 border-white flex'>
    <input type="email" placeholder='Enter your email address' className=' text-white outline-none bg-transparent' />
    <span className='  text-white px-2 py-2 text-xl bg-purple-600'>start reading</span>
    </div>
</div>










    </page>
  )
}
