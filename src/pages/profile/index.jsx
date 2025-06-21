import React from 'react'
import Title from '../../components/Title/Title'
import styles from '../../styles/Profile.module.scss'
import Introduction from '../../components/Introduction/Introduction'
import Frontend from '../../components/Frontend/Frontend'
import checkWindowSize from '../../utils/checkWindowsSize'
import Backend from '../../components/Backend/Backend' 
import ReleaseNote from '../../components/ReleaseNote/ReleaseNote'
import Progress from '../../components/Progress/Progress'
export default function profile() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  return (
    <>
    <div className={styles.titleWarp}>
      <Title/>
    </div>
    <div className={styles.introductionWarp}>
      <Introduction/>
    </div>
    <div className={isMobile ? styles.frontendWarpApp: styles.frontendWarp}> 
      <Frontend/>
    </div>
    <div className={isMobile ? styles.backendWarpApp: styles.backendWarp}> 
      <Backend/>
    </div>
    <div className={styles.releaseNoteWarp}> 
      <ReleaseNote/>
    </div>
    <div className={styles.progressWarp}> 
      <Progress/>
    </div>
    </>
  )
}
