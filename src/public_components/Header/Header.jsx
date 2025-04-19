import React from 'react'
import styles from '../../public_style/Header.module.scss'
export default function Header(props) {
 const {title,isMobile} = props
  return (
    <>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.underline}>
    </div>
    </>
  )
}
