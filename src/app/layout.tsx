import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "@/components/Sidebar/Sidebar"
import styles from "./layout.module.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Blink project",
  description: "Blink project",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
