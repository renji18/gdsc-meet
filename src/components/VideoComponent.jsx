import React, { useEffect, useRef } from "react"
import { IoMicOffOutline } from "react-icons/io5"
import { BsCameraVideoOff } from "react-icons/bs"
import { CiMenuKebab } from "react-icons/ci"

const VideoComponent = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)

  useEffect(() => {
    const constraints = {
      audio: false,
      video: { facingMode: "user" },
    }

    const init = async () => {
      try {
        const stream = await navigator?.mediaDevices?.getUserMedia(constraints)
        if (!videoRef.current || !canvasRef.current) return

        videoRef.current.srcObject = stream
        streamRef.current = stream // Store the stream in the separate ref

        const context = canvasRef.current.getContext("2d")
        const renderFrame = () => {
          if (videoRef.current && context) {
            context.drawImage(videoRef.current, 0, 0, 640, 480)
            canvasRef.current
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
            // Call a function to handle the canvasData (e.g., post(canvasData))
          }
          requestAnimationFrame(renderFrame)
        }

        renderFrame()
      } catch (error) {
        console.error(`Error accessing webcam: ${error}`)
      }
    }

    init()

    return () => {
      // Clean up resources when the component unmounts
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [])

  return (
    <div className="mt-24 md:mt-10">
      <div className="relative -z-10 flex justify-center">
        <div className="h-[50vh] bg-sky-600 object-cover w-[50vw] rounded-lg" />
        {/* <video
          className="h-[50vh] object-cover w-[50vw] rounded-lg"
          ref={videoRef}
          style={{ transform: "rotateY(180deg)" }}
          playsInline
          autoPlay
        /> */}
        <div className="absolute font-bold text-white text-sm top-5 left-5">
          <p>Zhi Doh</p>
        </div>
        <div className="absolute text-white text-sm top-5 right-5">
          <CiMenuKebab size={24} />
        </div>
        <div className="absolute bottom-0 p-5 flex gap-">
          <IoMicOffOutline
            className="mx-[12px] bg-red-600 text-white p-3 rounded-full"
            size={45}
          />
          <BsCameraVideoOff
            className="mx-[12px] bg-red-600 text-white p-3 rounded-full"
            size={45}
          />
        </div>
      </div>
      {/* <canvas className="hidden" ref={canvasRef} width="640" height="480" /> */}
    </div>
  )
}

export default VideoComponent
