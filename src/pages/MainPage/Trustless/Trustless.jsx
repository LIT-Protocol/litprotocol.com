import { Columns, PartBlock, Title } from 'components'

import styles from './trustless.module.scss'

const Trustless = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <div className={styles.inner}>
        <Title value="A Distributed Network for Composability and Encryption" />

        <Columns>
          <div>
            <p>
              Lit Protocol provides decentralized identity-based encryption and
              access control.
            </p>
            <p>
              Add Lit Protocol to your application and turn on-chain data (like
              owning a given NFT) into a 'key' for users to access experiences
              and decrypt private data stored on the decentralized web
            </p>
          </div>

          <div>
            <p>
              Create token gated files, zoom meetings, private verifiable
              credentials, serverless decentralized social networks, and
              anything you can imagine.
            </p>
          </div>
        </Columns>
      </div>
    </PartBlock>
  )
}

export default Trustless
