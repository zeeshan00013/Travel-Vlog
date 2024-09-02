import PostCard from "./components/CardPost";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import SignupForm from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import SpecialDeals from "./pages/SpecialDeals";
import Profile from "./components/Profile";
import CardHistory from "./components/CardHistory";
import Footer from "./pages/Footer";
import Setting from "./components/Setting";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/SpecialDeals" element={<SpecialDeals />} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/postcard" element={<PostCard />} />
          <Route path="/profile/CardHistory" element={<CardHistory/>}/>
          <Route path="/profile/setting" element={<Setting/>}/>


        </Route>
      </Routes>
    </div>
  );
};

export default App;
