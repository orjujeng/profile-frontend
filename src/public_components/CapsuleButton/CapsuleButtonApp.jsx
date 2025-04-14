import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from '../../public_style/CapsuleButtonApp.module.scss'
export default function CapsuleButtonApp(props) {
  const {data} = props;
  const name = data.name;
  return (
    <>
    <div className={styles.warp}>
      {name === 'Login'? <LoginIcon/>:<LogoutIcon/>}
    </div>
    </>
  )
}
