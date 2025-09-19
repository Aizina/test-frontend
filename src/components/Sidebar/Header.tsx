"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./Header.module.css"

interface HeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  projects: string[]
}

const Header = ({ collapsed, setCollapsed, projects }: HeaderProps) => {
  const [headerDropdownOpen, setHeaderDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(projects[0] || "")

  const handleHeaderSelect = (option: string) => {
    setSelectedOption(option)
    setHeaderDropdownOpen(false)
  }

  return (
    <div className={styles.header}>
      <Image
        src="/icons/smallMainIcon.svg"
        alt="Main icon"
        width={24}
        height={24}
      />

      {!collapsed && (
        <div className={styles.headerDropdown}>
          <button
            className={styles.headerDropdownButton}
            onClick={() => setHeaderDropdownOpen(prev => !prev)}
          >
            <span className={styles.headerDropdownLabel}>{selectedOption}</span>
            <svg width="20" height="20" viewBox="0 0 8 8" fill="none" stroke="white" strokeWidth={1}>
              {headerDropdownOpen ? <path d="M1 5 L4 2 L7 5" /> : <path d="M1 3 L4 6 L7 3" />}
            </svg>
          </button>

          {headerDropdownOpen && (
            <div className={styles.dropdown}>
              {projects.map(p => (
                <div
                  key={p}
                  className={styles.dropdownItem}
                  onClick={() => handleHeaderSelect(p)}
                >
                  {p}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <button
        className={`${styles.toggleButton} ${collapsed ? styles.rotated : ""}`}
        onClick={() => setCollapsed(prev => !prev)}
      >
        <Image src="/icons/sidebar.svg" alt="Toggle Sidebar" width={24} height={24} />
      </button>
    </div>
  )
}

export default Header
