import React, { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div name='top' className='navbar'>
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#6A8FD4]">
      <h1 className="w-full text-4xl font-normal text-[#6A8FD4]">
        <span className="text-[#ffff]">Crisis</span>Coins™
      </h1>
      <ul className="hidden md:flex">
        <li><Link to='/' className="p-4">Home</Link></li>
        <li><Link to='/services' className="p-4">Services</Link></li>
        <li><Link to='/investors' className="p-4">Investors</Link></li>
        <li><Link to='/about' className="p-4">About</Link></li>
        <li><Link to='/contact' className="p-4">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={24}/> : <BiAlignRight size={24} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#040804] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className="w-full text-4xl font-normal  m-4 text-[#6A8FD4]"><span className="text-[#D9D9D9]">Crisis</span>Coins™</h1>
      <li><Link to='/' className="p-4">Home</Link></li>
        <li><Link to='/services' className="p-4">Services</Link></li>
        <li><Link to='/investors' className="p-4">Investors</Link></li>
        <li><Link to='/portfolio' className="p-4">Portfolio</Link></li>
        <li><Link to='/about' className="p-4">About</Link></li>
        <li><Link to='/contact' className="p-4">Contact</Link></li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;