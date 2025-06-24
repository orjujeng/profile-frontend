import React from 'react'
import Printbox from '../Printbox/Printbox'
import styles from '../../public_style/Bar.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import MovingIcon from '@mui/icons-material/Moving';
import { green } from '@mui/material/colors';
import BarList from '../BarList/BarList';
export default function Bar(props) {
    const { title } = props;
    const { descPercent, descStatus, descDate,chartInfo} = props
    const { width } = checkWindowSize();
    const isMobile = width <= 1024;
    const isMicro = width <= 766;
    return (
        <>
            <Printbox>
                <div className={isMobile ? isMicro ? styles.barTitleWarpMicro : styles.barTitleWarpApp : styles.barTitleWarp}>
                    {title}
                </div>
                <div className={styles.barMainWarp}>
                    <div className={styles.barDesc}>
                        <div className={styles.barDescPercent}>
                            {descPercent}
                        </div>
                        <div className={styles.barDescStatus}>
                            {descStatus}
                        </div>
                        <div className={styles.barDescStartDate}>
                            <MovingIcon sx={{ color: green[500] }} />
                            &nbsp; {descDate}
                        </div>
                    </div>
                    <div className={styles.barChart}>
                        {chartInfo.map((info)=>{
                                return <BarList chartInfo={info}/>
                              })}
                    </div>
                </div>
            </Printbox>
        </>
    )
}
