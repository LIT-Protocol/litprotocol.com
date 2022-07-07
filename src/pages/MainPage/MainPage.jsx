import styles from './main-page.module.scss'
import React, { Suspense } from 'react'

import Hero from './Hero'
import FloatingLogosHero from './FloatingLogosHero/FloatingLogosHero'
import Trustless from './Trustless'

const DesignedForDevelopers = React.lazy(() =>
  import('./DesignedForDevelopers'),
)
const Prebuild = React.lazy(() => import('./Prebuild'))
const Why = React.lazy(() => import('./Why'))
const NowLive = React.lazy(() => import('./NowLive'))
const SupportedBy = React.lazy(() => import('./SupportedBy'))
const Footer = React.lazy(() => import('./Footer'))

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <FloatingLogosHero />
      <Hero />
      <Trustless />
      <Suspense fallback={<div className={'loading'}>Loading...</div>}>
        <DesignedForDevelopers />
        <Prebuild />
        <Why />
        <NowLive />
        <SupportedBy />
        <Footer />
      </Suspense>
    </div>
  )
}

export default MainPage
