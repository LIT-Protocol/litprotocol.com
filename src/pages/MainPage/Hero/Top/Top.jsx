import styles from './top.module.scss'

const Top = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gatewayLink}>
        <span className={styles.logo}>
          <img src="/lit-logo.png" />
          <a href={'https://www.litprotocol.com'}>
            <h1>Lit Protocol</h1>
          </a>
        </span>
        <span className={styles.links}>
          <a className={styles.linkBlog} href={`${window.location.href}about`}>
            {/*<a className={styles.linkBlog} href={''}>*/}
            About
          </a>
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

          <a
            className={styles.linkContact}
            href="https://airtable.com/shr2NWJbH1Y6Y3kOU"
          >
            Contact
          </a>
        </span>
      </div>
    </div>
  )
}

export default Top
