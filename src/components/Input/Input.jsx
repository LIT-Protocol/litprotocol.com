import cx from 'classnames'

import styles from './input.module.scss'

const Input = (props) => {
  const {
    type = 'primary',
    placeholder,
    value,
    className,
    onChange = () => false,
  } = props

  const handleChange = (event) => {
    onChange(event.currentTarget.value)
  }

  const inputProps = { placeholder, value }

  return (
    <input
      className={cx(styles.input, styles[type], className)}
      type="text"
      onChange={(e) => handleChange(e)}
      {...inputProps}
    />
  )
}

export default Input
