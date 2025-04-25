import React from 'react'
import Header from '../../public_components/Header/Header'
import styles from '../../styles/Introduction.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Carousel from '../../public_components/Carousel/Carousel'
import Description from '../../public_components/Description/Description'
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton'
import DownArrow from '../../public_components/DownArrow/DownArrow'
export default function Introduction() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  const githubInfo= {
    name: 'Github',
    image : 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    style : 'light'
  }
  const emailInfo= {
    name: 'Email',
    image : 'https://developers.google.com/identity/images/branding_guideline_sample_nt_rd_sl.svg'
  }
  return (
    <>
    <div  className={isMobile ? styles.introductionWarpApp : styles.introductionWarp}>
      {/* hello header */}
      <Header title='HELLO'/>
      {/* h1 */}
      <Carousel title = 'This is a sample for' carouselList = {['Front End','Back End','CICD','AI']} isMobile ={isMobile} isMicro={isMicro}/>
      {/* h2 */}
      <Description info = 'Hi, this is Orjujeng pubilc website, you can find it cover most of the program technonlogy in any different areas, i wish this website can give you some insights as a programer!' isMicro ={isMicro}/>
      <div className={styles.buttonsWarp}>
      {/* github button */}
      <CapsuleButton data = {githubInfo}/>
      {/* email button */}
      <CapsuleButton data = {emailInfo}/>
      </div>
      {/* down arrow */}
      <DownArrow disapperHight={300} />
    </div>
    </>
  )
}
