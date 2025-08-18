import React from 'react'
import styles from '../../public_style/Progress.module.scss'
import Printbox from '../Printbox/Printbox'
export default function Progress(props) {
  const { imgPath,title,projectPercent} = props;
  return (
    <>
      <Printbox>
        <div className={styles.progressWarp}>
          {/* img */}
          <div className={styles.imgWarp}>
            <img src={imgPath} />
            11111
          </div>
          <div className={styles.textWarp}>
            {/* title */}
            <div className={styles.title}>
              {title} Water retention
            </div>
            <div className={styles.projectProcess}>
              {projectPercent} 11<span>/100% Project Process</span>
            </div>
            {/* progress */}
            <div className={styles.progressWarp}>
              <div className={styles.progress}></div>
            </div>
            {/*percent */}
          </div>
        </div>
      </Printbox>
    </>
  )
}
