import React from "react";
import { useAuth } from "../../context/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Auth = useAuth()
  const navigate = useNavigate()
   const handleLogout = async () => {
      if (Auth?.isLogged) {
        await signOut(auth)
        navigate('/login')
      }
    }
  return (
    <header className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="h-10"
      />
      <nav className="space-x-6 text-white font-medium hidden md:flex">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">New & Popular</a>
        <a href="#">My List</a>
      </nav>
      <button className="text-white font-semibold px-4 py-2 bg-red-600 rounded cursor-pointer" onClick={handleLogout}>
        Log out
      </button>
    </header>
  );
};

export default Navbar;
