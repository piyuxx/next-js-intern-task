import React from 'react'
import "@/style/navbar.css"
import RoundButton from './RoundButton'
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="/assets/img/logo.png" alt="logo" className='logo-img' />
        <div className="navbar-button">
          <RoundButton text={'XEROCODEE'} />
        </div>
      </div>
    </>
  )
}

export default Navbar