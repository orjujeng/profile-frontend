import React, { useRef, useState } from 'react'
import styles from '../../styles/Backend.module.scss'
import Header from '../../public_components/Header/Header';
import checkWindowSize from '../../utils/checkWindowsSize'
import SubTitle from '../../public_components/SubTitle/SubTitle';
import Description from '../../public_components/Description/Description';
import Tag from '../../public_components/Tag/Tag';
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton';
import img from '../../assets/png/image copy 2.png'
import checkLeftBounding from '../../utils/checkLeftBounding'
import microImg from '../../assets/png/image copy 3.png'
export default function Backend() {
  const { width } = checkWindowSize();
    const isMobile = width <= 1024;
    const isMicro = width <= 766;
    const repoInfo = {
      name: 'Code Repository',
      style: 'light',
      image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
    }
    const siteInfo = {
      name: 'Go To Service',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE84H4meueuyC578lSCHyl8LwonoKP5xylTg&s',
    }
    const infoRef = useRef(null);
    const leftBouding = checkLeftBounding(infoRef) + 'px';
    return (
      <>
        <div className={isMobile ? isMicro ? styles.backendWarpMicro: styles.backendWarpApp : styles.backendWarp}>
          {/*  header */}
          <div className={styles.titleWarp}>
            <Header title='SERVICE'/>
          </div>
          {/* web port */}
          <div className={isMobile ? isMicro ? styles.mainWarpMicro : styles.mainWarpApp : styles.mainWarp}>
            {isMicro ? <div className={styles.infoPartMicro}> 
            <SubTitle title='Authenticator Api' isMobile={isMobile}/>
            <Description info='Authenticator Api For Member Permission Management' isMicro={isMicro} />
              {/* tag */}
              <div className={styles.tagMicroWarp}>
                  <Tag type='BE' name='JDK 17' />
                  <Tag type='BE' name='Spring Boot' />
                  <Tag type='DEVOPS' name='AWS/K8S' />
                </div>
              </div>
              :
              <div className={styles.infoPart} ref={infoRef}>
                {/* left desc */}
                <SubTitle title='Authenticator Api' isMobile={isMobile}/>
                <Description info='Authenticator Api For Member Permission Management' isMicro={isMicro} />
                <div className={styles.tagWarp}>
                  <Tag type='BE' name='JDK 17' />
                  <Tag type='BE' name='Spring Boot' />
                  <Tag type='DEVOPS' name='AWS/K8S' />
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
               <div className={styles.thumbnailWarp} >
                {/* right pic */}
                <img src={img} width={leftBouding}/>
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
