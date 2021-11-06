import styles from './top.module.scss'

const Top = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gatewayLink}>
        <a href="https://litgateway.com">Check out the Gateway</a>
      </div>
    </div>
  )
}

export default Top
