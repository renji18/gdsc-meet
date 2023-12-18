import React, { useEffect } from "react"
import Loader from "./Loader"

const PopupComponent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Call a function to hide the popup (e.g., hidePopup())
    }, 50000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div id="ac-wrapper">
      <div className="flex flex-col gap-5 md:gap-8">
        <center className="flex gap-2 md:gap-2 flex-col text-[#202124]">
          <h2 className="text-xl md:text-[28px]">Asking to be let in...</h2>
          <p className="text-sm md:text-lg">
            You'll join the call when GDSC PU lets you in
          </p>
        </center>
        <Loader />
      </div>
    </div>
  )
}

export default PopupComponent
