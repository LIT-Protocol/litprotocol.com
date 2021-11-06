import cx from 'classnames'

import styles from './title.module.scss'

const Title = (props) => {
  const { pretitle, value, white = false, secondary = false } = props

  return (
    <div
      className={cx(
        styles.title,
        white && styles.white,
        secondary && styles.secondary,
      )}
    >
      {pretitle ? <span className={styles.pretitle}>{pretitle}</span> : null}
      {value ? <h3>{value}</h3> : null}
    </div>
  )
}

export default Title
