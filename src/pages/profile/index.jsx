import React from 'react'
import Title from '../../components/Title/Title'
import styles from '../../styles/Profile.module.scss'
import Introduction from '../../components/Introduction/Introduction'
import Frontend from '../../components/Frontend/Frontend'
export default function profile() {
  return (
    <>
    <div className={styles.titleWarp}>
      <Title/>
    </div>
    <div className={styles.introductionWarp}>
      <Introduction/>
    </div>
    <div className={styles.frontendWarp}>
      <Frontend/>
    </div>
    </>
  )
}
