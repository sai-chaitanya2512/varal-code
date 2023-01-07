import React from 'react'
import stylees from "../../styles/boxes/firstpart.module.css"
import giri from "../../Assets/giri.png"
import vector from "../../Assets/Vector.png"
import flight from "../../Assets/flight.png"
import ellipse14 from "../../Assets/big1.png"
import ellipse11 from "../../Assets/true2.png"




const Firstpart = () => {
    return (
        <div className={stylees.firstpart}>

            <img className={stylees.ellipse14} src={ellipse14} />
            <img className={stylees.ellipse11} src={ellipse11} />

            <div className={stylees.paras}>
                <p>Learn the ways in which you can benefit</p>
                <p>from a UAE/Offshore Company. Then get</p>
                <p>started on fulfilling your UAE dream</p>
                <p className={stylees.blu}>Claim a Free Quote</p>
            </div>

            <div className={stylees.tabgiver}>
                <center> <img src={giri} /></center>
                <h2 >Bank Account Setup</h2>

                <p>There are many banks in the United</p>
                <p> Arab Emirates [UAE]. Both locally</p>
                <p> owned and branches of</p>
                <p> multinational ones. Foreign banks</p>
                <p> adjust according to their parent’s</p>
                <p> strategies and have changed local</p>
                <p> requirements overnight in the past.</p>
                <p> But we are here to help you.</p>
                <p className={stylees.learn}>Learn more <img src={vector} /></p>
            </div>

            <div className={stylees.tabgiver1}>
                <center> <img src={flight} /></center>
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



        </div>
    )
}

export default Firstpart