import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="h-screen lg:w-72 md:w-full  lg:border-r  border-black mt-10 space-y-5">
        <div >
  <h3 className="text-purpple1 font-bold text-3xl text-center ">Dashboard</h3>
        </div>
      <div className="lg:mt-10 ">
<ul className="flex flex-col space-y-6 mt-20">
        <Link to={"/profile/postcard"} ><li className="text-center  text-2xl  text-black font-bold ">Postcard</li></Link>
        <Link to={"/profile/CardHistory"} ><li  className="text-center  text-2xl  font-bold ">CardHistory</li></Link>
        <Link to={"/profile/setting"} ><li  className="text-center  text-2xl font-bold ">Setting</li></Link>
        <Link ><li  className="text-center "><button className="bg-purpple1 py-3 px-10 rounded-3xl text-white text-sm font-semibold">Lgout</button></li></Link>


      </ul>
      </div>
    </div>
  )
}

export default Sidebar