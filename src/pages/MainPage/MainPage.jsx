import styles from './main-page.module.scss'

import Hero from './Hero'
import Trustless from './Trustless'
import DesignedForDevelopers from './DesignedForDevelopers'
import Prebuild from './Prebuild'
import Why from './Why'
import NowLive from './NowLive'
import SupportedBy from './SupportedBy'
import Footer from './Footer'

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <Trustless />
      <DesignedForDevelopers />
      <Prebuild />
      <Why />
      <NowLive />
      <SupportedBy />
      <Footer />
    </div>
  )
}

export default MainPage
