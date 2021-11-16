import { Icons } from 'components'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://twitter.com/litprotocol" target="_blank">
        <Icons.Twitter />
      </a>

      <a href="https://litgateway.com/discord" target="_blank">
        <Icons.Discord />
      </a>

      <a href="#">Developer Docs</a>

      <a href="#">Contact</a>
    </div>
  )
}

export default Footer
