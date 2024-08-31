import img2 from "../images/Frame 15.svg";
import img3 from "../images/layer.svg";
import { RiFirstAidKitFill } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import object from "../images/OBJECTS.svg";
import group1 from "../images/Group1.svg"
import group2 from "../images/Group2.svg"
import group3 from "../images/Group3.svg"
import group4 from "../images/Group4.svg"
import group5 from "../images/Group5.svg"
import Discover from "./Discover";
import SpecialDeals from "./SpecialDeals";
import Footer from "./Footer";




const Home = () => {
    
      
  return (
<>

<div className="relative flex flex-col justify-center items-center mt-10">
  {/* Main Flex Container */}
  <div className="lg:flex-row flex flex-col-reverse justify-center items-center lg:items-start gap-6 mt-10">
    {/* Left Side Content */}
    <div className="flex flex-col justify-center items-center lg:items-start gap-10 mt-10 relative">
      {/* Explore Button */}
      <button className="text-textpink px-5 py-4 lg:px-7 rounded-3xl lg:ml-20 shadow-md flex items-center gap-2">
        Explore The World! <RiFirstAidKitFill />
      </button>
      
      {/* Main Heading */}
      <p className="lg:text-6xl text-2xl font-bold lg:ml-20 text-center lg:text-start w-full lg:w-auto">
        Travel <span className="text-textpink">Top destination</span> of the world
      </p>

      {/* Subheading */}
      <p className="text-gray-500 text-center lg:text-start w-full lg:w-3/4 lg:ml-20">
        We always make our customer happy by providing as many choices as possible
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-3 mb-5 lg:ml-20">
        <button className="bg-purpple1 px-10 py-3 text-white rounded-3xl text-sm font-bold w-full md:w-auto">
          Get Started
        </button>
        <button className="px-10 py-3 text-black rounded-3xl border border-solid text-sm font-bold flex items-center gap-1 w-full md:w-auto">
          <FaPlayCircle className="text-purpple1" /> Watch Demo
        </button>
      </div>

      {/* Background Image */}
      <div className="lg:absolute lg:-bottom-24 hidden lg:block">
        <img src={object} alt="" className="w-full lg:w-auto" />
      </div>
    </div>

    {/* Right Side Image */}
    <div className="lg:mr-28 relative mt-10 flex justify-center items-center">
      <div>
        <img src={img2} alt="" className="w-4/5 lg:w-screen mt-10 lg:ml-0 ml-10" />
      </div>    
      <div className="absolute -top-11">
        <img src={img3} alt="" />
      </div>
    </div>
  </div>

  {/* Group Images */}
  <div className="flex lg:flex-row flex-col mt-20 gap-14 items-center justify-center">
    <div><img src={group1} alt="" className="w-full lg:w-auto" /></div>
    <div><img src={group2} alt="" className="w-full lg:w-auto" /></div>
    <div><img src={group3} alt="" className="w-full lg:w-auto" /></div>
    <div><img src={group4} alt="" className="w-full lg:w-auto" /></div>
    <div><img src={group5} alt="" className="w-full lg:w-auto" /></div>
  </div>
</div>
         <div>
        <Discover/>
       <SpecialDeals/>
       <Footer/>
         </div>
        

      
      
</>
     
  
  );
};

export default Home;
