import React from 'react'
import stylees from "../../styles/boxes/secondpart.module.css"
import pur from "../../Assets/pur.png"
import jir from "../../Assets/jir.png"
import vector from "../../Assets/Vector.png"
import ellipse15 from "../../Assets/Ellipse 15.png"

const Secondpart = () => {
    return (
        <div className={stylees.firstpart}>

            <img className={stylees.ellipse15} src={ellipse15} />

            <div className={stylees.tabgiver}>
                <center> <img src={pur} /></center>
                <h2 >Advice & Guidance</h2>

                <p>All activities in the UAE are licensed.</p>
                <p>Whether manufacturing, finance,</p>
                <p>trading, marketing, consultancy or</p>
                <p>restaurants. In some countries only</p>
                <p>manufacturing is licensed. In others</p>
                <p>there is a threshold below which</p>
                <p>business are encouraged. Get our</p>
                <p>insightfull guidance today.</p>
                <p className={stylees.learn}>Learn more <img src={vector} /></p>
            </div>

            <div className={stylees.tabgiver1}>
                <center> <img src={jir} /></center>
                <h2 >UAE Company Visas</h2>

                <p> Your application for visas is critical</p>
                <p> especially if you intend to move to</p>
                <p> Dubai. This becomes even more</p>
                <p> urgent if your family will also move</p>
                <p> with you. All the paperwork is done</p>
                <p> on your behalf smoothly so that you</p>
                <p> may only focus on doing what</p>
                <p> matters most to you.</p>
                <p className={stylees.learn}>Learn more <img src={vector} /></p>
            </div>

            <div className={stylees.paras}>
                <p>Learn the ways in which you can benefit</p>
                <p>from a UAE/Offshore Company. Then get</p>
                <p>started on fulfilling your UAE dream</p>
                <p className={stylees.blu}>Claim a Free Quote</p>
            </div>

        </div>
    )
}

export default Secondpart