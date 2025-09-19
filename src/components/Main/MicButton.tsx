"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import styles from "./MicButton.module.css"

const MicButton = () => {
  const [recording, setRecording] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const handleMicClick = async () => {
    if (recording) {
      mediaRecorderRef.current?.stop()
      setRecording(false)
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorderRef.current = mediaRecorder
        audioChunksRef.current = []

        mediaRecorder.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data)
        }

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
          const audioUrl = URL.createObjectURL(audioBlob)
          const audio = new Audio(audioUrl)
          audio.play()
        }

        mediaRecorder.start()
        setRecording(true)
      } catch (err) {
        console.error("Доступ к микрофону запрещён", err)
      }
    }
  }

  return (
    <button
      onClick={handleMicClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center"
      }}
    >
      {recording ? (
        <Image
          src="/icons/stop.png"
          alt="Stop"
          width={20}
          height={20}
          className={styles.icon}
        />
      ) : (
        <Image
          src="/icons/mic.svg"
          alt="Microphone"
          width={20}
          height={20}
          className={styles.icon}
        />
      )}
    </button>
  )
}

export default MicButton
