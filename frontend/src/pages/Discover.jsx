import booking from "../images/booking 1.svg"
import destination from "../images/destination 1.svg";
import { IoIosArrowRoundForward,IoIosArrowRoundBack, } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";

import rec1 from "../images/rec1.svg"
import rec2 from "../images/rec2.svg"



const Discover = () => {
    const cardData = [
        {
          imgSrc: booking,
          title: 'Card Title 1',
          description: 'This is a description for card 1.',
         
        },
        {
          imgSrc: destination,
          title: 'Card Title 2',
          description: 'This is a description for card 2.',
        },
        
      ];

      const Card2Data=[
        {
            img:rec1,
            title:"Paradise Beach, Bantayan Island",
            price:"$550",
            location:"Rome",
            rating:"4.3",
        },
        {
            img:rec2,
            title:"Ocean with full of Colors",
            price:"$455",
            location:"Maldives",
            rating:"3.9",
        },
        {
            img:rec1,
            title:"Mountain View, Above the cloud",
            price:"$545",
            location:"Usa",
            rating:"4.2",
        },
      ]
  return (
    <div>
        <div className="flex lg:flex-row flex-col mt-20 justify-center">
            <div className="space-y-6 text-center flex justify-center items-center flex-col">
                <h2 className="text-textpink text-center  tracking-wide text-2xl font-semibold">S E R V I C E S</h2>
                <p className="lg:text-4xl text-2xl w-3/4     font-bold lg:w-3/5 text-center">Our top value categories for you</p>
            </div>
            <div className="flex flex-wrap gap-6 p-6 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border w-72 h-80 shadow-lg rounded-3xl flex flex-col justify-center items-center ml-6"
        >
          <img
            src={card.imgSrc}
            alt={`Card image ${index}`}
            className="w-14 h-14 object-cover rounded-t-3xl"
          />
          <h2 className="text-xl font-bold mt-4">{card.title}</h2>
          <p className="text-gray-600 mt-2">{card.description}</p>
        </div>
      ))}
    </div>
        </div>
        <div className="mt-20 flex flex-col justify-center w-full lg:px-32 ">
         <div className="flex justify-between lg:flex-row flex-col">
           <div className="space-y-4 w-auto flex-col flex justify-center items-center lg:items-start">
            <p className="text-textpink text-2xl font-semibold lg:text-start text-center">T O P - D E S T I N A T I O N</p>
            <h2 className="lg:text-4xl  text-2xl w-3/4  lg:w-full   font-bold text-center lg:text-start">Explore Top Destination</h2>
           </div>
           <div className="flex md:justify-center md:items-center justify-between px-6 lg:mt-0 mt-5 md:space-x-6 ">
            <button className="border rounded-full px-6 py-6"><IoIosArrowRoundBack size={30} /> </button>
            <button className="border rounded-full px-6 py-6 bg-purpple1 text-white"><IoIosArrowRoundForward size={30} /></button>

           </div>
         </div>
         <div className="grid gap-10 p-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
  {Card2Data.map((card, index) => (
    <div
      key={index}
      className="border shadow-lg rounded-3xl flex flex-col justify-center items-start w-full sm:w-72 md:w-64 lg:w-80 "
    >
      {/* Card Image */}
      <img
        src={card.img}
        alt={`Card image ${index}`}
        className="object-cover rounded-t-3xl w-full h-48 sm:h-36 md:h-32 lg:h-48"
      />

      {/* Card Content */}
      <div className="flex flex-col p-4">
        {/* Card Title and Price */}
        <div className="flex justify-between">
          <p className="text-xl font-bold">{card.title}</p>
          <p className="text-xl text-textpink font-bold">{card.price}</p>
        </div>

        {/* Card Location */}
        <p className="mt-2 text-gray-500">{card.location}</p>

        {/* Card Rating */}
        <p className="mt-2 text-[#FF5722] font-bold flex items-center gap-2">
          {card.rating} <FaRegStar />
        </p>
      </div>
    </div>
  ))}
</div>

       </div>
    </div>
  )
}

export default Discover