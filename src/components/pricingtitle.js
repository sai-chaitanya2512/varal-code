import React from 'react'
import style from "../styles/pricingtitle.module.css"
import ellipse7 from "../Assets/big.png"
import ellipse14 from "../Assets/big1.png"

const Pricingtitle = () => {
    return (

        <div className={style.whole}>
            <img className={style.ellipse7} src={ellipse7} />
            <img className={style.ellipse14} src={ellipse14} />
            <h2> Most <span className={style.underline}>popular affordable pricing</span> per</h2>
            <h2> jurisdictions are brought to you to</h2>
            <h2> kick off your adventure.</h2>

        </div>

    )
}

export default Pricingtitle