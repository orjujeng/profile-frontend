import React from 'react'
import List from '../../public_components/List/List'
import Brand from '../../public_components/Brand/Brand'
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton'
import styles from '../../styles/Title.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import ListApp from '../../public_components/List/ListApp'
import CapsuleButtonApp from '../../public_components/CapsuleButton/CapsuleButtonApp'
export default function Title() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const authInfo = {
    name : 'Login',
    image : 'https://avatars.githubusercontent.com/u/61106078?v=4&size=64'
  }
  return (
    <>
    <div className={styles.titleWarp}>
      {/* all route page with function*/}
      <div className={styles.routeList}>
        {isMobile ? <ListApp/> : <List names={['Wokers','Service','About']}/>}
      </div>
      {/* logo */}
      <div className={styles.brand}>
        <Brand wording = "Orjujeng"/>
      </div>
      {/* info and auth */}
      <div className={styles.authInfo}>
      {isMobile ?<CapsuleButtonApp data = {authInfo}/> : <CapsuleButton data = {authInfo}/>}
      </div>
      {/* auth entrance */}
    </div>
    </>
  )
}
