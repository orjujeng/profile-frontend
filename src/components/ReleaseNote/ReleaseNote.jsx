import React from 'react'
import styles from '../../styles/ReleaseNote.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Header from '../../public_components/Header/Header';
import Card from '../../public_components/Card/Card';
import PageHelper from '../../public_components/PageHelper/PageHelper';
export default function ReleaseNote() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  const cardInfo = {

    date: '2025/05/01',
    header: 'React Router 7 has Server Components?',
    desc: 'If you’ve been following the React world for a year or so, you might’ve heard about server components concept',
    label: ['react', 'react-router', 'remix']
  }
  return (
    <>
      <div className={isMobile ? isMicro ? styles.releseNoteWarpMicro : styles.releseNoteWarpApp : styles.releseNoteWarp}>
        {/*  header */}
        <Header title='RELEASE NOTE' />
        {/* card list */}
        <div className={styles.cardListWarp}>
          {/* card */}
          <Card data={cardInfo} />
          <Card data={cardInfo} />
          <Card data={cardInfo} />
          <Card data={cardInfo} />
          <Card data={cardInfo} />
          <Card data={cardInfo} />
        </div>
        {/* pPagination */}
        <div className={styles.pageHelperWarp}>
          <PageHelper totalPages = '10'/>
        </div>
      </div>
    </>
  )
}