import React from 'react'
import styles from '../../styles/Progress.module.scss'
import checkWindowSize from '../../utils/checkWindowsSize'
import Header from '../../public_components/Header/Header';
import SemiCBar from '../../public_components/SemiCBar/SemiCBar';
import Bar from '../../public_components/Bar/Bar';
import ProgressRow from '../../public_components/Progress/Progress';
export default function Progress() {
    const { width } = checkWindowSize();
    const isMobile = width <= 1024;
    const isMicro = width <= 766;
    const chartInfo = [
       ['Profile',90,'Process','#f35a5f'],
       ['Login',0,'Process','#f55d14'],
       ['Request',10,'Process','#e4a50d'],
       ['Main',20,'Process','#26bb28'],
       ['TBD',100,'Process','#34ca87']
    ]
    const processInfo = {
      imgPath :'https://ts1.tc.mm.bing.net/th/id/OIP-C.XC5FEd38gvc6KZf1WYmvRwHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      title : 'Auth Api',
      projectPercent : 70,
      apiInfo:'Swagger / Postman',
      link:['https://swagger.io/tools/swagger-ui/','https://www.postman.com/']
    }
  return (
    <>
    <div className={isMobile ? isMicro ? styles.progressWarpMicro : styles.progressWarpApp : styles.progressWarp}>
      <Header title='PROGRESS' />
      <div className={isMicro ? styles.barWarpMicro : styles.barWarp}>
        <SemiCBar title ='All Project Progress' percent = {20} desc= {'Since 2025 Mar'} dataTime = {'June 2025'}/>
        <div className={styles._}></div>
        <Bar title ='Front Project Progress' descPercent = '74' descStatus ='Undergoing' descDate = {'Since 2025 Mar'} chartInfo ={chartInfo} maxHeight={160}/>
      </div>
      <div className={styles.backendProgressWarp}>
        <ProgressRow processInfo={processInfo}/>
        <ProgressRow processInfo={processInfo}/>
        <ProgressRow processInfo={processInfo}/>
        <ProgressRow processInfo={processInfo}/>
      </div>
    </div>
    </>
  )
}
