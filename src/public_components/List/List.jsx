import React from 'react'
import ListItem from '../ListItem/ListItem'
import styles from '../../public_style/List.module.scss';
export default function List(props) {
  const names = props.names
  return (
    <>
    <div className={styles.list}>
      {names.map((name)=>{
        return <ListItem name={name}/>
      })}
    </div>
    </>
  )
}
