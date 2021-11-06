import { PartBlock, Columns, Title, Button } from 'components'

import styles from './prebuild.module.scss'

const Prebuild = () => {
  const handleExplore = () => {}

  return (
    <PartBlock className={styles.wrapper}>
      <Columns>
        <div>
          <Title white value="Prebuild Components" />

          <p>
            We’ve built and open sourced a number of ways to use Lit Protocol
          </p>
        </div>

        <div className={styles.exploreWrapper}>
          <Button type="light" onClick={handleExplore}>
            Explore
          </Button>
        </div>
      </Columns>
    </PartBlock>
  )
}

export default Prebuild
