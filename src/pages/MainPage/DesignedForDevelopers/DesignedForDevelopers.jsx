import { PartBlock, Columns, Button, Title } from 'components'

import styles from './designed-for-developers.module.scss'

const DesignedForDevelopers = () => {
  const handleReadTheDocs = () => {}

  return (
    <PartBlock className={styles.wrapper}>
      <Columns className={styles.inner}>
        <div>
          <Title white value="Designed For Developers" />

          <div>
            <p>
              The tools to connect blockchains to each other and the rest of the
              world
            </p>
            <p>
              Our focus is on building the right abstractions so your teams
              don’t need to stitch together disparate systems or spend months
              integrating access control functionality, without your teams
              having to trust a centralized controller.
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>
              Our focus is on building the right abstractions so your teams can
              start integrating access control functionality now and avoid
              stitching together disparate systems later.{' '}
            </p>
          </div>

          <Button
            className={styles.readTheDocsButton}
            type="secondary"
            onClick={handleReadTheDocs}
          >
            Read the Docs
          </Button>
        </div>
      </Columns>
    </PartBlock>
  )
}

export default DesignedForDevelopers
