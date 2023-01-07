import React from 'react'
import style from "../styles/header.module.css";
import illus from "../Assets/ILLUSTRATION.png"
import ellipse11 from "../Assets/Ellipse 11.png"
import ellipse21 from "../Assets/Ellipse 21.png"
import ellipse16 from "../Assets/Ellipse 16.png"
import ellipse19 from "../Assets/Ellipse 20.png"
import searchicon from "../Assets/search.png"

export default function Header() {
  return (

    <div className={style.headerContainer}>

      <img className={style.sixteen} src={ellipse16} />
      <img className={style.nineteen} src={ellipse19} />

      <div className={style.relative}>
        <input type='text' placeholder='Search a Term | Topic' />
        <img src={searchicon} className={style.searchh} />
      </div>


      <div className={style.flex}>

        <img className={style.orangecolor} src={ellipse21} />
        <img className={style.eleven} src={ellipse11} />

        <div className={style.flexone}>

          <div className={style.just}>
            <p >Claim a Free Quote</p>

            <div className={style.heading}>
              <h1><span style={{ borderBottom: "8px solid orange" }}>Get started</span> on fulfilling</h1>
              <h1>your Dubai or UAE</h1>
              <h1>dream.</h1>

            </div>

            <p>UAE & Offshore Company</p>


            <div className={style.flexonepara}>
              <h3>We provide you with information about UAE or</h3>
              <h3>Offshore Company Registration & help you</h3>
              <h3>setup your company with a bank account and</h3>
              <h3>visas.</h3>
            </div>

            <div className={style.flexonebtns}>
              <button className={style.btn1}>Start a Company</button>
              <button className={style.btn2}>Renew a Company </button>
            </div>


          </div>

        </div>

        <div className={style.flextwo}>
          <img className={style.ilus} src={illus} />
        </div>

      </div>
    </div>
  )
}
