import React from 'react'
import styles from '../../public_style/ListItem.module.scss';
export default function ListItem(props) {
  const name = props.name
  return (
    <>
      <div className={styles.item}>{name}</div>
    </>
  )
}
