import React from 'react'
import style from "../../styles/footer/footerpart2.module.css"

import juva from "../../Assets/juva.png"
import fb from "../../Assets/fb.png"
import linkedin from "../../Assets/linkedin.png"
import yt from "../../Assets/yt.png"
import insta from "../../Assets/insta.png"
const Footerpart2 = () => {
    return (
        <div className={style.whole}>

            <div className={style.readabout}>
                <h3>Get to know the whole us and</h3>
                <h3>more of our services</h3>
            </div>

            <ul>
                <li><b>Services</b></li>
                <li>Products</li>
                <li>Solutions</li>
                <li>Assurance</li>
                <li>FAQ</li>
                <li>Working at Varal-Singhania</li>
            </ul>

            <ul>
                <li><b>Policies</b></li>

                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>


            <ul>
                <li><b>About</b></li>

                <li>About Us</li>
                <li>Contact Us</li>
            </ul>



            <ul>
                <li><b>Address</b></li>

                <li>608 One Lake Plaza, Cluster T,</li>
                <li>Al Sarayat Street, Jumeirah</li>
                <li>Lake Towers</li>
                <li>Dubai</li>
                <li>United Arab Emirates</li>

                <br />

                <span className={style.hide}> <li>Office Hours: Sunday to</li>
                    <li>Thursday 8:30 AM to 6:30 PM</li>
                    <li>[GMT+4]</li>
                    <li>M: +971 55 794 2016</li>
                    <li>O: +971 4 447 2061</li></span>
            </ul>



            <ul className={style.hider}>
                <li><b>Subscribe Now</b></li>

                <li>  Sunbscribe now to receive our</li>
                <li>  Newsletters about amazing</li>
                <li>  opportunities in Dubai</li>
            </ul>



            <div className={style.inputmail}>
                <input placeholder='Enter email address' />
                <img className={style.juva} src={juva} />
            </div>


            <div className={style.social}>
                <img src={fb} />
                <img src={insta} />
                <img src={linkedin} />
                <img src={yt} />
            </div>
        </div>
    )
}

export default Footerpart2