import cx from 'classnames'

import { Tag } from 'components'

import styles from './card.module.scss'

const Card = (props) => {
  const { img, titleIcon, title, desc, btns, tags, className } = props

  return (
    <div className={cx(styles.card, className)}>
      <div className={styles.imgWrap}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleIcon}>
          <img src={titleIcon} alt="" />
        </div>
        <h3>{title}</h3>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.tags}>
          {tags?.length && tags.map((tag) => <Tag>{tag}</Tag>)}
        </div>
      </div>
      <div className={styles.btns}>{btns}</div>
    </div>
  )
}

export default Card
