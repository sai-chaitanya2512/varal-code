import React from 'react'
import style from "../styles/Titleheader.module.css";
import playbtn from "../Assets/playbtn.png"

const Titleheader = () => {
    return (
        <div className={style.whole}>
            <div className={style.blupara}> Watch the video about UAE or Offshore Company Registration</div>
            <div className={style.imgholder}><img src={playbtn} /></div>
        </div>

    )
}

export default Titleheader;