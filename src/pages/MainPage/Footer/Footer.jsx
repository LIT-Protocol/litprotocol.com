import { Icons } from 'components'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.linkTwitter}
        href="https://twitter.com/litprotocol"
        target="_blank"
      >
        <Icons.Twitter />
      </a>

      <a
        className={styles.linkDiscord}
        href="https://litgateway.com/discord"
        target="_blank"
      >
        <Icons.Discord />
      </a>

      <a className={styles.linkBlog} href="https://blog.litprotocol.com/">
        Blog
      </a>

      <a
        className={styles.linkDeveloper}
        href="https://developer.litprotocol.com/"
      >
        Docs
      </a>

      <a
        className={styles.linkContact}
        href="https://airtable.com/shr2NWJbH1Y6Y3kOU"
      >
        Contact
      </a>
    </div>
  )
}

export default Footer
