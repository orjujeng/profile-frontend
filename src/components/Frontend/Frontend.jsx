import React from 'react'
import styles from '../../styles/Frontend.module.scss'
import Header from '../../public_components/Header/Header';
import checkWindowSize from '../../utils/checkWindowsSize'
import SubTitle from '../../public_components/SubTitle/SubTitle';
import Description from '../../public_components/Description/Description';
import Tag from '../../public_components/Tag/Tag';
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton';
import img from '../../assets/png/mainpage-1-desktop-C6lInk3R.webp'
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
  return (
    <>
      <div className={isMicro ? styles.frontendWarpMicro : styles.frontendWarp}>
        {/*  header */}
        <Header title='WORK' />
        {/* web port */}
        <div className={isMobile ? styles.mainWarpApp : styles.mainWarp}>
          {isMobile ? 1111111111 : 
     <div className={styles.infoPart}>
    {/* left desc */}
    {/* subh1 */}
    <SubTitle title = 'Orjujeng.com'/>
    {/* desc */}
    <Description info = 'As you can see! This is my first FE project with Responsive Web Design' isMicro ={isMicro}/>    
    {/* tag */}
    <div className={styles.tagWarp}>
      <Tag type = 'FE' name = 'React 19'/>
      <Tag type = 'FE' name = 'SCSS'/>
      <Tag type = 'DEVOPS' name = 'S3/Nginx'/>
    </div>
    {/* button*2 */}
    <div className={styles.buttonsWarp}>
      {/* github button */}
        <CapsuleButton data = {repoInfo}/>
            {/* email button */}
        <CapsuleButton data = {siteInfo}/>
    </div>
    </div> 
    }
    {/* right pic pc and mobile only*/}
    {isMicro ? 11111111111 : 
     <div className={styles.thumbnailWarp}>
      {/* right pic */}
      <img src={img} alt="" />
    </div> 
    }
        </div>
      </div>
    </>
  )
}
