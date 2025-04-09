import React from 'react'
import List from '../../public_components/List/List'
import Brand from '../../public_components/Brand/Brand'
import CapsuleButton from '../../public_components/capsuleButton/capsuleButton'
export default function Title() {
  const authInfo = {
    name : 'Contact me',
    image : ''
  }
  return (
    <>
      {/* all route page with function*/}
      <div className="routeList">
        <List names={['Wokers','Service','About']}/>
      </div>
      {/* logo */}
      <div className="brand">
        <Brand wording = "orjujeng"/>
      </div>
      {/* info and auth */}
      <div className="authInfo">
        <CapsuleButton data = {authInfo}/>
      </div>
      {/* auth entrance */}
    </>
  )
}
