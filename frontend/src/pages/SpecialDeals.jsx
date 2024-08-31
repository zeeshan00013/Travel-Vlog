import group1 from "../images/Group 9238.png";
import background from "../images/BACKGROUND.svg";
import { RiCoupon3Fill  } from "react-icons/ri";
import { FaCalendarDays,FaLocationDot  } from "react-icons/fa6";
import testlogo from "../images/Ellipse 22.svg";
import { BsStarFill } from "react-icons/bs";
import { IoIosArrowRoundForward,IoIosArrowRoundBack, } from "react-icons/io";




const SpecialDeals = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="lg:w-[1000px] md:w-[500px] h-auto">
          <img src={group1} alt="" />
        </div>
        <div className="flex flex-col mt-10">
          <div className="space-y-4 w-full">
            <p className="text-center lg:text-start text-textpink text-xl font-bold ">
              T R A V E L - P O I N T
            </p>
            <p className="lg:text-4xl text-2xl font-bold lg:w-3/5 lg:text-start text-center w-full ">
              We helping you find your dream location
            </p>
            <p className="text-gray-500 lg:w-3/5 text-center lg:text-start w-full ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10 space-y-3 px-32 lg:px-0">
            <div className="w-40 h-28 border border-gray-400 rounded-3xl flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl font-bold ">500+</h2>
              <p className="text-lg">Holiday Package</p>
            </div>
            <div className="w-40 h-28 border border-gray-400 rounded-3xl flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl font-bold text-[#FF5722]">100</h2>
              <p className="text-lg">Luxury Hotel</p>
            </div>
            <div className="w-40 h-28 border border-gray-400 rounded-3xl flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl font-bold text-[#FF5722]">7</h2>
              <p className="text-lg">Premium Airlines</p>
            </div>
            <div className="w-40 h-28 border border-gray-400 rounded-3xl flex flex-col justify-center items-center space-y-2">
              <h2 className="text-3xl font-bold text-[#FF5722]">2k+</h2>
              <p className="text-lg">Happpy Customer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center mt-10 px-20 ">
          <div className="flex flex-col w-full">
            <div className="space-y-8">
              <p className="text-xl font-bold text-textpink text-center">K E Y - F E  A T U R E</p>
              <p className="lg:text-4xl text-2xl font-bold  lg:text-start text-center w-full ">We offer best services</p>
              <p className="text-gray-500 lg:w-3/5 text-center lg:text-start w-full ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.{" "}
            </p>
            </div>
            <div className="flex flex-col   space-y-4 mt-16 px-6">
             <div className=" border border-gray-400 py-6 rounded-3xl items-center justify-center  flex flex-col md:flex-row  md:px-8 w-auto space-x-3">
                <div className="md:px-8 md:py-8 w-20 h-20 rounded-3xl bg-[#FF5722] flex justify-center items-center ">
                <FaLocationDot className="text-white w-8 h-8"/>
                </div>
                <div className="w-full">
                <p className="text-xl font-bold">We offer best services</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
                </div>
             </div>
             
             <div className=" border border-gray-400 py-6 rounded-3xl  items-center justify-center flex flex-col md:flex-row  md:px-8 w-auto space-x-3">
                <div className="md:px-8 md:py-8  w-20 h-20 rounded-3xl bg-[#f0da30] flex justify-center items-center ">
                <FaCalendarDays className="text-white  w-8 h-8" />
                </div>
                <div className="w-full">
                <p className="text-xl font-bold">We offer best services</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
                </div>
             </div>
             <div className=" border border-gray-400 py-6 rounded-3xl items-center justify-center  flex flex-col md:flex-row  md:px-8 w-auto space-x-3">
                <div className="md:px-8 md:py-8  w-20 h-20 rounded-3xl bg-[#dd2db7] flex justify-center items-center ">
                <RiCoupon3Fill className="text-white  w-8 h-8"/>
                </div>
                <div className="w-full">
                <p className="text-xl font-bold">We offer best services</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
                </div>
             </div>
            </div>
          </div>
          <div className="w-full" >
            <img src={background} alt="" className="" />
          </div>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center relative">
        <div className=""> 
             <div className="space-y-4">
              <p className="text-textpink text-xl font-bold text-center">T E S T O M I N A L S</p>
              <p className="text-3xl font-bold text-center">Trust Our Clients</p>
             </div>
             <div className="flex flex-col justify-center items-center space-y-4 mt-10">
               <img src={testlogo} alt="" />
               <p className="text-[#FF5722] text-xl font-bold">Mark Smith / <span className="text-gray-500">Travel Enthusiast</span></p>
                <div className="flex space-x-4">
                  <button><BsStarFill className="text-[#ead03a] w-7 h-7" /></button>
                  <button><BsStarFill className="text-[#ead03a] w-7 h-7" /></button>
                  <button><BsStarFill className="text-[#ead03a] w-7 h-7" /></button>
                  <button><BsStarFill className="text-[#ead03a] w-7 h-7" /></button>
                  <button><BsStarFill className="text-[#ead03a] w-7 h-7" /></button> 
                </div>
                <div className="flex flex-col justify-center items-center space-y-6">
                  <p className="w-3/5 text-lg font-semibold text-gray-500 text-center">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC.</p>
                  <div className="space-x-4">
                  <button className="py-3 px-3 rounded-full bg-[#716c70]"></button>
                  <button className="py-3 px-3 rounded-full bg-[#dd2db7]"></button>
                    <button className="py-3 px-3 rounded-full bg-[#928e91]"></button>
                  </div>
                </div>
             </div>
             <div className=" absolute lg:bottom-60 lg:w-[1000px] px-10 flex justify-between w-full  mt-5 ">
             <button className="border-solid border-2  rounded-full px-6 py-6"><IoIosArrowRoundBack size={30} /> </button>
             <button className="border rounded-full px-6 py-6 bg-purpple1 text-white "><IoIosArrowRoundForward size={30} /></button>
             </div>
        </div>
      </div>
      <div className="mt-40 flex justify-center items-center ">
         <div className="md:w-[1000px] bg-red-50 h-auto w-auto flex flex-col justify-center items-center rounded-3xl ">
                <div className="mt-10 space-y-12 flex flex-col justify-center items-center ">
                  <p className="text-textpink text-xl font-semibold text-center">S U B C R I B E - T O - O U R - N E W S L E T T E R</p>
                  <p className="md:text-4xl text-xl font-bold text-center w-4/5 md:ml-20">Prepare yourself & let’s explore the beauty of the world</p>
                </div>
                <div className="flex flex-col md:flex-row mt-20 mb-20 space-x-4 md:space-y-0 space-y-4">
                  <input type="text" placeholder="Your Email" className="py-6 md:px-28 px-20 rounded-3xl placeholder:text-xl placeholder:font-bold placeholder:text-gray-800" />
                  <button className="py-6 px-14 bg-purpple1 rounded-3xl text-white font-bold  text-lg"> Subscribe</button>
                </div>
         </div>
      </div>
    </div>
  );
};

export default SpecialDeals;
