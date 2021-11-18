import { Button, Columns, PartBlock, Title } from 'components'

import styles from './prebuild.module.scss'

const Prebuild = () => {
  const handleExplore = () => {}

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
              type="light"
              onClick={handleExplore}
            >
              Explore
            </Button>
          </div>
        </Columns>
        <div className={styles.selectImage}></div>
        <div className={styles.arrow}></div>
        <div className={styles.workflowContainer}></div>
      </div>
    </PartBlock>
  )
}

export default Prebuild
