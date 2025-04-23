import React,{useEffect,useState} from 'react'
import styles from '../../public_style/DownArrow.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { grey } from '@mui/material/colors';
export default function DownArrow({disapperHight}) {
    const [opacity,setOpacity] = useState(1)
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          let newOpacity = 1 - (scrollTop / parseInt(disapperHight));
          newOpacity = Math.max(0, Math.min(1, newOpacity));
          setOpacity(newOpacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
    <div className={styles.downArrowWarp} style={{opacity: opacity}}>
      <KeyboardArrowDownIcon sx={{ fontSize: 50 , color: grey[200]  }}/>
    </div>
    </>
  )
}
