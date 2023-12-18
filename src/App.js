import React, { useEffect, useState } from "react"
import VideoComponent from "./components/VideoComponent"
import PopupComponent from "./components/PopupComponent"
import Navbar from "./components/Navbar"

const App = () => {
  const [isCameraPermissionGranted, setCameraPermissionGranted] =
    useState(false)

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })
        // Do something with the stream, e.g., update state or pass it to VideoComponent
        setCameraPermissionGranted(true)
      } catch (error) {
        // Handle the case where the user denies camera access
        console.error("Error accessing camera:", error)
      }
    }

    // Call the function to request camera permission when the component mounts
    requestCameraPermission()
  }, [])

  return (
    <div className="px-3 py-2">
      <Navbar />
      <div className="flex left-0 right-0 px-3 flex-col justify-evenly absolute top-0 items-center h-screen lg:flex-row">
        {isCameraPermissionGranted && <VideoComponent />}
        <PopupComponent />
      </div>
    </div>
  )
}

export default App
