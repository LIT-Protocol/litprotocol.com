import { Button } from 'components'

import styles from './left-hero-block.module.scss'

const LeftHeroBlock = () => {
  const handleStart = () => {
    window
      .open('https://developer.litprotocol.com/docs/intro', '_blank')
      .focus()
  }

  return (
    <div className={styles.wrapper}>
      {/*<div className={styles.logo}>*/}
      {/*  <img src="/lit-logo.png" />*/}
      {/*  <h1>Lit Protocol</h1>*/}
      {/*</div>*/}
      <div className={styles.slogan}>
        <h2>
          Decentralized Access Control for Connected Experiences
          {/*Decentralized Composability Infrastructure for the Next*/}
          {/*Internet*/}
        </h2>
      </div>

      <div className={styles.description}>
        Companies, creators, and DAOs use Lit Protocol to grant access to
        content, software, and data using tokens, NFTs, and blockchain identity
        as keys.
      </div>

      <Button
        className={styles.startButton}
        type="tertiary"
        onClick={handleStart}
      >
        Start Now
      </Button>

      {/*<div className={styles.bottom}>*/}
      {/*  Encrypted + decentralized composability*/}
      {/*</div>*/}
    </div>
  )
}

export default LeftHeroBlock
