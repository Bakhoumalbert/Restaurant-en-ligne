import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from "react-icons/bs";
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      {/* Left side */}
      <div className="flex items-center">
        {/* cursor-pointer : en survolant la bar le pointeur va s'afficher */}
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Meilleur <span className="font-bold">Bouffe</span>
        </h1>
        {/* hidden : permet de cacher un element */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">livraison</p>
          <p className="p-2">Emporter</p>
        </div>
      </div>
      {/* Search Input */}

      <div className="bg-gray-200 rounded-full items-center px-2 flex w-[200px] ms:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="rechercher un plat"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
      </button>

      {/* Mobile Menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* sider drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-0 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Meilleur <span className="font-bold">Bouffe</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex items-center py-4 text-xl">
              <TbTruckDelivery size={30} className="mr-4" /> Ordres
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdFavorite size={30} className="mr-4" /> Favoris
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaWallet size={30} className="mr-4" /> portefeuille
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdHelp size={30} className="mr-4" /> Aide
            </li>
            <li className="flex items-center py-4 text-xl">
              <AiFillTag size={30} className="mr-4" /> Promotions
            </li>
            <li className="flex items-center py-4 text-xl">
              <BsFillSafeFill size={30} className="mr-4" /> Meilleur
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaUserFriends size={30} className="mr-4" /> Inviter des amis
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar