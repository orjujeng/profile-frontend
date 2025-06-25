import React from 'react'
import styles from '../../public_style/BarList.module.scss'
export default function BarList(props) {
  const { chartInfo,maxHeight } = props;
  const height = (chartInfo[1] / 100) * maxHeight; 
  return (
    <>
    <div className={styles.barListWarp}>
      <div className={styles.topPercent}>{chartInfo[1]}%</div>
      <div className={styles.percentCol} style={{ height: height,backgroundColor:chartInfo[3]}}></div>
      <div className={styles.desc}>{chartInfo[0]}</div>
      <div className={styles.status}>{chartInfo[2]}</div>
    </div>
    </>
  )
}
