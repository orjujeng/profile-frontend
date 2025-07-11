import React , {useState}from 'react'
import styles from '../../public_style/Card.module.scss'
import checkSpecificDate from '../../utils/checkSpecificDate';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CapsuleButton from '../CapsuleButton/CapsuleButton';
import checkWindowSize from '../../utils/checkWindowsSize';
export default function Card(props) {
  const {data} = props
  const { date, header, desc, label} = data;
  const shownDate = checkSpecificDate(date);
  const [showButton, setShowButton] = useState(false);
  const detailInfo = {
    name: 'Detail Information',
    style: 'light',
    image: ''
  }
  const specificCommit= {
    name: 'Code Commit',
    style: '',
    image: ''
  }
  const { width } = checkWindowSize();
  const isMobile = width <= 1024;
  const isMicro = width <= 766;
  return (
    <>
    {isMicro ? 
    <div className={showButton? styles.cardWarpWithShadowMicro: styles.cardWarpNoShadowMicro} onMouseEnter={() => setShowButton(true)}
     onMouseLeave={() => setShowButton(false)}>
      {/* date */}
      <div className={styles.dateWarp}>
        <CalendarTodayIcon sx={{ fontSize: 12}}/>
        <div className={styles.dateContext}>
        {shownDate}
        </div>
      </div>
      <div className={styles.headerWarpMicro}>
      {/* header */}
      {header}
      </div>
      <div className={styles.descWarp}>
      {/* desc */}
      {desc}
      </div>
      <div className={styles.labelWarp}>
      {/* lable */}
      {label.map((item, index) => (
        <div key={index} className={styles.sublabelWarp}>{item}</div>
      ))}
      </div>
      {/* button */}
      <div className={showButton?styles.buttonWarpMicro: styles.buttonWarpHiddenMicro}>
        <CapsuleButton data = {detailInfo}/>
        <CapsuleButton data = {specificCommit}/>
      </div>
    </div> :
    <div className={showButton? styles.cardWarpWithShadow: styles.cardWarpNoShadow} onMouseEnter={() => setShowButton(true)}
     onMouseLeave={() => setShowButton(false)}>
      {/* date */}
      <div className={styles.dateWarp}>
        <CalendarTodayIcon sx={{ fontSize: 12}}/>
        <div className={styles.dateContext}>
        {shownDate}
        </div>
      </div>
      <div className={isMobile ? styles.headerWarpApp : styles.headerWarp}>
      {/* header */}
      {header}
      </div>
      <div className={styles.descWarp}>
      {/* desc */}
      {desc}
      </div>
      <div className={styles.labelWarp}>
      {/* lable */}
      {label.map((item, index) => (
        <div key={index} className={styles.sublabelWarp}>{item}</div>
      ))}
      </div>
      {/* button */}
      <div className={showButton?styles.buttonWarp: styles.buttonWarpHidden}>
        <CapsuleButton data = {detailInfo}/>
        <CapsuleButton data = {specificCommit}/>
      </div>
    </div>}
    </>
  )
}
