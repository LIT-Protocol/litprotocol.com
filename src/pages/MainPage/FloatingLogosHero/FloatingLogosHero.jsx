import styles from './floating-logos-hero.module.scss'

const FloatingLogosHero = () => {
  return (
    <span>
      <span className={styles.serviceLogo} />
      <a
        href={'https://litgateway.com/apps/zoom'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.zoomLogo} />
      </a>
      <a href={'https://litgateway.com/apps'} target="_blank" rel="noreferrer">
        <div className={styles.ifpsLogo} />
      </a>
      <a
        href={'https://litgateway.com/apps/google-drive'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.googleLogo} />
      </a>
      <a
        href={'https://litgateway.com/apps/gather-town'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.gatherLogo} />
      </a>
      <a
        href={'https://litgateway.com/apps/cloudflare'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.cloudflareLogo} />
      </a>
    </span>
  )
}

export default FloatingLogosHero
