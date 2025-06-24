import React from 'react'
import styles from '../../public_style/BarList.module.scss'
export default function BarList(props) {
  const { chartInfo } = props;
  return (
    <>
      <div className="topPercent">{chartInfo[1]}</div>
      <div className="percentCol">{chartInfo[1]}</div>
      <div className="desc">{chartInfo[0]}</div>
      <div className="date">{chartInfo[2]}</div>
    </>
  )
}
