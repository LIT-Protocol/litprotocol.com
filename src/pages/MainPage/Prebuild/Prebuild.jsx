import { Button, Columns, PartBlock, Title } from 'components'

import styles from './prebuild.module.scss'

const Prebuild = () => {
  const handleExplore = () => {
    window
      .open(
        'https://developer.litprotocol.com/docs/accessControlModal',
        '_blank',
      )
      .focus()
  }

  return (
    <PartBlock className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Columns>
          <div className={styles.descriptionContainer}>
            <Title white value="Prebuilt Components" />

            <p className={styles.prebuildDescription}>
              We’ve built and open sourced a number of ways to use Lit Protocol
            </p>
            <Button
              className={styles.exploreButton}
              type="tertiary"
              onClick={handleExplore}
            >
              Explore
            </Button>
          </div>
        </Columns>
        <div className={styles.selectImage} />
        <div className={styles.arrow} />
        <div className={styles.workflowContainer} />
      </div>
    </PartBlock>
  )
}

export default Prebuild
