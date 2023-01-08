import React from 'react'
import stylers from "../../styles/footer/footerpart1.module.css"
import wifipic from "../../Assets/Vector-4.png"
import contact from "../../Assets/Vector-3.png"


const Footerpart1 = () => {
    return (
        <div className={stylers.whole}>

            <div className={stylers.readabout}>
                <h3>Read about our blogs for more</h3>
                <h3>information on our processes</h3>
            </div>


            <div className={stylers.howstart}>

                <div className={stylers.wifipicdiv}>
                    <img className={stylers.wifipic} src={wifipic} />
                </div>

                <div className={stylers.five}>
                    <h3>How to start a company
                        formation in Dubai</h3>
                    <p className={stylers.siglblu}>5 Minutes</p>

                </div>
            </div>
            <div className={stylers.howstart}>

                <div className={stylers.wifipicdiv}>
                    <img className={stylers.wifipic} src={wifipic} />
                </div>

                <div className={stylers.five}>
                    <h3>How to start a company
                        formation in Dubai</h3>
                    <p className={stylers.siglblu}>5 Minutes</p>

                </div>
            </div>
            <div className={stylers.howstart1}>

                <div className={stylers.wifipicdiv1}>
                    <img className={stylers.wifipic} src={wifipic} />
                </div>

                <div className={stylers.five}>
                    <h3>SEO Dubai: Who benefits
                        the most?</h3>
                    <p className={stylers.siglblu1}>5 Minutes</p>

                </div>
            </div>

            <div className={stylers.readabout1}>
                <h3>Satidfied We are When Our</h3>
                <h3> Customers Are Happy</h3>
            </div>



            <div className={stylers.review}>

                <div className={stylers.imgdiv}>
                    <img className={stylers.contactimg} src={contact} />
                </div>

                <div className={stylers.reviewpara}>
                    <p>
                        I am very happy with them. I’ll
                        continue to use their services in
                        future & highly recommend them
                        to anyone,</p>
                    <h4>Muhib Abrar</h4>
                </div>

            </div>




            <div className={stylers.review}>

                <div className={stylers.imgdiv}>
                    <img className={stylers.contactimg} src={contact} />
                </div>

                <div className={stylers.reviewpara}>
                    <p>
                        Rama has a high level of integrity,
                        intellect, knowledge of his
                        business, resourcefulness and
                        humanity,</p>
                    <h4>Colin Saldahna</h4>
                </div>

            </div>




            <div className={stylers.review}>

                <div className={stylers.imgdiv}>
                    <img className={stylers.contactimg} src={contact} />
                </div>

                <div className={stylers.reviewpara}>
                    <p>
                        Your advise was so complete that I
                        actually realized how beneficial
                        this would be to my clients and my
                        business.</p>
                    <h4>Mark Swann</h4>
                </div>

            </div>




        </div >
    )
}

export default Footerpart1