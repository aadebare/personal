import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";




export default function page() {
  return (
    <page>
      <div>
      <h1 className='flex text-7xl ml-[80px] mt-8 m-auto font-bold text-center' >Let's Connect: Reach Out and Start the Conversation</h1>
      </div>

<div className='mt-8 ml-5 mr-5'>
<div style={{backgroundImage: 'url(/image/patagoniaArgentina.jpg)', height: '300px', backgroundRepeat:'round' }} ></div>

</div>
 
<div className='w-[1000px] ml-[190px] mt-24'>
  <div className='grid grid-cols-2'>
    <div className='ml-6'>
      <h2 className='text-9xl font-bold'>Let’s get in touch!</h2>
      <p className='text-2xl my-6 pr-14'>Whether you have a question about the blog, categories, authors please contact us using the form and the other information on this page.</p>
      <ul className='py-5'>
        <Link href='adebareadebiwale@gmail.com'>
        <li className='text-3xl font-semibold pb-5 flex space-x-4'><span className="border-2 border-black rounded-full p-1 mr-4 bg-black text-white h-[50px] w-[50px] items-center justify-center flex hover:bg-yellow-800"><FaEnvelopeCircleCheck /></span>aadebare@yahoo.com</li>
        </Link>
        
        <li className='text-3xl font-semibold py-5 flex'><span className="border-2 border-black rounded-full p-1 mr-4 bg-black text-white h-[50px] w-[50px] items-center justify-center flex hover:bg-yellow-800"><BsFillTelephoneFill /></span>(+234) 703 821 3144</li>
        <li className='text-3xl font-semibold py-5 flex'><span className="border-2 border-black rounded-full p-1 mr-4 bg-black text-white h-[50px] w-[50px] items-center justify-center flex hover:bg-yellow-800"><FaLocationDot /></span>16D Akin Olugbade str VI Lagos</li>
      </ul>

    </div>
    <div className='border-2 border-black   ' >
      <form className='capitalize justify-center text-start ml-14 py-24 '>
        <p className='text-7xl font-bold pb-7 '>contact us </p>

      
      <input className='text-2xl font-semibold py-6 text-black outline-none border-b-2 border-black capitalize' type="text" placeholder='your name' /><br /><br />
      <input className='text-2xl font-semibold py-6 outline-none border-b-2 border-black capitalize' type="email" name="email" id="email" placeholder='your email'/><br /><br />
      <input className='text-2xl font-semibold py-6 outline-none border-b-2 border-black capitalize' type="text" name='subject' id='subject' placeholder='subject'/><br /><br />
      <input className='text-2xl font-semibold pt-2 pb-16 outline-none border-b-2 border-black capitalize' type="text" name="text" id="text" placeholder='type your message'/><br /><br /><br />
     
      <button className='bg-slate-950 text-white text-2xl px-14 py-3 hover:bg-purple-600' type="submit">submit</button>
      </form>

    </div>
  </div>
  <div className="mt-20">
    <h2 className="text-6xl font-semibold py-3 capitalize bg-black justify-center text-center text-white">frequently asked questions</h2>
  </div>
  <div className="text-3xl font-semibold mt-16 w-[800px] ml-[100px] space-y-4 ">
    <p className="pl-6 py-6 border-2 border-black">What exactly is a blog?</p>
    <p className="pl-6 py-6 border-2 border-black">How do I start a blog?</p>
    <p className="pl-6 py-6 border-2 border-black">How often should I post on my blog?</p>
    <p className="pl-6 py-6 border-2 border-black">How can I attract more readers to my blog?</p>
    <p className="pl-6 py-6 border-2 border-black">Do I need technical skills to run a blog?</p>
  </div>
</div>









      {// Filter adventure travel titles
// const adventureTravelTitles = travels.filter(travel => travel.category === "Adventure Travel").map(travel => ({ title: travel.title }));

// Take the first three titles
// const threeAdventureTitles = adventureTravelTitles.slice(0, 3);

// console.log(threeAdventureTitles);
}

    </page>
  )

}
// const travels = [
//   {
//       id: 1,
//       title: "Exploring the Amazon Rainforest","Journey Through the Himalayas": "Trekking Across Patagonia",
//       category: "Adventure Travel",
//       author: "Jane Doe",
//       descriptions: ["Embark on an unforgettable journey deep into the heart of the Amazon rainforest.", "Discover rare species of flora and fauna while navigating the mighty Amazon River.", "Experience the thrill of camping under the starlit canopy of the world's largest tropical rainforest."],
//       date: "2024-03-15"
//   },
//   {
//       id: 2,
//       title: "Skiing in the Swiss Alps",
//       category: "Sports Travel",
//       author: "John Smith",
//       descriptions: ["Hit the slopes in one of the most breathtaking skiing destinations in the world, the Swiss Alps.", "Enjoy the adrenaline rush as you carve through pristine powder snow against the stunning backdrop of majestic peaks.", "Unwind après-ski with cozy chalets and traditional Swiss cuisine."],
//       date: "2024-02-20"
//   },
//   {
//       id: 3,
//       title: "Under the Stars: Camping in Yosemite National Park",
//       category: "Camping Travel",
//       author: "Emily Johnson",
//       descriptions: ["Escape the hustle and bustle of city life and immerse yourself in the serene beauty of Yosemite National Park.", "Pitch your tent beneath towering granite cliffs and beside tranquil alpine lakes.", "Embark on exhilarating hikes amidst ancient sequoia trees and cascading waterfalls."],
//       date: "2024-04-02"
//   },
//   {
//       id: 4,
//       title: "A Food Lover's Guide to New York City",
//       category: "Culinary Travel",
//       author: "Michael Lee",
//       descriptions: ["Indulge your taste buds in a culinary adventure through the diverse neighborhoods of New York City.", "Savor iconic dishes from around the world, from pizza in Brooklyn to dim sum in Chinatown.", "Immerse yourself in the vibrant food scene of the Big Apple, where every bite tells a story."],
//       date: "2024-01-10"
//   },
//   {
//       id: 5,
//       title: "Discovering the Hidden Gems of Barcelona",
//       category: "City Travel",
//       author: "Sophia Garcia",
//       descriptions: ["Uncover the rich history and culture of Barcelona as you wander through its enchanting streets.", "Marvel at architectural wonders like the Sagrada Família and Park Güell, masterpieces of Antoni Gaudí.", "Sample delectable tapas and sip on sangria in cozy cafes tucked away in charming squares."],
//       date: "2024-03-08"
//   }
// ];

// console.log(travels);



