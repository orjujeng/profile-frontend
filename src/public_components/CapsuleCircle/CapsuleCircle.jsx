import React from 'react'
import styles from '../../public_style/CapsuleCircle.module.scss'
export default function CapsuleCircle(props) {

  const { data } = props;
  const { name, isActive } = data;
  return (
    <>
      <div className={isActive === true ? styles.capsuleCircleActiveWarp : styles.capsuleCircleWarp}>
        {name}
      </div>
    </>
  )
}
