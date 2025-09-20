"use client"
import { useState, useEffect } from "react"
import Header from "./Header"
import NavMenu from "./NavMenu"
import BottomSection from "./BottomSection"
import Divider from "./Divider"
import Extra from "./Extra"
import { fetchDefaultUser, User } from "../../api/fetchUser"
import styles from "./Sidebar.module.css"

const DEFAULT_USER: User = {
  _id: "default-id",
  name: "Default User",
  projects: ["Project 1", "Project 2", "Project 3"],
  chats: ["Chat 1", "Chat 2", "Chat 3", "Chat 4"],
}

const Sidebar = () => {
  const [user, setUser] = useState<User>(DEFAULT_USER)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    fetchDefaultUser()
      .then(u => {
        if (u) setUser(u)
      })
      .catch(() => {
        setUser(DEFAULT_USER)
      })
  }, [])

  return (
    <div className={`${styles.sidebar} ${collapsed ? "" :styles.collapsed}`}>
      <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        projects={user.projects}
      />
      <Divider />
      {collapsed && (
        <>
          <NavMenu />
          <Divider />
          <Extra chats={user.chats} />
          <BottomSection user={user} />
        </>
      )}
    </div>
  )
}

export default Sidebar
