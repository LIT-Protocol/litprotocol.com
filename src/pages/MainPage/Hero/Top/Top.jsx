import styles from './top.module.scss'
import { useState } from 'react'
import exitIcon from '../assets/exitIcon.svg'
import hamburgerIcon from '../assets/hamburgerIcon.svg'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const Top = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  return (
    <div
      className={
        hamburgerMenuOpen
          ? cx(styles.wrapper, styles.positionFixed)
          : styles.wrapper
      }
    >
      <div className={styles.gatewayLink}>
        <span className={styles.logo}>
          <img src="/lit-logo.png" />
          <a href={'https://www.litprotocol.com'}>
            <h1>Lit Protocol</h1>
          </a>
        </span>
        <span className={styles.links}>
          {/*<a*/}
          {/*  className={styles.linkBlog}*/}
          {/*  href={`https://dev.litprotocol.com/about`}*/}
          {/*>*/}
          <Link className={styles.linkBlog} to={'/about'}>
            About
          </Link>
          {/*</a>*/}
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
        <nav className={styles.hamburgerMenuContainer}>
          <button
            className={styles.menuButton}
            onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
          >
            <img src={hamburgerMenuOpen ? exitIcon : hamburgerIcon} />
          </button>
          {!!hamburgerMenuOpen && (
            <ul className={styles.hamburgerMenu}>
              <li className={styles.menuLink}>
                <a
                  className={styles.linkBlog}
                  href={`https://.dev.litprotocol.com/about`}
                >
                  About
                </a>
              </li>
              <li className={styles.menuLink}>
                <a
                  className={styles.linkBlog}
                  href="https://blog.litprotocol.com/"
                >
                  Blog
                </a>
              </li>
              <li className={styles.menuLink}>
                <a href="https://litgateway.com">Gateway</a>
              </li>

              <li className={styles.menuLink}>
                <a
                  className={styles.linkDeveloper}
                  href="https://developer.litprotocol.com/docs/intro"
                >
                  Docs
                </a>
              </li>

              <li className={styles.menuLink}>
                <a
                  className={styles.linkContact}
                  href="https://airtable.com/shr2NWJbH1Y6Y3kOU"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Top
