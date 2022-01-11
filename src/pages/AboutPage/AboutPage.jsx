import styles from './about.module.scss'
import React from 'react'
import Top from '../MainPage/Hero/Top'
import { Icons } from '../../components'

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <Top />
      <div className={styles.inner}>
        <div className={styles.slogan}>
          <h2>About</h2>
          <p className={styles.strongFont}>
            At its birth, the internet was envisioned as an open system that
            would allow everyone to share information, access opportunities, and
            collaborate across boundaries....
          </p>
          <p>
            While this vision has been realized for billions, the coming of age
            for the internet resulted in the rise of the closed platforms, which
            are designed to own what we create.
          </p>
          <p>
            When a platform grows in usage and revenue, it’s the owners of the
            platform that overwhelmingly benefit from the economic upside of
            that growth, using the data, attention, content, and services that
            we provide them.
          </p>
          <p>
            For example, social platforms have creators publishing work for
            exposure while the platform collects ad revenue. Marketplaces pay
            service providers (e.g drivers, homeowners) only for service they
            provide, while cutting the providers out of the emergent value
            created by network effects.
          </p>

          <p className={styles.strongFont}>
            This is changing. The internet is maturing.
          </p>
          <p>
            Encryption allows us to keep our data private and share it with who
            we want.
          </p>
          <p>
            Digital ownership lets fans directly become patrons of their
            favorite creators via platformless assets and access.
          </p>
          <p>
            Decentralization creates the opportunity for platforms to be
            replaced by user owned networks.
          </p>
          <p className={styles.strongFont && styles.bottomBorder}>
            Our team is driven to accelerate this maturation by building the
            most secure and decentralized network for utility and composability
            as well as the easiest to use tools so as the world transitions to
            user owned networks, everyone’s experience will exceed the
            usefulness and conveniences of today’s closed platforms.
          </p>
          <p>
            We are hiring engineers at Lit Protocol.{' '}
            <a
              href={'https://angel.co/company/lit-protocol/jobs'}
              className={styles.jobLink}
              target="_blank"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footerWrapper}>
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

        <a className={styles.linkBlog} href="https://www.litgateway.com/">
          Gateway
        </a>

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
      </div>
    </div>
  )
}

export default AboutPage
