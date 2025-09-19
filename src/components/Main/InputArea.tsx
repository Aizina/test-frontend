"use client"
import { useRef } from "react"
import styles from "./InputArea.module.css"
import AttachButton from "./AttachButton"
import MicButton from "./MicButton"


const InputArea = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      console.log("Выбранные файлы:", files)
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="| Write something..."
        className={styles.input}
      />
      <div style={{ display: "flex", gap: "8px" }}>
        <AttachButton onClick={handleAttachClick} />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple
        />
        <div className={styles.divider}></div>
        <MicButton />
      </div>
    </div>
  )
}

export default InputArea
