import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav]=useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  return (

      <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#fffff] m-4">
      John Doe Railways
      </h1>
      <ul className=" hidden md:flex">
      <li className="p-4">Home</li>
      <li className="p-4">TRAIN</li>
      <li className="p-4">FLIGHT</li>
      <li className="p-4">HOTEL</li>
      <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} >
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold text-[#fffff] m-4">
      RAILYATRA.
      </h1>
      <ul className="uppercase p-4">
      <li className="p-4 border-b border-gray-600">Home</li>
      <li className="p-4 border-b border-gray-600">TRAIN</li>
      <li className="p-4 border-b border-gray-600">FLIGHT</li>
      <li className="p-4 border-b border-gray-600">HOTEL</li>
      <li className="p-4 border-b border-gray-600">Contact</li>
      </ul>
      </div>

      

   </div>
  );
};

export default Navbar;
