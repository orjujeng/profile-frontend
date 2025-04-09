import React from 'react'
import styles from '../../public_style/CapsuleButton.module.scss'
import poc from '../../assets/png/wallhaven-vq76dp_3840x1600.png'
export default function capsuleButton(props) {
  const {data} = props;
  const name = data.name
  return (
    <>
      <div className={styles.warp}>
        <div className={styles.imgwarp}>
            <img src={poc} alt=""/>
        </div>
        <div className={styles.namewarp}>
            {name}
        </div>
      </div>
    </>
  )
}
