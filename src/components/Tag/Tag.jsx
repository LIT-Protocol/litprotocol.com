import styles from './tag.module.scss'

const Tag = (props) => {
  const { children } = props

  return <div className={styles.tag}>{children}</div>
}

export default Tag
