import styles from "./SphereVideo.module.css"

const SphereVideo = () => (
  <video
    className={styles.sphereVideo}
    autoPlay
    loop
    muted
    playsInline
    width={150}
    height={150}
  >
    <source src="/videos/aitalking.mp4" type="video/mp4" />
  </video>
)

export default SphereVideo
