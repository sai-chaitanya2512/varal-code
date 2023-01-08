import React from 'react'
import style from "../styles/prices.module.css"
import top from "../Assets/top.png";
import top1 from "../Assets/top1.png";

const Prices = () => {
    return (

        <div className={style.whole}>

            <div className={style.onethree}>
                <div className={style.inner}>
                    <h2>AJMAN OFFSHORE</h2>
                    <h1>$2,997 <span className={style.grey}>One Time Payment</span></h1>
                    <p>Ajman Offshore New Company
                        formation includes</p>

                    <div className={style.ul}>
                        <li><img src={top} />Attestation Charges</li>
                        <li><img src={top} />Registered Agent</li>
                        <li><img src={top} />Registered Office</li>
                        <li><img src={top} />Varal Administrative</li>
                        <li><img src={top} />Preparing Statutory File</li>
                        <li><img src={top} />Liasing with Registration Authorities</li>
                        <li><img src={top} />Due Diligence Appraisal</li>
                        <li><img src={top} />Keeping The Register</li>
                        <li><img src={top} />Seal Charges</li>
                        <li><img src={top} />Certificate of Good Standing</li>
                        <button className={style.continuebtn1}>Continue</button>
                    </div>
                </div>
            </div>



            <div className={style.single}>
                <div className={style.inner1}>
                    <h2>RAK ICC</h2>
                    <h1>$2,997 <span className={style.grey1}>One Time Payment</span></h1>
                    <p>Rak Icc New Company formation
                        includes</p>

                    <div className={style.ul}>
                        <li><img src={top1} />Attestation Charges</li>
                        <li><img src={top1} />Registered Agent</li>
                        <li><img src={top1} />Registered Office</li>
                        <li><img src={top1} />Varal Administrative</li>
                        <li><img src={top1} />Preparing Statutory File</li>
                        <li><img src={top1} />Liasing with Registration Authorities</li>
                        <li><img src={top1} />Due Diligence Appraisal</li>
                        <li><img src={top1} />Keeping The Register</li>
                        <li><img src={top1} />Seal Charges</li>
                        <li><img src={top1} />Certificate of Good Standing</li>
                        <button className={style.continuebtn}>Continue</button>
                    </div>
                </div>
            </div>



            <div className={style.onethree}>
                <div className={style.inner}>
                    <h2>SHARJAH MEDIA CITY</h2>
                    <h1>$4,124 <span className={style.grey}>One Time Payment</span></h1>
                    <p>Sharjah Media City New
                        Company formation include</p>

                    <div className={style.ul}>
                        <li><img src={top} />Attestation Charges</li>
                        <li><img src={top} />Registered Agent</li>
                        <li><img src={top} />Registered Office</li>
                        <li><img src={top} />Varal Administrative</li>
                        <li><img src={top} />Preparing Statutory File</li>
                        <li><img src={top} />Liasing with Registration Authorities</li>
                        <li><img src={top} />Due Diligence Appraisal</li>
                        <li><img src={top} />Keeping The Register</li>
                        <li><img src={top} />Seal Charges</li>
                        <li><img src={top} />Certificate of Good Standing</li>
                    </div>
                    <button className={style.continuebtn1}>Continue</button>
                </div>
            </div>


        </div >
    )
}

export default Prices