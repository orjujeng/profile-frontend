import React,{useEffect} from 'react'
import styles from '../../public_style/Description.module.scss'
export default function Description(props) {
  const {info,isMicro} = props

  return (
    <>
    <div className={isMicro?styles.warpApp: styles.warp}>
      {info}
    </div>
    </>
  )
}
