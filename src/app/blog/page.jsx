import Link from "next/link";



// const travelDestinations = [
//   {
//     id: 1,
//     title: "The Colosseum, Rome" ,
//     category: "historical",
//     author: "Sophia Rodriguez",
//     description: "The Colosseum, a magnificent amphitheater in the heart of Rome, is an enduring symbol of the ancient Roman Empire's grandeur and power. Built over two millennia ago, it was the largest amphitheater ever built, capable of seating up to 80,000 spectators. This iconic landmark hosted gladiatorial contests, animal hunts, and other public spectacles, showcasing the prowess and extravagance of Roman society. Today, visitors can marvel at its towering arches and intricate stone carvings, imagining the roar of the crowd and the clash of swords that once filled its arena. A visit to the Colosseum offers a fascinating glimpse into the history and culture of ancient Rome, making it a must-see destination for history enthusiasts.",
//     date: "2023-07-21"
//   },
//   {
//     id: 2,
//     title: "Galápagos Islands",
//     category: "wild life",
//     author: "Michael Carter",
//     description: "The Galápagos Islands, located off the coast of Ecuador, are a living laboratory of evolution and biodiversity. Made famous by Charles Darwin's groundbreaking research, these volcanic islands are home to an astonishing array of unique flora and fauna found nowhere else on Earth. Visitors can observe giant tortoises, marine iguanas, blue-footed boobies, and other endemic species in their natural habitats, making it a paradise for wildlife enthusiasts and photographers. Snorkeling and diving opportunities abound, allowing travelers to swim alongside sea lions, penguins, and vibrant coral reefs. Exploring the Galápagos Islands offers a once-in-a-lifetime opportunity to witness nature's wonders and gain a deeper understanding of our planet's delicate ecosystems.",
//     date: "2023-09-10"
//   },
//   {
//     id: 3,
//     title: "Tokyo, Japan",
//     category: "city travel",
//     author: "Emily Kim",
//     description: "Tokyo, the dynamic capital of Japan, seamlessly blends tradition and innovation to create a captivating urban experience. From towering skyscrapers to serene Shinto shrines, the city offers a diverse range of attractions to explore. Visitors can wander through bustling neighborhoods like Shibuya and Shinjuku, known for their vibrant nightlife and eclectic dining scene, or experience moments of tranquility in the peaceful gardens of Meiji Shrine and Shinjuku Gyoen. Tokyo is also a paradise for tech enthusiasts and pop culture aficionados, with its futuristic architecture, quirky themed cafes, and bustling Akihabara district. Whether sampling sushi at the famed Tsukiji Fish Market or marveling at the view from the Tokyo Skytree, the city offers endless opportunities for discovery and adventure.",
//     date: "2023-04-15"
//   },
//   {
//     id: 4,
//     title: "Patagonia, Argentina",
//     category: "adventure",
//     author: "Carlos Martinez",
//     description: "Patagonia, a vast and untamed region in southern Argentina, beckons adventurers with its breathtaking landscapes and outdoor pursuits. From jagged peaks to pristine glaciers, the region offers a playground for hiking, mountaineering, and wildlife spotting. Visitors can trek through the legendary Torres del Paine National Park, marveling at its towering granite spires and turquoise lakes, or explore the remote wilderness of Tierra del Fuego, the 'Land of Fire.' Patagonia also boasts world-class fly fishing, kayaking, and horseback riding opportunities, allowing travelers to immerse themselves in the region's natural beauty and rugged charm. Whether scaling a snow-capped peak or gazing upon a calving glacier, a journey to Patagonia is sure to ignite the spirit of adventure.",
//     date: "2023-11-05"
//   },
//   {
//     id: 5,
//     title: "Maui, Hawaii",
//     category: "island getaway",
//     author: "Amanda Thompson",
//     description: "Maui, the second-largest Hawaiian island, is a paradise of sun, surf, and stunning natural beauty. With its golden beaches, lush rainforests, and volcanic landscapes, it offers endless opportunities for relaxation and adventure. Visitors can snorkel alongside sea turtles in the crystal-clear waters of Molokini Crater, hike through the verdant valleys of the Hana Rainforest, or witness the fiery spectacle of sunrise atop Haleakalā, the island's dormant volcano. Maui is also renowned for its vibrant culture and hospitality, with traditional luaus, ukulele music, and lei-making workshops providing a taste of Hawaiian life. Whether lounging on the beach or exploring hidden waterfalls, Maui offers a tropical escape like no other.",
//     date: "2023-06-30"
//   },
//   {
//     id: 6,
//     title: "Florence, Italy",
//     category: "cultural",
//     author: "Giulia Bianchi",
//     description: "Florence, the birthplace of the Renaissance, is a treasure trove of art, architecture, and cultural heritage. From the iconic Duomo to the world-renowned Uffizi Gallery, the city's streets are lined with masterpieces at every turn. Visitors can wander through the historic center, a UNESCO World Heritage site, marveling at landmarks such as the Ponte Vecchio and Palazzo Vecchio, or explore the charming neighborhoods of Oltrarno and San Frediano. Florence is also a culinary delight, with trattorias and gelaterias serving up traditional Tuscan fare alongside modern gastronomic innovations. Whether admiring Michelangelo's David or savoring a plate of fresh pasta, Florence captivates the senses and inspires the soul.",
//     date: "2023-08-12"
//   },
//   {
//     id: 7,
//     title: "Kruger National Park",
//     category: "safari",
//     author: "David Johnson",
//     description: "Kruger National Park, located in South Africa, is one of the largest game reserves on the continent, renowned for its diverse wildlife and pristine wilderness. Spanning over 19,000 square kilometers, it is home to the Big Five – lions, elephants, buffaloes, leopards, and rhinoceroses – as well as hundreds of other species. Visitors can embark on thrilling game drives, guided bush walks, and sunset safaris to encounter these majestic animals in their natural habitat. The park's varied landscapes, from savannahs to forests, offer a rich tapestry of habitats to explore, while luxury lodges and camps provide a comfortable base for adventure. Whether tracking lions on the prowl or witnessing a herd of elephants at a watering hole, Kruger National Park offers an unforgettable safari experience.",
//     date: "2023-10-25"
//   },
//   {
//     id: 8,
//     title: "Tokyo, Japan",
//     category: "business travel",
//     author: "Alexandra Chen",
//     description: "Tokyo, Japan's bustling capital, is not only a vibrant cultural hub but also a major center for business and commerce in the Asia-Pacific region. Boasting a dynamic economy and cutting-edge technology, the city attracts business travelers from around the world for conferences, meetings, and trade events. From the towering skyscrapers of Shinjuku to the bustling business districts of Marunouchi and Roppongi, Tokyo offers a wealth of modern amenities and state-of-the-art facilities for corporate travelers. With its efficient transportation network, world-class hotels, and international cuisine, Tokyo provides a seamless experience for conducting business in a globalized world.",
//     date: "2023-02-28"
//   },
//   {
//     id: 9,
//     title: "Swiss Alps",
//     category: "mountain tourism",
//     author: "Elena Müller",
//     description: "The Swiss Alps, with their majestic peaks and pristine landscapes, are a paradise for mountain enthusiasts and outdoor adventurers. From skiing and snowboarding in winter to hiking and mountaineering in summer, the region offers endless opportunities for adrenaline-fueled thrills and breathtaking scenery. Visitors can traverse scenic alpine trails, ascend towering summits, or embark on scenic train journeys like the Glacier Express, soaking in panoramic views of snow-capped peaks and shimmering lakes. Charming alpine villages dot the landscape, offering cozy chalets, hearty cuisine, and warm hospitality to weary travelers. Whether seeking adventure or relaxation, the Swiss Alps offer an unforgettable mountain experience for all.",
//     date: "2023-03-18"
//   },
//   {
//     id: 10,
//     title: "Caribbean Cruise",
//     category: "cruises",
//     author: "Christopher Roberts",
//     description: "A Caribbean cruise is the ultimate escape, offering sun-soaked beaches, turquoise waters, and exotic ports of call. Setting sail from tropical hubs like Miami or Fort Lauderdale, passengers can embark on a voyage of discovery through the idyllic islands of the Caribbean Sea. From the vibrant streets of Old San Juan to the lush rainforests of St. Lucia, each port offers its own unique blend of culture, history, and natural beauty. Onboard amenities abound, from gourmet dining and live entertainment to spas, pools, and casinos, ensuring a luxurious and relaxing experience at sea. Whether snorkeling in crystal-clear waters, exploring ancient ruins, or simply lounging on deck with a cocktail in hand, a Caribbean cruise promises memories to last a lifetime.",
//     date: "2023-12-08"
//   },
//   {
//     id: 11,
//     title: "Wimbledon, London",
//     category: "sports",
//     author: "James Wilson",
//     description: "Wimbledon, the oldest and most prestigious tennis tournament in the world, is a highlight of the sporting calendar and a pilgrimage for tennis enthusiasts. Held annually in London, this Grand Slam event attracts top players from around the globe to compete for the coveted championship titles. Spectators flock to the All England Club to witness the drama and excitement unfold on the hallowed grass courts, cheering on their favorite players and soaking in the atmosphere of this historic event. From strawberries and cream to the iconic white attire, Wimbledon embodies the elegance and tradition of tennis at its finest, making it a must-see for sports fans and aficionados alike.",
//     date: "2023-07-02"
//   },
//   {
//     id: 12,
//     title: "Dubai Mall, UAE",
//     category: "shopping tourism",
//     author: "Fatima Ali",
//     description: "Dubai Mall, situated in the heart of downtown Dubai, is a shopper's paradise and one of the largest malls in the world. Boasting over 1,200 retail outlets, including high-end designer boutiques, luxury brands, and international chains, it offers something for every taste and budget. In addition to shopping, visitors can enjoy a host of entertainment options, from indoor ice skating and a giant aquarium to an immersive virtual reality park and an indoor theme park. The mall's sprawling layout and opulent decor create a sensory feast for the eyes, while its diverse dining scene caters to every palate, from gourmet cuisine to fast food favorites. Whether indulging in retail therapy or simply exploring its myriad attractions, Dubai Mall promises an unforgettable shopping experience.",
//     date: "2023-05-17"
//   },
//   {
//     id: 13,
//     title: "Yellowstone National Park",
//     category: "camping",
//     author: "Ryan Johnson",
//     description: "Yellowstone National Park, America's first and most iconic national park, is a pristine wilderness teeming with natural wonders and outdoor adventures. Spanning over 3,400 square miles across Wyoming, Montana, and Idaho, it is home to majestic mountains, gushing geysers, and abundant wildlife. Visitors can explore a network of hiking trails, camp under the stars, or marvel at the colorful hot springs and erupting geysers that dot the landscape. The park's diverse ecosystems, from alpine meadows to deep canyons, provide habitat for a wide range of species, including grizzly bears, bison, and wolves. Whether pitching a tent in one of its rustic campgrounds or embarking on a backcountry adventure, Yellowstone offers an immersive wilderness experience like no other.",
//     date: "2023-08-30"
//   },
//   {
//     id: 14,
//     title: "Santorini, Greece",
//     category: "domestic tourism",
//     author: "Sophie Papadopoulos",
//     description: "Santorini, with its iconic whitewashed buildings, azure-domed churches, and breathtaking sunsets, is a picture-perfect destination that epitomizes the beauty of the Greek islands. Perched atop rugged cliffs overlooking the Aegean Sea, its villages offer a glimpse into a bygone era of traditional Cycladic architecture and timeless charm. Visitors can wander through the narrow streets of Oia, admiring its stunning vistas and quaint boutiques, or relax on the black sand beaches of Kamari and Perissa. Santorini is also a haven for food and wine lovers, with its local delicacies, seafood tavernas, and scenic vineyards offering a taste of authentic Greek cuisine. Whether exploring ancient ruins, sailing around volcanic calderas, or simply soaking in the island's laid-back vibe, Santorini captivates the imagination and steals the heart.",
//     date: "2023-06-12"
//   }
// ];

// console.log(travelDestinations);


// export default function() {
//   return (
//     <div>
//       <div className="py-6">
//         <h1 className="py-6">some text in here</h1>

//       <div style={{backgroundImage: 'url(/image/airPlane1.jpg)',height: '300px'}}>

//       </div>
//       </div>


//     <div  >
//     <div className="grid grid-cols-3 grid-rows-5 gap-4 p-0 text-start items-start ml-[140px] w-[1100px] ">
//       {travelDestinations.map(travelDestination =>(
        
        
//         <section key={travelDestination.id} >
          
//           <h1 className="text-4xl font-bold">{travelDestination.title} </h1>
        
          

          
//           <div className=" grid grid-rows-2    p-4 border-2 border-black">
          
//           <div>
//             <img src={`/image/${travelDestination.category.split(' ').join('-')}.jpg`} height='400'  alt={travelDestination.title} 
//             className="h-[200px] w-[300px] absolute  mt-8 "/>"
            
//           </div>
//           <span className=" text-2xl font-bold capitalize relative bg-black text-white w-[50%] flex justify-end text-center mt-[0px] pr-5 ml-[140px]  ">{travelDestination.category}</span>
//           <p className="pt-80">{travelDestination.description}</p>
//           <p >{travelDestination.date}</p>

//           </div>


//           </section>
//       ))}
//     </div>
   
//     </div>
//      </div>

   
//   )
// }






export const historicalData = [
  {
    id: 1,
    title: "The Ancient Ruins of Machu Picchu",
    category: "historical",
    description: [
      "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.",
      "Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest.",
    ],
    date: "2024-04-23",
    author: "Hiram Bingham"
  },
  {
    id: 2,
    title: "The Renaissance Era. A Journey Through Time",
    category: "historical",
    description: [
      "The Renaissance was a period in European history marking the transition from the Middle Ages to modernity and covering the 15th and 16th centuries. It was characterized by a renewed interest in ancient Greek and Roman art, literature, and culture, as well as advancements in science, technology, and exploration.",
      "During the Renaissance, there was a flourishing of art, with masterpieces created by renowned artists such as Leonardo da Vinci, Michelangelo, and Raphael. The era also saw the rise of humanism, an intellectual movement that focused on the study of classical texts and the potential of human beings.",
      "One of the defining features of the Renaissance was the invention of the printing press by Johannes Gutenberg in the 15th century, which revolutionized the spread of knowledge and ideas across Europe. This led to an increase in literacy rates and the dissemination of new scientific and philosophical concepts.",
      "The Renaissance also saw significant developments in science and exploration. The period was marked by the voyages of discovery, including those of Christopher Columbus, Vasco da Gama, and Ferdinand Magellan, which expanded European knowledge of the world and led to the colonization of the Americas, Africa, and Asia.",
      "Overall, the Renaissance was a time of great innovation and cultural achievement, laying the foundations for the modern world. Its impact can still be felt today in art, literature, science, and philosophy."
    ],
    date: "2024-04-23",
    author: "Various Renaissance Scholars"
  },
  {
    id: 3,
    title: "World War II. Stories of Bravery and Sacrifice",
    category: "historical",
    description: [
      "World War II, also known as the Second World War, was a global conflict that lasted from 1939 to 1945. It involved the vast majority of the world's nations, including all of the great powers, organized into two opposing military alliances: the Allies and the Axis powers.",
      "The war is considered one of the deadliest conflicts in human history, with an estimated 70 to 85 million fatalities, including civilians and military personnel. It was characterized by widespread destruction and suffering, as well as atrocities such as the Holocaust, in which six million Jews were systematically murdered by the Nazi regime.",
      "World War II saw the use of new technologies and tactics, including air power, naval warfare, and mechanized warfare. It also witnessed significant advances in medicine, communication, and intelligence gathering.",
      "One of the key turning points in the war was the Allied invasion of Normandy on June 6, 1944, commonly known as D-Day. This operation marked the beginning of the liberation of Western Europe from Nazi control and ultimately led to the defeat of Germany.",
      "Throughout the war, countless acts of bravery and sacrifice were performed by individuals from all walks of life. From soldiers on the front lines to resistance fighters and civilians, people showed incredible courage in the face of adversity, often risking their lives to help others.",
      "Today, the legacy of World War II serves as a reminder of the importance of standing up against tyranny and oppression, and the need for international cooperation to prevent such conflicts from happening again."
    ],
    date: "2024-04-23",
    author: "Various Historians"
  },
    {
      id: 1,
      title: "Safari Adventure. Discovering Africa's Wildlife",
      category: "wildlife",
      description: [
        "Embark on an unforgettable journey into the heart of Africa's wilderness, where majestic creatures roam free and landscapes are painted with vibrant colors. A safari adventure offers a unique opportunity to witness some of the world's most iconic wildlife in their natural habitat.",
        "As you traverse the savannas of Kenya or the plains of Tanzania, you'll encounter a diverse array of species, from the towering giraffes and graceful elephants to the elusive big cats like lions, leopards, and cheetahs. Each day brings new encounters and awe-inspiring moments as you observe these magnificent animals up close.",
        "But it's not just about the big game. Africa's wildlife is incredibly diverse, with a plethora of bird species, reptiles, and smaller mammals waiting to be discovered. From colorful kingfishers and majestic eagles soaring overhead to playful vervet monkeys and curious meerkats, every creature plays a vital role in the delicate ecosystem.",
        "Your safari experience will be guided by knowledgeable rangers and trackers who will share their expertise and insights into the behavior and habitats of the animals you encounter. Whether you're exploring the vast plains of the Serengeti or the lush jungles of Uganda, each destination offers its own unique wildlife experience.",
        "But beyond the thrill of spotting wildlife, a safari adventure is also a journey of discovery and conservation. By supporting responsible tourism practices and wildlife conservation efforts, you can help protect these incredible creatures and their habitats for future generations to enjoy.",
        "So pack your bags, grab your binoculars, and get ready for the adventure of a lifetime as you embark on a safari to discover Africa's wildlife wonders."
      ],
      date: "2024-04-23",
      author: "Wildlife Enthusiast"
    },
    {
      id: 2,
      title: "The Majesty of the Amazon Rainforest",
      category: "wildlife",
      description: [
        "Step into the breathtaking world of the Amazon rainforest, the largest and most biodiverse tropical rainforest on the planet. Spanning nine countries across South America, this vast expanse of wilderness is home to an astonishing array of plant and animal species, many of which are found nowhere else on Earth.",
        "As you journey deep into the heart of the Amazon, you'll be immersed in a vibrant tapestry of life, where towering trees reach for the sky and lush vegetation carpets the forest floor. It's a world teeming with life, from colorful butterflies flitting among the flowers to elusive jaguars prowling through the undergrowth.",
        "But perhaps the most iconic inhabitants of the Amazon are its birds. With over 1,500 bird species calling the rainforest home, it's a birdwatcher's paradise, where you can spot everything from toucans and macaws to parrots and hummingbirds. And as dawn breaks over the forest canopy, the air is filled with the melodious calls of countless species, creating a symphony of sound.",
        "Of course, no visit to the Amazon would be complete without encountering its most famous residents: the primates. From playful monkeys swinging through the trees to solitary orangutans and social gorillas, the rainforest is alive with the sights and sounds of these fascinating creatures.",
        "But the Amazon is not just a haven for wildlife; it's also a vital ecosystem that plays a crucial role in regulating the Earth's climate and providing essential services to millions of people. By exploring this incredible wilderness and supporting conservation efforts, you can help ensure that the Amazon and its inhabitants thrive for generations to come.",
        "So come and experience the majesty of the Amazon rainforest, where every moment is an adventure and every encounter is a reminder of the beauty and wonder of the natural world."
      ],
      date: "2024-04-23",
      author: "Amazon Explorer"
    },
    {
      id: 3,
      title: "Arctic Wildlife. Surviving in the Frozen North",
      category: "wildlife",
      description: [
        "Welcome to the Arctic, a land of ice and snow where only the hardiest of creatures can survive. Despite its harsh conditions, the Arctic is home to a surprising diversity of wildlife, from iconic polar bears and majestic walruses to elusive Arctic foxes and nimble reindeer.",
        "As you journey across the frozen tundra and icy seas, you'll witness the incredible adaptations that allow these animals to thrive in one of the harshest environments on Earth. From thick layers of blubber to insulating fur and specialized hunting techniques, each species has evolved unique strategies for survival.",
        "One of the most iconic residents of the Arctic is the polar bear, the largest land predator on the planet. With its thick fur and powerful limbs, the polar bear is perfectly adapted to life on the ice, where it spends much of its time hunting for seals and other prey. But as climate change accelerates and sea ice melts, polar bears face an uncertain future, making them a symbol of the urgent need for conservation.",
        "But the Arctic is not just home to large mammals; it's also a vital breeding ground for millions of seabirds, including puffins, guillemots, and kittiwakes. These birds travel thousands of miles to nest and raise their young in the safety of the Arctic summer, where food is abundant and predators are few.",
        "As you explore the Arctic wilderness, you'll gain a deeper appreciation for the resilience of its inhabitants and the fragile balance of this unique ecosystem. By supporting efforts to protect the Arctic and mitigate the impacts of climate change, you can help ensure that future generations will continue to marvel at its beauty and diversity.",
        "So bundle up and prepare for an adventure like no other as you journey into the frozen north to discover the incredible wildlife of the Arctic."
      ],
      date: "2024-04-23",
      author: "Arctic Wildlife Specialist"
    },
    {
      id: 1,
      title: "Trekking Through the Himalayas. An Epic Adventure",
      category: "adventure",
      description: [
        "Embark on a once-in-a-lifetime journey through the majestic Himalayas, where towering peaks and breathtaking landscapes await at every turn. Trekking in the Himalayas offers an unparalleled adventure experience, as you traverse rugged terrain, cross high mountain passes, and explore remote villages nestled amidst the clouds.",
        "As you trek through the Himalayan foothills, you'll be surrounded by stunning natural beauty, from lush forests and cascading waterfalls to snow-capped peaks and pristine alpine meadows. Along the way, you'll encounter a rich tapestry of cultures and traditions, as you meet friendly locals and learn about their way of life.",
        "But the real highlight of any Himalayan trek is reaching the summit of a towering peak, where you'll be rewarded with panoramic views that will take your breath away. Whether it's the iconic Everest Base Camp trek or the lesser-known Annapurna Circuit, each trail offers its own unique challenges and rewards.",
        "Of course, trekking in the Himalayas is not for the faint of heart. The high altitude, rugged terrain, and unpredictable weather can pose significant challenges, requiring careful planning, physical fitness, and mental resilience. But for those who are willing to take on the adventure, the rewards are truly unmatched.",
        "So pack your bags, lace up your hiking boots, and get ready for the adventure of a lifetime as you embark on a trekking expedition through the awe-inspiring landscapes of the Himalayas."
      ],
      date: "2024-04-23",
      author: "Mountain Explorer"
    },
    {
      id: 2,
      title: "Skydiving Over the Grand Canyon",
      category: "adventure",
      description: [
        "Experience the ultimate adrenaline rush as you freefall through the skies above the majestic Grand Canyon. Skydiving over the Grand Canyon is a thrilling adventure that offers unparalleled views of one of the world's most iconic natural wonders.",
        "As you leap from the plane and hurtle towards the earth at speeds of up to 120 miles per hour, you'll feel an exhilarating rush of adrenaline unlike anything else. The wind rushes past your ears as you plummet towards the canyon floor, your heart pounding in your chest with excitement.",
        "But the real magic happens when you deploy your parachute and begin to float gently downwards, taking in the breathtaking scenery below. From the towering cliffs and rugged canyons to the meandering rivers and sprawling forests, the Grand Canyon is a sight to behold from above.",
        "As you glide through the air, you'll feel a sense of freedom and exhilaration unlike anything else. It's a moment of pure bliss as you soak in the beauty of the landscape and marvel at the sheer magnitude of the canyon below.",
        "Whether you're a seasoned skydiver or a first-time thrill-seeker, skydiving over the Grand Canyon is an adventure you'll never forget. So strap on your parachute, take a deep breath, and prepare for the ride of a lifetime as you soar through the skies above one of nature's greatest masterpieces."
      ],
      date: "2024-04-23",
      author: "Skydiving Enthusiast"
    },
    {
      id: 3,
      title: "Exploring the Depths. Scuba Diving in the Coral Reefs",
      category: "adventure",
      description: [
        "Dive into a world of wonder and discovery as you explore the vibrant coral reefs teeming with life beneath the ocean's surface. Scuba diving in the coral reefs is an adventure like no other, offering a glimpse into a breathtaking underwater realm filled with colorful marine life and dazzling coral formations.",
        "As you descend into the depths, you'll be surrounded by a kaleidoscope of colors, from the brilliant blues and greens of the ocean to the vibrant hues of the coral reefs. Everywhere you look, you'll see fish of every shape and size darting among the corals, while rays glide gracefully overhead and turtles lazily paddle by.",
        "But it's not just about the marine life; the coral reefs themselves are a sight to behold, with intricate formations and delicate structures that provide a home for countless species. From towering pillars of coral to intricate labyrinths of caves and tunnels, each reef is a unique ecosystem waiting to be explored.",
        "As you drift along with the currents, you'll feel a sense of peace and tranquility unlike anything else. It's a world away from the hustle and bustle of everyday life, where time seems to stand still and every moment is filled with wonder and awe.",
        "Whether you're a seasoned diver or a novice explorer, scuba diving in the coral reefs is an adventure that will stay with you long after you return to the surface. So grab your gear, take a deep breath, and prepare for an underwater adventure of a lifetime."
      ],
      date: "2024-04-23",
      author: "Ocean Explorer"
    },
    {
      id: 1,
      title: "Cultural Immersion. Exploring Traditional Practices",
      category: "cultural",
      description: [
        "Embark on a journey of cultural immersion as you explore the rich tapestry of traditions and practices that define communities around the world. From ancient rituals and ceremonies to modern customs and celebrations, cultural immersion offers a unique opportunity to gain insight into the diverse ways of life that exist across the globe.",
        "As you travel to distant lands and immerse yourself in local culture, you'll have the chance to participate in traditional activities, learn from local artisans and craftspeople, and engage with community members to gain a deeper understanding of their customs and beliefs.",
        "Whether it's learning the art of traditional dance in the streets of Rio de Janeiro, sampling regional cuisines at a bustling night market in Bangkok, or taking part in a sacred ceremony with indigenous elders in the Australian Outback, each experience will leave you with a newfound appreciation for the beauty and complexity of human culture.",
        "But cultural immersion is not just about experiencing the sights and sounds of a place; it's also about forging meaningful connections with the people you meet along the way. By sharing stories, exchanging ideas, and building relationships, you'll form lasting bonds that transcend language and borders.",
        "So pack your bags, open your heart, and prepare for the adventure of a lifetime as you embark on a journey of cultural immersion that will broaden your horizons, challenge your perspectives, and inspire you to embrace the diversity of the world."
      ],
      date: "2024-04-23",
      author: "Cultural Enthusiast"
    },
    {
      id: 2,
      title: "Festivals Around the World. Celebrating Diversity",
      category: "cultural",
      description: [
        "Experience the joy and vibrancy of festivals around the world as you celebrate the diverse cultures and traditions that make our planet so unique. From colorful parades and lively music to traditional dances and delicious cuisine, festivals offer a glimpse into the heart and soul of communities across the globe.",
        "Whether it's the exuberant carnival celebrations in Rio de Janeiro, the mesmerizing lantern festivals in Japan, or the spectacular Diwali festivities in India, each festival is a reflection of the rich heritage and identity of its host culture.",
        "But festivals are more than just joyful gatherings; they're also an opportunity to come together as a community, to share stories and laughter, and to forge connections that transcend language and borders. From the streets of New Orleans during Mardi Gras to the mountains of Switzerland during Oktoberfest, festivals bring people from all walks of life together in celebration of our shared humanity.",
        "As you travel the world and experience different festivals, you'll be inspired by the creativity, resilience, and spirit of the people you meet along the way. Whether it's the elaborate costumes of Carnival in Venice or the intricate rituals of the Day of the Dead in Mexico, each festival will leave you with a deeper appreciation for the beauty and diversity of human culture.",
        "So join the celebration, embrace the joy, and immerse yourself in the sights, sounds, and flavors of festivals around the world. Because no matter where you go, there's always a reason to celebrate."
      ],
      date: "2024-04-23",
      author: "Festival Enthusiast"
    },
    {
      id: 3,
      title: "The Art and Cuisine of Italy. A Cultural Exploration",
      category: "cultural",
      description: [
        "Journey to the heart of Italy and immerse yourself in the rich tapestry of art, history, and cuisine that defines this iconic Mediterranean nation. From the Renaissance masterpieces of Florence and the ancient ruins of Rome to the rolling vineyards of Tuscany and the picturesque canals of Venice, Italy is a treasure trove of cultural delights waiting to be discovered.",
        "But it's not just the landmarks and attractions that make Italy so special; it's also the people and their passion for food, art, and life. Whether you're savoring a traditional Italian meal in a rustic trattoria, admiring the works of Michelangelo and da Vinci in a world-class museum, or simply strolling through a charming piazza, you'll be captivated by the beauty and charm of this enchanting country.",
        "And let's not forget about the food! Italian cuisine is renowned the world over for its bold flavors, fresh ingredients, and hearty dishes. From creamy risottos and homemade pasta to crispy pizzas and decadent gelato, every meal is a celebration of the culinary arts, a testament to the Italian commitment to quality and tradition.",
        "But perhaps the greatest gift of all is the sense of la dolce vita, the sweet life, that permeates every aspect of Italian culture. It's the joy of sharing a meal with family and friends, the warmth of a sun-drenched afternoon spent sipping wine in a vineyard, and the simple pleasure of taking a leisurely passeggiata through the streets of a charming village.",
        "So come and experience the magic of Italy for yourself, where every moment is a celebration of art, food, and life. Because in Italy, the beauty is in the details, and the joy is in the journey."
      ],
      date: "2024-04-23",
      author: "Italian Culture Enthusiast"
    },
    {
      id: 1,
      title: "Exploring the Great Outdoors. A Camping Adventure",
      category: "camping",
      description: [
        "Embark on an unforgettable journey into the great outdoors as you immerse yourself in the beauty and serenity of nature. Camping is more than just a recreational activity; it's a way of life, a chance to disconnect from the hustle and bustle of modern life and reconnect with the natural world.",
        "As you pitch your tent beneath the stars and gather around the campfire with friends and family, you'll experience a sense of peace and tranquility that can only be found in the wilderness. Whether you're nestled in the towering pines of a forest campground or perched on the shores of a crystal-clear lake, each campsite offers its own unique charm and beauty.",
        "But camping is not just about relaxation; it's also about adventure. From hiking and fishing to kayaking and stargazing, there's no shortage of outdoor activities to enjoy. Whether you're exploring scenic trails, casting a line into a mountain stream, or watching shooting stars streak across the night sky, every moment spent in nature is a moment to treasure.",
        "And let's not forget about the food! There's something magical about cooking over an open flame, whether it's roasting marshmallows for s'mores, grilling up burgers and hot dogs, or simmering a pot of hearty stew. And the best part? Everything tastes better when enjoyed in the great outdoors.",
        "So pack your gear, lace up your hiking boots, and get ready for the adventure of a lifetime as you embark on a camping trip to explore the beauty and wonder of the natural world."
      ],
      date: "2024-04-23",
      author: "Outdoor Enthusiast"
    },
    {
      id: 2,
      title: "Camping Under the Starlit Sky",
      category: "camping",
      description: [
        "Escape the city lights and embrace the magic of camping under a starlit sky, where the universe unfolds in all its splendor above you. There's nothing quite like falling asleep to the sound of crickets chirping and waking up to the gentle glow of the morning sun filtering through the trees.",
        "Camping under the stars offers a chance to reconnect with the natural rhythms of the Earth and rediscover the wonder of the cosmos. Whether you're gazing up at a blanket of twinkling stars or marveling at the brilliance of the Milky Way stretching across the night sky, each moment spent stargazing is a moment of awe and inspiration.",
        "But camping isn't just about the stars above; it's also about the beauty of the natural world that surrounds you. From the rustling of leaves in the breeze to the scent of pine needles in the air, every sensory experience is heightened when you're immersed in nature.",
        "And let's not forget about the campfire! There's something magical about gathering around a crackling fire with friends and family, sharing stories, roasting marshmallows, and enjoying the warmth of the flames dancing in the darkness.",
        "So pack your tent, grab your sleeping bag, and escape to the great outdoors for a camping adventure under the starlit sky. Because in the quiet of the wilderness, beneath the vast expanse of the universe, you'll find peace, wonder, and a sense of connection that can only be found in nature."
      ],
      date: "2024-04-23",
      author: "Stargazing Enthusiast"
    },
    {
      id: 3,
      title: "Wilderness Survival. Tips and Tricks for Camping",
      category: "camping",
      description: [
        "Prepare for the ultimate outdoor adventure with wilderness survival tips and tricks to make your camping trip safe, enjoyable, and unforgettable. Camping in the wilderness offers a chance to disconnect from the modern world and embrace the rugged beauty of nature, but it also requires careful planning and preparation to ensure a successful trip.",
        "Before you head out into the wilderness, take the time to familiarize yourself with the area and its potential hazards. Check the weather forecast, study maps of the area, and learn basic navigation skills to help you find your way if you get lost.",
        "When packing for your camping trip, be sure to bring essential gear such as a tent, sleeping bag, food, water, and a first aid kit. It's also important to dress appropriately for the weather and to pack layers that can be easily added or removed as temperatures change.",
        "Once you've arrived at your campsite, take the time to set up camp properly and to familiarize yourself with your surroundings. Choose a flat, level spot for your tent, and be sure to secure it properly to prevent it from blowing away in the wind. Set up a campfire in a designated fire ring or pit, and always follow Leave No Trace principles to minimize your impact on the environment.",
        "And finally, remember to enjoy the experience! Camping in the wilderness offers a chance to reconnect with nature, to unplug from the stresses of everyday life, and to create lasting memories with friends and family. So take a deep breath, relax, and embrace the adventure that awaits you in the great outdoors."
      ],
      date: "2024-04-23",
      author: "Wilderness Survival Expert"
    }
  
  
];

console.log(historicalData);


export default function page() {
  return (
    <blog>
      <div>
        <div>
          <h1 className="text-8xl font-bold ml-[100px] mt-10 mb-9 ">Explore Our World: Travel Stories Await</h1>

        <div style={{backgroundImage: 'url(/image/airplane1.jpg)', height: '300px'}} className="mx-4">

        </div>



        </div>
        <div className='flex justify-between mt-20 w-[1000px] ml-[160px] capitalize'>
          <h3 className='text-4xl font-bold'>all posts</h3>
          <ul className='flex  text-2xl border-y-2 border-black'>
            <li className='border-l-2 px-4 border-black'><Link href='./'>historical</Link></li>
            <li className='border-l-2 px-4 border-black'><Link href='./'>wildlife</Link></li>
            <li className='border-l-2 px-4 border-black'><Link href='./'>adventure</Link></li>
            <li className='border-l-2 px-4 border-black'><Link href='./'>cultural</Link></li>
            <li className='border-l-2 px-4 border-black'><Link href='./'>camping</Link></li>
            <li className='border-x-2 px-4 border-black'><Link href='./'>all</Link></li>
          </ul>
        </div>





        <div>

      <div className='grid grid-cols-3 grid-rows-3 gap-4 text-start ml-[160px] w-[1000px] mt-10'>
        {historicalData.map(historicalData =>(

        <section key={historicalData.id}>

        

        <div  className=" grid grid-rows-2    p-4 border-2 border-black">

          <div className="">
            <img src={`/image/${historicalData.title.split(' ').join('-')}.jpg`} height='400' alt={historicalData.title}
            className='h-[200px] w-[285px] absolute mt-8 border-2 border-black '/>

          </div>
          <span className='text-2xl font-bold capitalize bg-black text-white w-[50%] relative  flex justify-end text-center pr-5 ml-[140px] hover:bg-purple-500 hover:transition-all'><Link href='./'>{historicalData.category}</Link></span>
          <p className=' mt-[200px] text-2xl'>{historicalData.date}</p>
          <p className='text-3xl font-bold hover:text-purple-500 hover:transition-all' ><Link href='./'>{historicalData.title}</Link> </p>
          <p className='text-xl'>{historicalData.description[0]}</p>
          
        </div>

        <div>
          
        </div>

</section>

))}
</div>
</div>
        <div className="ml-[170px] mt-30">
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
            </div>

      </div>
      


      


      
    </blog>
  )
}


        



