import { Button, Card, Columns, PartBlock, Title } from 'components'

import styles from './now-live.module.scss'

import gDriveLogo from './assets/googleDrive.png'
import driveBack from './assets/driveBack.png'

const NowLive = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Columns className={styles.inner}>
        <div className={styles.descriptionText}>
          <Title white value="Who's using Lit Protocol?" />

          <p>
            Web3 social media, DAO productivity, decentralized credentials, NFT
            e-commerce access, and more.
          </p>
          <p>
            <strong>Decentralized Access Control in Action</strong>
          </p>
          {/*<Button*/}
          {/*  className={styles.enterButton}*/}
          {/*  type={'primaryDark'}*/}
          {/*  href='https://litgateway.com/'*/}
          {/*>*/}
          {/*  Enter the Gateway*/}
          {/*</Button>*/}
          <Button
            className={styles.enterButton}
            type={'primaryDark'}
            href="https://litprotocol.notion.site/a0e7c98c63b042648082fe33c7f66f8c?v=f0955f766af24d6f83dca1c0303fb9a8"
          >
            Apps Using Lit Protocol
          </Button>
        </div>

        <div>
          <Card
            className={styles.card}
            title="Google Drive"
            titleIcon={gDriveLogo}
            tags={['Productivity']}
            btns={
              <Button
                href="https://litgateway.com/apps/google-drive"
                type={'primary'}
              >
                Details
              </Button>
            }
            desc={
              <div className={styles.desc}>
                Grant access to Google Drive files with blockchain requirements
              </div>
            }
            img={driveBack}
          />
          <div className={styles.logos} />
        </div>
      </Columns>
    </PartBlock>
  )
}

export default NowLive
