import { PartBlock, Title } from 'components'

import styles from './supported-by.module.scss'

import logos from './assets/logos'

const SupportedBy = () => {
  return (
    <PartBlock className={styles.wrapper}>
      <Title pretitle="Supported By:" />

      <div className={styles.logos}>
        {logos.map((logo, i) => (
          <img key={i} src={logo.file} style={{ height: `${logo.height}px` }} />
        ))}
      </div>
    </PartBlock>
  )
}

export default SupportedBy
