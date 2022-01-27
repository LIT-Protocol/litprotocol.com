import LeftHeroBlock from './LeftHeroBlock'
import RightHeroBlock from './RightHeroBlock'
import zoomLogo from './assets/zoomLogo.svg'
import ifpsLogo from './assets/ipfsLogo.svg'
import googleLogo from './assets/googleLogo.svg'
import gatherLogo from './assets/gatherLogo.svg'
import cloudflareLogo from './assets/cf-logo-v.svg'

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
        <img src={zoomLogo} className={styles.zoomLogo} />
        <img src={ifpsLogo} className={styles.ifpsLogo} />
        <img src={googleLogo} className={styles.googleLogo} />
        <img src={cloudflareLogo} className={styles.cloudflareLogo} />
        <img src={gatherLogo} className={styles.gatherLogo} />
      </span>
    </PartBlock>
  )
}

export default Hero
