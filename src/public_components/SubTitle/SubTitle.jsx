import React from 'react'
import styles from '../../public_style/SubTitle.module.scss'
export default function SubTitle(props) {
    const {title} = props;
  return (
    <>
    <div className={styles.wrap}>
      {title}
    </div>
    </>
  )
}
