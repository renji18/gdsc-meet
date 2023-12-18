import React from "react"
import LOADER from "../assets/loader.svg"

const Loader = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={LOADER}
        alt="loader"
        className="w-[35px]  h-[35px] object-contain"
      />
    </div>
  )
}

export default Loader
