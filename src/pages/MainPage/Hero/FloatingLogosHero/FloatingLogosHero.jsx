import styles from './floating-logos-hero.module.scss'

const FloatingLogosHero = () => {
  return (
    <span className={styles.serviceLogo}>
      <div className={styles.zoomLogo} />
      <div className={styles.ifpsLogo} />
      <div className={styles.googleLogo} />
      <div className={styles.gatherLogo} />
    </span>
  )
}

export default FloatingLogosHero
