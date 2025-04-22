import React from 'react'
import styles from '../../public_style/CapsuleButton.module.scss'
import { colors } from '@mui/material';

export default function CapsuleButton(props) {
  const {data} = props;
  const name = data.name
  const image = data.image
  const style = data.style
  return (
    <>
      <div className={style=='light'?styles.warpLight:styles.warp} >
        <div className={styles.imgwarp}>
          {/* todo get this from props*/ }
            <img src={image} alt=""/>
        </div>
        <div className={style=='light'?styles.namewarpLight:styles.namewarp}>
            {name}
        </div>
      </div>
    </>
  )
}
