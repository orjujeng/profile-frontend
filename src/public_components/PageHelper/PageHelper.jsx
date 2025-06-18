import { useState } from "react"
import React from 'react'
import style from '../../public_style/PageHelper.module.scss'
import CapsuleButton from "../CapsuleButton/CapsuleButton";
import CapsuleCircle from "../CapsuleCircle/CapsuleCircle";
export default function PageHelper(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = props.totalPages;
  const newerInfo = {
    name: 'Newer',
    style: 'light',
    image: ''
  }

  const olderInfo = {
    name: 'Older',
    style: 'light',
    image: ''
  }

  const ellipsisInfo= {
    name: '...',
    style: 'light',
    image: ''
  }
  return (
    <>
    <div className={style.pageHelperWarp}>
      {currentPage == 1 ? null : <CapsuleButton data = {newerInfo} />}
      <CapsuleCircle data = {{name: currentPage, isActive: true}}/>
      <CapsuleCircle data = {{name: 2, isActive: false}}/>
      <CapsuleButton data = {ellipsisInfo}/>
      <CapsuleCircle data = {{name: 3, isActive: false}}/>
      {currentPage == totalPages ? null : <CapsuleButton data = {olderInfo}/>}
    </div>
    </>
  )
}
