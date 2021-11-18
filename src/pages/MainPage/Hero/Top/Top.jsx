import styles from './top.module.scss'

const Top = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gatewayLink}>
        <span className={styles.logo}>
          <img src="/lit-logo.png" />
          <h1>Lit Protocol</h1>
        </span>
        <span className={styles.links}>
          <a className={styles.linkBlog} href="https://blog.litprotocol.com/">
            Blog
          </a>
          <a href="https://litgateway.com">Gateway</a>

          <a
            className={styles.linkDeveloper}
            href="https://developer.litprotocol.com/docs/intro"
          >
            Docs
          </a>

          <a className={styles.linkContact} href="#">
            Contact
          </a>
        </span>
      </div>
    </div>
  )
}

export default Top
