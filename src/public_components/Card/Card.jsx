import React from 'react'
import styles from '../../public_style/Card.module.scss'
export default function Card(props) {
  const {data} = props
  const { date, header, desc, label} = data;
  return (
    <>
      {/* date */}
      {date}
      {/* header */}
      {header}
      {/* desc */}
      {desc}
      {/* lable */}
      {label}
    </>
  )
}
