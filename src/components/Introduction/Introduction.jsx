import React from 'react'
import Header from '../../public_components/Header/Header'
import styles from '../../styles/Introduction.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Carousel from '../../public_components/Carousel/Carousel'
import Description from '../../public_components/Description/Description'
export default function Introduction() {
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  return (
    <>
    <div  className={isMobile ? styles.introductionWarpApp : styles.introductionWarp}>
      {/* hello header */}
      <Header title='HELLO'/>
      {/* h1 */}
      <Carousel title = 'This is a sample for' carouselList = {['Front End','Back End','CICD','AI']} isMobile ={isMobile} isMicro={isMicro}/>
      {/* h2 */}
      <Description info = 'Hi, this is Orjujeng pubilc website, you can find it cover most of the program technonlogy in any differenct areas, i wish this website can give you any insight as a programmer!' isMicro ={isMicro}/>
      {/* github button */}
      {/* email button */}
    </div>
    </>
  )
}
