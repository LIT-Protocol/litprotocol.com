import { PartBlock, Columns, Title, Button, Card } from 'components'

import styles from './now-live.module.scss'

import gDriveLogo from './assets/googleDrive.png'
import driveBack from './assets/driveBack.png'

const NowLive = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Columns className={styles.inner}>
        <div>
          <Title white value="The Gateway is now live" />

          <p>
            Lit Gateway is your portal for connecting blockchain wallets to the
            rest of the internet.
          </p>
          <p>Find your apps, collect your offers</p>
        </div>

        <div>
          <Card
            className={styles.card}
            title="Google Drive"
            titleIcon={gDriveLogo}
            tags={['Productivity']}
            btns={
              <Button href="https://litgateway.com/apps/google-drive">
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
        </div>
      </Columns>

      <div className={styles.logos} />
    </PartBlock>
  )
}

export default NowLive
