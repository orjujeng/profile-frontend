import React from 'react'
import styles from '../../public_style/SubTitle.module.scss'
export default function SubTitle(props) {
    const {title,isMobile} = props;
  return (
    <>
    <div className={isMobile?styles.mobileWrap:styles.wrap}>
      {title}
    </div>
    </>
  )
}
