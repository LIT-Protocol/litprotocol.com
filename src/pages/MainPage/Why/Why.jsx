import { Columns, PartBlock, Title } from 'components'

import styles from './why.module.scss'

const Why = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Columns>
        <Title
          className={styles.title}
          pretitle="Why Lit Protocol?"
          value="A secure and decentralized approach to access control."
        />
      </Columns>

      <Columns className={styles.args}>
        <div className={styles.detailContainer}>
          <div className={styles.imageBlocks}></div>
          <span>
            <Title secondary value="Decentralized" />
            <p>
              There is no central authority that has access to what you gate
              with Lit Protocol. The network used the BLS threshold encryption
              scheme.
            </p>
          </span>
        </div>

        <div className={styles.detailContainer}>
          <div className={styles.imageSecure}></div>
          <span>
            <Title secondary value="Secure Execution" />
            <p>
              The nodes of the Lit Protocol perform all their operations inside
              of a Trusted Execution Environment, so node operators can’t snoop.
            </p>
          </span>
        </div>

        <div className={styles.detailContainer}>
          <div className={styles.imageShields}></div>
          <span>
            <Title secondary value="Reliable" />
            <p>
              Lit Protocol is a decentralized service provider, and unlike
              centralized providers, there is no single point of failure.
            </p>
          </span>
        </div>
      </Columns>
    </PartBlock>
  )
}

export default Why
