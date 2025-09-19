"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "./NavMenu.module.css"

const navItems = [
  { label: "Instant meeting", icon: "/icons/plus.svg", href: "#" },
  { label: "Schedule meeting", icon: "/icons/calendar.svg", href: "#" },
  { label: "My reports", icon: "/icons/myReports.svg", href: "#" },
  { label: "Report List", icon: "/icons/reports.svg", href: "#" },
  { label: "Upcoming Meetings", icon: "/icons/upcomingMeetings.svg", href: "#" },
  { label: "Call Summaries", icon: "/icons/summary.svg", href: "#" },
  { label: "Kanban Board", icon: "/icons/kanban.svg", href: "#" },
  { label: "Calendar", icon: "/icons/calendar.svg", href: "#" },
]

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      {navItems.map(item => (
        <Link key={item.label} href={item.href} className={styles.navItem}>
          <Image src={item.icon} alt={item.label} width={20} height={20} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default NavMenu
