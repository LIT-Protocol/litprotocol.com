import { useState } from 'react'
import { Button, Input } from 'components'

import styles from './right-hero-block.module.scss'

const RightHeroBlock = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {}

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.emailInput}
        placeholder="Email address"
        value={email}
        onChange={setEmail}
      />
      <Button onClick={handleSubmit}>Get Updates</Button>
      <span className={styles.serviceLogo}>
        <div className={styles.zoomLogo} />
        <div className={styles.ifpsLogo} />
        <div className={styles.googleLogo} />
        <div className={styles.gatherLogo} />
      </span>
    </div>
  )
}

export default RightHeroBlock
