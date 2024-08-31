import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../images/Frame 1.svg"

const Footer = () => {
  return (
    <footer className="  px-20 lg:mt-24 mt-8 flex flex-col lg:flex-row justify-center items-center gap-9 ">
      <div className=" flex flex-col  space-y-5 md:border-none border-b-2 py-4">
          <div className='space-y-5 flex flex-col justify-center items-center'>
            <img src={logo} alt=""  />
            <p className='w-4/5 text-gray-500 text-center'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
          </div>
          <div className="flex justify-center items-center space-x-6 mt-4">
            <FaFacebook className="text-purple-600 hover:text-purple-800 cursor-pointer w-8 h-8" />
            <FaTwitter className="text-purple-600 hover:text-purple-800 cursor-pointer w-8 h-8" />
            <FaInstagram className="text-purple-600 hover:text-purple-800 cursor-pointer w-8 h-8" />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-6">
         
          <div className="w-60 md:border-none border-b-2 py-4 flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold ">Contact</h3>
            <ul className="text-gray-600  space-y-5 mt-3">
              <li>Why Travelogs?</li>
              <li>Partner with us</li>
              <li>FAQ</li>
              <li >Blog</li>
            </ul>
          </div>
          <div className="w-60 md:border-none border-b-2 py-4  flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul className="text-gray-600 space-y-5 mt-3">
              <li >About</li>
              <li >Career</li>
              <li >Mobile</li>
              <li></li>
            </ul>
          </div>
          <div className="w-60 md:border-none border-b-2 py-4  flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-2">Meet Us</h3>
            <ul className="text-gray-600  space-y-5 mt-3">
              <li >+00 92 1234 56789</li>
              <li >info@travlog.com</li>
              <li >205. R Street, New York</li>
              <li >BD23200</li>
            </ul>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
