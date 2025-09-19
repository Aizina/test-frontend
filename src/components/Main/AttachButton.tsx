import Image from "next/image"
import styles from "./AttachButton.module.css"

interface AttachButtonProps {
  onClick: () => void
}

const AttachButton = ({ onClick }: AttachButtonProps) => (
  <Image
    src="/icons/attach.svg"
    alt="Attach"
    width={20}
    height={20}
    className={styles.icon}
    onClick={onClick}
  />
)

export default AttachButton
