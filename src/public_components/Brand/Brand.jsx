import React from 'react'
import styles from '../../public_style/Brand.module.scss'
export default function Brand(props) {
  return (
    <>
    <div className={styles.warp}>
      <div className={styles.wording}>
        {props.wording}
      </div>
      <div className={styles.endwith}>
        .com
      </div>
    </div>
    </>
  )
}
