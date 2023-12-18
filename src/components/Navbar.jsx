import React from "react"
import GDSC_LOGO from "../assets/Logo.jpeg"

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row px-3 py-2 z-50 absolute top-0 left-0 right-0 justify-between text-[#202124]">
      <div className="flex justify-center">
        <div className="logo">
          <img src={GDSC_LOGO} className="h-[60px]" alt="gdsc_logo" />
        </div>
        <div className="flex justify-center md:justify-normal text-[40px] gap-2 text-neutral-500">
          <p>GDSC</p>
          <p className="font-light">Meet</p>
        </div>
      </div>

      <div className="flex mt-2 md:mt-0 justify-center md:justify-normal items-center">
        <div className="user flex flex-col items-end">
          <p className="text-[14px]">zhigoh69@gmail.com</p>
          <p className="text-[13px] hover:cursor-pointer hover:text-sky-500">
            Switch account
          </p>
        </div>
        <div className="ml-3 h-9 w-9 bg-slate-400 rounded-full"></div>
      </div>
    </div>
  )
}

export default Navbar
