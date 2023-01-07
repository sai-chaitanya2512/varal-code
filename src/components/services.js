import React from 'react'
import style from "../styles/services.module.css"
import dungon from "../Assets/dungeon.png"
import vector1 from "../Assets/Vector-1.png"
import vector2 from "../Assets/Vector-2.png"
import ellip16 from "../Assets/Ellipse 16.png"
import ellip24 from "../Assets/Ellipse 24.png"
const Services = () => {
    return (
        <div className={style.whole}>

            <div className={style.freezone}>
                <img src={dungon} />
                <h2>UAE Free Zone Company</h2>
                <div className={style.para1}>
                    <p> Your registration agent, will answer all</p>
                    <p> of your questions and help you to reach</p>
                    <p> a conclusion that meets your objectives</p>
                    <p> of investing in the UAE.</p>
                </div>
                <p className={style.oranger}> Get Started</p>
            </div>

            <div className={style.freezone}>

                <img src={vector2} />
                <h2>Dubai Local Companies</h2>
                <div className={style.para1}>
                    <p> The Dubai LLC formation documents</p>
                    <p> are actually articles of organization or a</p>
                    <p> certificate of organization. You can get</p>
                    <p> yours today.</p>
                </div>
                <p className={style.oranger}> Get Started</p>
            </div>

            <div className={style.freezone}>

                <img src={vector1} />
                <h2>Offshore Compamies</h2>
                <div className={style.para1}>
                    <p>You can register an offshore company</p>
                    <p>and open its bank account in Dubai.</p>
                    <p>Your agent will help you along all the</p>
                    <p>process</p>
                </div>
                <p className={style.oranger}> Get Started</p>
            </div>


            <img className={style.sixteen} src={ellip16} />
            <img className={style.twofour} src={ellip24} />

        </div>
    )
}

export default Services