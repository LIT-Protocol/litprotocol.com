import cx from 'classnames'

import styles from './columns.module.scss'

const Columns = (props) => {
  const { className, children } = props

  return (
    <div
      className={cx(
        styles.wrapper,
        styles[`colums-${children.length}`],
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Columns
