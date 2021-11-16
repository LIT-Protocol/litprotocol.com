import { PartBlock, Columns, Title } from 'components'

import styles from './why.module.scss'

const Why = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Columns>
        <Title
          pretitle="Why Lit Protocol?"
          value="A secure and decentralized approach to access control."
        />
      </Columns>

      <Columns className={styles.args}>
        <div>
          <Title secondary value="Decentralized" />
          <p>
            There is no central authority that has access to what you gate with
            Lit Protocol. The network used the BLS threshold encryption scheme.
          </p>
        </div>

        <div>
          <Title secondary value="Secure Execution" />
          <p>
            The nodes of the Lit Protocol perform all their operations inside of
            a Trusted Execution Environment, so node operators can’t snoop.
          </p>
        </div>

        <div>
          <Title secondary value="Reliable" />
          <p>
            Lit Protocol is a decentralized service provider, and unlike
            centralized providers, there is no single point of failure.
          </p>
        </div>
      </Columns>
    </PartBlock>
  )
}

export default Why
