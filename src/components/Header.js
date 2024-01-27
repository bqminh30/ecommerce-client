import React from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";
import {Link} from 'react-router-dom'
import path from '../ultils/path'

const Header = () => {
  const { RiPhoneFill, MdEmail, BsHandbagFill, FaUserCircle } = icons;
  return (
    <div className=" w-main flex justify-between h-[110px] py-[35px]">
      <Link to={`/${path.HOME}`}><img src={logo} alt="logo" className="width-[234px] object-contain" />
     </Link>
       <div className="flex text-[13px]">
        <div className="flex flex-col px-6 border-r items-center">
          <span className="flex gap-4 items-center">
            <RiPhoneFill color="red" />
            <span className="font-semibold">(+1800) 000 8808</span>
          </span>
          <span className="text-center">Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div className="flex flex-col px-6 border-r items-center">
          <span className="flex gap-4 items-center">
            <MdEmail color="red" />
            <span className="font-semibold">SUPPORT@TADATHEMES.COM</span>
          </span>
          <span className="text-center">Online Support 24/7</span>
        </div>
        <div className="cursor-pointer flex items-center px-6 border-r gap-2 justify-center">
          <BsHandbagFill color="red" />
          <span>0 item(s)</span>
        </div>
        <div className="cursor-pointer flex items-center px-6 justify-center gap-2">
          <FaUserCircle color="red" size={24} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
