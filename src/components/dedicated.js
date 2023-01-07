import React from 'react'
import style from "../styles/dedicated.module.css";
import arc from "../Assets/arc.png"
import elipse23 from "../Assets/true2.png"
import Titleheader from './titleheader';
const Dedicated = () => {
    return (
        <div className={style.whole}>
            <Titleheader />
            <img className={style.elipse23} src={elipse23} />
            <div className={style.headings}>
                <center><h2 className={style.underline}>Dedicated</h2></center>
                <h2>to our mission we are</h2>
            </div>

            <div className={style.para}>

                <img className={style.arc} src={arc} />

                <p>Our services include Company Formation & Renewals,</p>
                <p>Trust & Fiduciary, Tax Residency Setup With Family, Bank</p>
                <p>Accounts, Remote Management, Stock Trading</p>
                <p>Platforms, Ownership Solutions.</p>

            </div>

        </div>
    )
}

export default Dedicated