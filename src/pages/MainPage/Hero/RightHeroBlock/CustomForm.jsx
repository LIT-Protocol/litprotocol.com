import styles from './right-hero-block.module.scss'
import { Button } from '../../../../components'
import cx from 'classnames'
import { useEffect, useState } from 'react'

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('')
  const [inputMessageClass, setInputMessageClass] = useState('error')
  const [inputMessage, setInputMessage] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (status === 'success') {
      setAdded(true)
    }
    if (message && message.includes('Thank you')) {
      setInputMessageClass('success')
      setInputMessage(message)
    } else if (message && message.includes('already subscribed')) {
      setInputMessageClass('success')
      setInputMessage('This email is already subscribed!')
    }
  }, [message, status])

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const submit = async () => {
    if (!validateEmail(email)) {
      setInputMessageClass('error')
      setInputMessage('Please enter a valid email')
      return false
    }

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
        <span className={styles[inputMessageClass]}>{inputMessage}</span>
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

export default CustomForm
