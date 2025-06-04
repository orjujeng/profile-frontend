import React from 'react'
import styles from '../../styles/ReleaseNote.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Header from '../../public_components/Header/Header';
import Card from '../../public_components/Card/Card';
export default function ReleaseNote() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  const cardInfo = {

     date: '2025/05/01',
     header: '',
     desc:'', 
     label :[]
  }
  return (
    <>
      <div className={isMobile ? isMicro ? styles.releseNoteWarpMicro: styles.releseNoteWarpApp : styles.releseNoteWarp}>
              {/*  header */}
              <Header title='RELEASE NOTE' />
              {/* card list */}
              <Card data = {cardInfo}/>
              {/* pPagination */}
      </div>
    </>
  )
}