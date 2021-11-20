import { useState } from 'react'
import { Button } from 'components'

import styles from './right-hero-block.module.scss'
import MailchimpSubscribe from './MailchimpSubscribe'
import cx from 'classnames'

const RightHeroBlock = () => {
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const addUrl =
    'https://litprotocol.us20.list-manage.com/subscribe/post?u=37eeb6bbc8f1fee01838fd9df&id=4f37de62dc'

  const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [added, setAdded] = useState(false)

    const submit = async () => {
      if (!validateEmail(email)) {
        setInputMessage('Please enter a valid email')
        return false
      }

      if (!added) {
        setInputMessage(null)
        setAdded(true)
      }

      setAdded(true)

      onValidated({
        EMAIL: email,
      })
    }

    const transferEmailValue = (e) => {
      e.preventDefault()
      setEmail(e.currentTarget.value)
    }

    return (
      <div className={styles.wrapper}>
        <span className={styles.inputContainer}>
          <input
            className={cx(styles.input, styles['primary'], styles.emailInput)}
            type="text"
            value={email}
            onChange={transferEmailValue}
            placeholder="Email address"
          />
          <span className={styles.error}>{inputMessage}</span>
        </span>
        {!added ? (
          <Button className={styles.getUpdatesButton} onClick={submit}>
            Get Updates
          </Button>
        ) : (
          <Button className={styles.addedForUpdates}>Added!</Button>
        )}
      </div>
    )
  }

  return (
    <div>
      <MailchimpSubscribe
        url={addUrl}
        render={({ subscribe, status, message }) => {
          return (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )
        }}
      />
    </div>
  )
}

export default RightHeroBlock
