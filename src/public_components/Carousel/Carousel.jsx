import React,{useEffect, useState} from 'react'
import styles from '../../public_style/Carousel.module.scss'
export default function Carousel(props) {
  const {title,carouselList,isMobile,isMicro} = props
  const [carouselListIndex, setCarouselListIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
        carouselList.length-1>carouselListIndex?setCarouselListIndex(pre => (pre + 1) % carouselList.length):setCarouselListIndex(0)
      }, 2000);
        return () => clearInterval(timer)
      }, []);
  return (
    <>
    <div className={isMobile ? isMicro ? styles.titleMicro :styles.titleApp : styles.title}>
     {title}
    </div> 
    <div className={isMobile ? isMicro ? styles.carouselListMicro : styles.carouselListApp : styles.carouselList} key={`animate-${carouselListIndex}`}>
        {carouselList[carouselListIndex]}
    </div>
    </>
  )
}


