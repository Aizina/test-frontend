"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "./BottomSection.module.css"
import Divider from "./Divider"
import { User } from "../../api/fetchUser"

interface BottomSectionProps {
  user: User
}

const BottomSection = ({ user }: BottomSectionProps) => (
  <div className={styles.bottomSection}>
    <Divider />
    <Link href="#" className={styles.notification}>
      <Image src="/icons/notifications.svg" alt="Notifications" width={20} height={20} />
      <span>Notifications</span>
      <svg width="12" height="12" viewBox="0 0 8 8" fill="none" stroke="#4B5563" strokeWidth="1" style={{ marginLeft: 'auto' }}>
        <path d="M1 1 L5 4 L1 7" />
      </svg>
    </Link>

    <div className={styles.user}>
      <Image src="icons/avatar.svg" alt="User Avatar" width={20} height={20} className={styles.avatar} />
      <span className={styles.username}>{user.name}</span>
    </div>
  </div>
)

export default BottomSection
