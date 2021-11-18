import { useState } from 'react'
import { Button, Input } from 'components'

import styles from './right-hero-block.module.scss'

const RightHeroBlock = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    window
      .open('https://developer.litprotocol.com/docs/intro', '_blank')
      .focus()
  }

  return (
    <div className={styles.wrapper}>
      <Input
        className={styles.emailInput}
        placeholder="Email address"
        value={email}
        onChange={setEmail}
      />
      <Button onClick={handleSubmit}>Get Updates</Button>
    </div>
  )
}

export default RightHeroBlock
