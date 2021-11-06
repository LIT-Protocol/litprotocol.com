import Top from './Top'

import LeftHeroBlock from './LeftHeroBlock'
import RightHeroBlock from './RightHeroBlock'

import { PartBlock } from 'components'

import styles from './hero.module.scss'

const Hero = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Top />

      <div className={styles.inner}>
        <div className={styles.topWrapper}>
          <LeftHeroBlock />

          <RightHeroBlock />
        </div>
      </div>
    </PartBlock>
  )
}

export default Hero
