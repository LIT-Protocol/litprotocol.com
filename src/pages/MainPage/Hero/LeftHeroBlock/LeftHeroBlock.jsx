import { Button } from 'components'

import styles from './left-hero-block.module.scss'

const LeftHeroBlock = () => {
  const handleStart = () => {}

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/lit-logo.png" />
        <h1>Lit Protocol</h1>
      </div>

      <div className={styles.slogan}>
        <h2>Access Control Infrastructure for the New Internet.</h2>
      </div>

      <div className={styles.description}>
        Companies and creators use Lit Protocol to trustlessly gate access to
        content, software, and decentralized networks using blockchain
        conditions.
      </div>

      <Button
        className={styles.startButton}
        type="secondary"
        onClick={handleStart}
      >
        Start Now
      </Button>

      <div className={styles.bottom}>Utility for digital private property</div>
    </div>
  )
}

export default LeftHeroBlock
