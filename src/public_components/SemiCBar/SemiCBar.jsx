import React, { useEffect, useState } from 'react'
import Printbox from '../Printbox/Printbox'
import styles from '../../public_style/SemiCBar.module.scss'
import Chart from 'react-apexcharts'
import checkWindowSize from '../../utils/checkWindowsSize'
import MovingIcon from '@mui/icons-material/Moving';
import { green } from '@mui/material/colors';
export default function SemiCBar(props) {
    const { width } = checkWindowSize();
    const percent = props.percent;
    const desc = props.desc;
    const dataTime = props.dataTime;
    const isMobile = width <= 1024;
    const isMicro = width <= 766;

    const { title } = props;

    const calculateColor = () => {
        if (percent < 20) return '#FF0000';
        if (percent < 60) return '#FFFF00';
        return '#26bb28';
    }
    const ChartOptions = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: {
                    // margin: 150,
                    size: '70%',
                },
                dataLabels: {
                    name: {
                        fontSize: '1rem',
                        fontWeight: '200',
                        color: 'rgb(255, 255, 255)',
                        offsetY: '-10',
                    },
                    value: {
                        fontSize: '2rem',
                        color: 'rgb(255, 255, 255)',
                        fontWeight: '200',
                        offsetY: 30,
                    },
                },
            },
        },
        fill: {
            colors: [calculateColor()],
        },
        stroke: {
            lineCap: 'square',
            strokeWidth: '10%',
            margin: 5
        },
        labels: [dataTime],
    };
    return (
        <>
            <Printbox>
                <div className={isMobile?isMicro? styles.semiCBarTitleWarpMicro:styles.semiCBarTitleWarpApp:styles.semiCBarTitleWarp}>
                    {title}
                </div>
                <div className={styles.semiCBarWarp}>
                    <Chart options={ChartOptions} series={[percent]} type="radialBar"  />
                </div>
                <div className={isMobile?isMicro? styles.semiCStartDateWarpMicro:styles.semiCStartDateWarpApp:styles.semiCStartDateWarp}>
                    <MovingIcon sx={{ color: green[500] }}/>
                    &nbsp;
                    {desc}
                </div>
            </Printbox>
        </>
    )
}
