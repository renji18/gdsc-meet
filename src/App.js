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
        await navigator.mediaDevices.getUserMedia({
          video: true,
        })
        setCameraPermissionGranted(true)
      } catch (error) {
        console.error("Error accessing camera:", error)
      }
    }
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
