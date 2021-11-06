import cx from 'classnames'

import styles from './button.module.scss'

const Button = (props) => {
  const {
    type = 'primary',
    href,
    className,
    children,
    onClick = () => false,
  } = props

  const handleClick = (event) => {
    event.preventDefault()

    onClick()
  }

  if (href) {
    return (
      <a
        href={href}
        className={cx(styles.button, styles[type], className, styles.link)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cx(styles.button, styles[type], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
