import { Button, Card, Columns, PartBlock, Title } from 'components'

import styles from './now-live.module.scss'

import gDriveLogo from './assets/googleDrive.png'
import driveBack from './assets/driveBack.png'

const NowLive = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Columns className={styles.inner}>
        <div className={styles.descriptionText}>
          <Title white value="The Gateway is now live" />

          <p>
            Lit Gateway is your portal for connected blockchain experiences.
            Create token gated documents, play games to earn crypto, and so much
            more.
          </p>
          <p>
            <strong>Find your apps, collect your offers</strong>
          </p>
          <Button
            className={styles.enterButton}
            type={'primaryDark'}
            href="https://litgateway.com/"
          >
            Enter the Gateway
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
