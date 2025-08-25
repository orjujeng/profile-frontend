import React from 'react'
import styles from '../../public_style/Progress.module.scss'
import Printbox from '../Printbox/Printbox'
export default function Progress(props) {
  const { imgPath,title,projectPercent,apiInfo,link} = props.processInfo;
  return (
    <>
      <Printbox>
        <div className={styles.progressWarp}>
          {/* img */}
          <div className={styles.imgWarp}>
            <img src={imgPath} />
          </div>
          <div className={styles.textWarp}>
            {/* title */}
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.projectProcess}>
              {projectPercent}<span>/100% Project Process</span>
            </div>
            {/* progress */}
            <div className={styles.progressLineWarp}>
              <div className={styles.progress}></div>
            </div>
            {/*percent */}
          </div>
          <div className={styles.textWarp}>
            {/* title */}
            <div className={styles.title}>
              {apiInfo}
            </div>
            {link.map((item) => (
            <div className={styles.link}>
              {item}
            </div>
            ))}
          </div>
        </div>
      </Printbox>
    </>
  )
}
