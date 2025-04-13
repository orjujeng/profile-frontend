import React from 'react'
import List from '../../public_components/List/List'
import Brand from '../../public_components/Brand/Brand'
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton'
import styles from '../../styles/Title.module.scss'
export default function Title() {
  const authInfo = {
    name : 'Login',
    image : ''
  }
  return (
    <>
    <div className={styles.titleWarp}>
      {/* all route page with function*/}
      <div className={styles.routeList}>
        <List names={['Wokers','Service','About']}/>
      </div>
      {/* logo */}
      <div className={styles.brand}>
        <Brand wording = "orjujeng"/>
      </div>
      {/* info and auth */}
      <div className={styles.authInfo}>
        <CapsuleButton data = {authInfo}/>
      </div>
      {/* auth entrance */}
    </div>
    </>
  )
}
