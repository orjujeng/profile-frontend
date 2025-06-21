import React from 'react'
import styles from '../../public_style/Printbox.module.scss'

export default function Printbox({ children}) {
  return (
    <>
        <div className={styles.printboxWarp}>
          { children }
        </div>
    </>
  )
}
