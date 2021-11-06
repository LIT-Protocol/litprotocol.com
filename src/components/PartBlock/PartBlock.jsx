import cx from 'classnames'
import styles from './part-block.module.scss'

const PartBlock = (props) => {
  const { className, children } = props

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}

export default PartBlock
