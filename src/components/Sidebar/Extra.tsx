"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Extra.module.css"

interface ExtraProps {
  chats: string[]
}

const Extra = ({ chats }: ExtraProps) => {
  const [chatDropdownOpen, setChatDropdownOpen] = useState(false)

  const handleChatSelect = () => setChatDropdownOpen(false)

  return (
    <div className={styles.extra}>
      <Link href="#" className={styles.navItem}>
        <Image src="/icons/newChat.svg" alt="New Chat" width={20} height={20} className={styles.icon} />
        <span>New Chat</span>
      </Link>

      <div className={styles.chatMenu}>
        <button
          onClick={() => setChatDropdownOpen(prev => !prev)}
          className={styles.chatMenuButton}
        >
          <Image src="/icons/chat.svg" alt="Chats" width={20} height={20} className={styles.icon} />
          <span>Chats</span>
          <svg width="12" height="12" viewBox="0 0 8 8" fill="none" stroke="#4B5563" strokeWidth={1}>
            {chatDropdownOpen ? <path d="M1 5 L4 2 L7 5" /> : <path d="M1 3 L4 6 L7 3" />}
          </svg>
        </button>

        {chatDropdownOpen && (
          <div className={styles.chatMenuList}>
            {chats.map(chat => (
              <div
                key={chat}
                className={styles.chatMenuItem}
                onClick={handleChatSelect}
              >
                {chat}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Extra
