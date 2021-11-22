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
              Lit Protocol is a decentralized network of computers that grant
              users keys to resources like software and content, when they meet
              certain conditions, like owning a given NFT.
            </p>
            <p>
              Lit brings together everything that’s required for websites, apps,
              games, events, and IOT devices to to create blockchain connected
              experiences.
            </p>
          </div>

          <div>
            <p>
              Lit powers token gated files, zoom meetings, serverless
              decentralized social networks, and anything you can imagine.
            </p>
          </div>
        </Columns>
      </div>
    </PartBlock>
  )
}

export default Trustless
