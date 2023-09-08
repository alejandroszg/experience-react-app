import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <HiMenuAlt3
        onClick={handleNav}
        size={25}
        className="z-20 text-white cursor-pointer"
      />
      <div
        className={
          nav
            ? "easi-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center gap-y-[32px]">
          <li className="font-bold text-3xl cursor-pointer">Home</li>
          <li className="font-bold text-3xl cursor-pointer">Destinations</li>
          <li className="font-bold text-3xl cursor-pointer">Reservations</li>
          <li className="font-bold text-3xl cursor-pointer">Amenities</li>
          <li className="font-bold text-3xl cursor-pointer">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
