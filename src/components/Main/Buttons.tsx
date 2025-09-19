import Image from "next/image"
import styles from "./Buttons.module.css"

const Buttons = () => (
  <div className={styles.buttons}>
    <button className={styles.primary}>
      <Image
        src="/icons/ai.svg"
        alt="Ai"
        width={12}
        height={12}
        className={styles.icon}
      />
      Today’s snapshot
    </button>
    <button className={styles.secondary}>Generate a report</button>
    <button className={styles.secondary}>Summarize text</button>
    <button className={styles.secondary}>See more</button>
  </div>
)

export default Buttons
