import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostCard from "./CardPost";
import CardHistory from "./CardHistory";
import Setting from "./Setting";


const Profile = () => {
  return (
    <> |
   <div className="flex flex-col lg:flex-row border-t border-black">
   <div className="">
        <Sidebar/>
    </div>
    <div className=" w-full text-center ">
    <Routes>
        <Route path="/postcard" element={<PostCard/>}/>
        <Route path="/CardHistory" element={<CardHistory/>}/>
        <Route path="/setting" element={<Setting/>}/>

        
    </Routes>
    </div>
   </div>
    </>
  )
}

export default Profile;