import React from 'react'
import Header from '../../public_components/Header/Header'
import styles from '../../styles/Introduction.module.scss'
export default function Introduction() {
  return (
    <>
    <div className={styles.introductionWarp}>
      {/* hello header */}
      <Header title='HELLO'/>
      {/* h1 */}
      {/* h2 */}
      {/* github button */}
      {/* email button */}
    </div>
    </>
  )
}
