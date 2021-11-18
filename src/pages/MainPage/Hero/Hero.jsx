import LeftHeroBlock from './LeftHeroBlock'
import RightHeroBlock from './RightHeroBlock'

import { PartBlock } from 'components'

import styles from './hero.module.scss'
import Top from './Top'

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
      <span className={styles.logoContainer}>
        <div className={styles.zoomLogo} />
        <div className={styles.ifpsLogo} />
        <div className={styles.googleLogo} />
        <div className={styles.gatherLogo} />
      </span>
    </PartBlock>
  )
}

export default Hero
