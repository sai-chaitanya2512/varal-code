import React from 'react'
import style from "../styles/nav.module.css"
import logo from "../Assets/logo.png"

export default function Nav() {
  return (
    <div className={style.navContainer}>
        <div>
            <img src={logo} />
        </div>
        <div>
            <div>Home</div>
            <div>Services</div>
            <div>Pricing</div>
            <div>About Us</div>
           
            <button>Start a company</button>
         </div>
    </div>
  )
}
