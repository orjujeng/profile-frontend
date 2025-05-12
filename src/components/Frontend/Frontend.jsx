import React, { useRef, useState } from 'react'
import styles from '../../styles/Frontend.module.scss'
import Header from '../../public_components/Header/Header';
import checkWindowSize from '../../utils/checkWindowsSize'
import SubTitle from '../../public_components/SubTitle/SubTitle';
import Description from '../../public_components/Description/Description';
import Tag from '../../public_components/Tag/Tag';
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton';
import img from '../../assets/png/mainpage-1-desktop-C6lInk3R.webp'
import checkLeftBounding from '../../utils/checkLeftBounding'
import microImg from '../../assets/png/image.png'
export default function Frontend() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;

  const repoInfo = {
    name: 'Code Repository',
    style: 'light',
    image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
  }
  const siteInfo = {
    name: 'View Online',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE84H4meueuyC578lSCHyl8LwonoKP5xylTg&s',
  }
  const thumbnailRef = useRef(null);
  const leftBouding = (width - checkLeftBounding(thumbnailRef))-15 + 'px';
  return (
    <>
      <div className={isMobile ? isMicro ? styles.frontendWarpMicro: styles.frontendWarpApp : styles.frontendWarp}>
        {/*  header */}
        <Header title='WORK' />
        {/* web port */}
        <div className={isMobile ? isMicro ? styles.mainWarpMicro : styles.mainWarpApp : styles.mainWarp}>
          {isMicro ? <div className={styles.infoPartMicro}> 
          <SubTitle title='Orjujeng.com' isMobile={isMobile}/>
          <Description info='As you can see! This is my first FE project with Responsive Web Design' isMicro={isMicro} />
            {/* tag */}
            <div className={styles.tagMicroWarp}>
                <Tag type='FE' name='React 19' />
                <Tag type='FE' name='SCSS' />
                <Tag type='DEVOPS' name='S3/Nginx' />
              </div>
            </div>
            :
            <div className={styles.infoPart}>
              {/* left desc */}
              {/* subh1 */}
              <SubTitle title='Orjujeng.com' isMobile={isMobile}/>
              {/* desc */}
              <Description info='As you can see! This is my first FE project with Responsive Web Design' isMicro={isMicro} />
              {/* tag */}
              <div className={styles.tagWarp}>
                <Tag type='FE' name='React 19' />
                <Tag type='FE' name='SCSS' />
                <Tag type='DEVOPS' name='S3/Nginx' />
              </div>
              {/* button*2 */}
              <div className={styles.buttonsWarp}>
                {/* github button */}
                <CapsuleButton data={repoInfo} />
                {/* email button */}
                <CapsuleButton data={siteInfo} />
              </div>
            </div>
          }
          {/* right pic pc and mobile only*/}
          {isMicro ? <div className={styles.thumbnailMicroWarp} >
              {/* right pic */}
              <img src={microImg} width='100%' />
            </div>
             :
            <div className={styles.thumbnailWarp} ref={thumbnailRef}>
              {/* right pic */}
              <img src={img} width={leftBouding} />
            </div>
          }
          {isMicro ?<div className={styles.buttonsMicroWarp}>
                {/* github button */}
                <CapsuleButton data={repoInfo} />
                {/* email button */}
                <CapsuleButton data={siteInfo} />
              </div>:null}
        </div>
      </div>
    </>
  )
}
