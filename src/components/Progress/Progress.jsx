import React from 'react'
import styles from '../../styles/Progress.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Header from '../../public_components/Header/Header';
import SemiCBar from '../../public_components/SemiCBar/SemiCBar';
export default function Progress() {
    const { width } = checkWindowSize();
    const isMobile = width <= 1024;
    const isMicro = width <= 766;
  return (
    <>
    <div className={isMobile ? isMicro ? styles.progressWarpMicro : styles.progressWarpApp : styles.progressWarp}>
      <Header title='PROGRESS' />
      <div className={isMicro ? styles.barWarpMicro : styles.barWarp}>
        <SemiCBar title ='All Project Progress' percent = {20} desc= {'Since 2025 Mar'} dataTime = {'June 2025'}s/>
      </div>
    </div>
    </>
  )
}
